import React, { createContext, useState, useContext } from 'react';

const CohortContext = createContext();

export const CohortProvider = ({ children }) => {
    const [isCohortModalOpen, setIsCohortModalOpen] = useState(false);

    const openCohortModal = () => setIsCohortModalOpen(true);
    const closeCohortModal = () => setIsCohortModalOpen(false);

    return (
        <CohortContext.Provider value={{ isCohortModalOpen, openCohortModal, closeCohortModal }}>
            {children}
        </CohortContext.Provider>
    );
};

export const useCohort = () => {
    const context = useContext(CohortContext);
    if (!context) {
        throw new Error('useCohort must be used within a CohortProvider');
    }
    return context;
};
