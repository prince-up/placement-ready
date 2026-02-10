import { subjects as initialSubjects } from './subjects';

const STORAGE_KEY = 'placement_ready_data';
const STORAGE_VERSION_KEY = 'placement_ready_data_version';
const PROGRESS_KEY = 'placement_ready_progress';
const DATA_VERSION = 'dbms-v17';

let progressMode = 'local';
let progressCache = null;
let progressClient = null;
let progressUserId = null;

const emitProgressUpdate = () => {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('progress-updated'));
    }
};

export const getData = () => {
    try {
        const savedVersion = localStorage.getItem(STORAGE_VERSION_KEY);
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved || savedVersion !== DATA_VERSION) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(initialSubjects));
            localStorage.setItem(STORAGE_VERSION_KEY, DATA_VERSION);
            return initialSubjects;
        }
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : initialSubjects;
    } catch (e) {
        console.error("Data integrity error:", e);
        return initialSubjects;
    }
};

export const saveData = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    localStorage.setItem(STORAGE_VERSION_KEY, DATA_VERSION);
};

export const resetData = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_VERSION_KEY);
    localStorage.removeItem(PROGRESS_KEY);
    return getData();
};

const getProgress = () => {
    try {
        const raw = localStorage.getItem(PROGRESS_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (e) {
        console.error('Progress read error:', e);
        return {};
    }
};

const saveProgress = (progress) => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
};

const buildProgressFromRows = (rows = []) => {
    const mapped = {};
    rows.forEach(row => {
        if (!row?.subject_id || !row?.content_type || !row?.item_key) return;
        if (!mapped[row.subject_id]) mapped[row.subject_id] = {};
        if (!mapped[row.subject_id][row.content_type]) mapped[row.subject_id][row.content_type] = {};
        mapped[row.subject_id][row.content_type][row.item_key] = row.updated_at || Boolean(row.is_read);
    });
    return mapped;
};

export const configureRemoteProgress = async (client, userId) => {
    if (!client || !userId) return;
    progressMode = 'remote';
    progressClient = client;
    progressUserId = userId;

    const { data, error } = await client
        .from('user_progress')
        .select('subject_id, content_type, item_key, is_read, updated_at');

    if (error) {
        console.error('Progress sync error:', error);
        progressCache = {};
        emitProgressUpdate();
        return;
    }

    progressCache = buildProgressFromRows(data || []);
    emitProgressUpdate();
};

export const clearRemoteProgress = () => {
    progressMode = 'local';
    progressClient = null;
    progressUserId = null;
    progressCache = null;
    emitProgressUpdate();
};

export const markItemRead = (subjectId, type, itemKey) => {
    if (!subjectId || !type || !itemKey) return;
    const readAt = new Date().toISOString();
    if (progressMode === 'remote' && progressClient && progressUserId) {
        if (!progressCache) progressCache = {};
        if (!progressCache[subjectId]) progressCache[subjectId] = {};
        if (!progressCache[subjectId][type]) progressCache[subjectId][type] = {};
        progressCache[subjectId][type][itemKey] = readAt;
        emitProgressUpdate();

        progressClient
            .from('user_progress')
            .upsert({
                user_id: progressUserId,
                subject_id: subjectId,
                content_type: type,
                item_key: itemKey,
                is_read: true,
                updated_at: readAt
            }, { onConflict: 'user_id,subject_id,content_type,item_key' })
            .then(({ error }) => {
                if (error) console.error('Progress write error:', error);
            });
        return;
    }

    const progress = getProgress();
    if (!progress[subjectId]) progress[subjectId] = {};
    if (!progress[subjectId][type]) progress[subjectId][type] = {};
    progress[subjectId][type][itemKey] = readAt;
    saveProgress(progress);
    emitProgressUpdate();
};

export const isItemRead = (subjectId, type, itemKey) => {
    const progress = progressMode === 'remote' ? (progressCache || {}) : getProgress();
    return Boolean(progress?.[subjectId]?.[type]?.[itemKey]);
};

export const getReadCount = (subjectId, type, items = []) => {
    if (!subjectId || !type || !Array.isArray(items)) return 0;
    const progress = progressMode === 'remote' ? (progressCache || {}) : getProgress();
    const bucket = progress?.[subjectId]?.[type] || {};
    const getKey = (item) => (type === 'concepts' ? item.title : item.question);
    return items.reduce((count, item) => (bucket[getKey(item)] ? count + 1 : count), 0);
};

const getProgressSnapshot = () => {
    return progressMode === 'remote' ? (progressCache || {}) : getProgress();
};

const extractReadDates = (snapshot) => {
    const dates = new Set();
    Object.values(snapshot).forEach(types => {
        Object.values(types || {}).forEach(items => {
            Object.values(items || {}).forEach(value => {
                if (typeof value === 'string') {
                    const date = value.slice(0, 10);
                    if (date) dates.add(date);
                }
            });
        });
    });
    return dates;
};

export const getProgressSummary = () => {
    const snapshot = getProgressSnapshot();
    let totalReads = 0;

    Object.values(snapshot).forEach(types => {
        Object.values(types || {}).forEach(items => {
            Object.values(items || {}).forEach(value => {
                if (value) totalReads += 1;
            });
        });
    });

    const readDates = extractReadDates(snapshot);
    const today = new Date();
    let streak = 0;
    for (let i = 0; ; i += 1) {
        const cursor = new Date(today);
        cursor.setDate(today.getDate() - i);
        const key = cursor.toISOString().slice(0, 10);
        if (readDates.has(key)) streak += 1;
        else break;
    }

    return {
        totalReads,
        coins: totalReads,
        streak,
        readDates: Array.from(readDates)
    };
};

export const getDailyReadTracker = (days = 7) => {
    const snapshot = getProgressSnapshot();
    const readDates = extractReadDates(snapshot);
    const today = new Date();
    const results = [];

    for (let i = days - 1; i >= 0; i -= 1) {
        const cursor = new Date(today);
        cursor.setDate(today.getDate() - i);
        const key = cursor.toISOString().slice(0, 10);
        results.push({
            date: key,
            label: cursor.toLocaleDateString('en-US', { weekday: 'short' }),
            hasRead: readDates.has(key)
        });
    }

    return results;
};

export const addConcept = (subjectId, concept) => {
    const data = getData();
    const subjectIndex = data.findIndex(s => s.id === subjectId);
    if (subjectIndex !== -1) {
        concept.isPersonal = true;
        // Use unshift to put newest items at the top
        data[subjectIndex].concepts.unshift(concept);
        saveData(data);
        return true;
    }
    return false;
};

export const addMCQ = (subjectId, mcq) => {
    const data = getData();
    const subjectIndex = data.findIndex(s => s.id === subjectId);
    if (subjectIndex !== -1) {
        mcq.isPersonal = true;
        // Use unshift to put newest items at the top
        data[subjectIndex].mcqs.unshift(mcq);
        saveData(data);
        return true;
    }
    return false;
};

export const deleteItem = (subjectId, type, index) => {
    const data = getData();
    const subjectIndex = data.findIndex(s => s.id === subjectId);
    if (subjectIndex !== -1) {
        data[subjectIndex][type].splice(index, 1);
        saveData(data);
        return data;
    }
    return null;
};

export const toggleImportant = (subjectId, type, index) => {
    const data = getData();
    const subjectIndex = data.findIndex(s => s.id === subjectId);
    if (subjectIndex !== -1) {
        const item = data[subjectIndex][type][index];
        item.important = !item.important;
        saveData(data);
        return data;
    }
    return null;
};
