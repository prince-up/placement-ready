import { subjects as initialSubjects } from './subjects';

const STORAGE_KEY = 'placement_ready_data';

export const getData = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(initialSubjects));
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
};

export const resetData = () => {
    localStorage.removeItem(STORAGE_KEY);
    return getData();
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
