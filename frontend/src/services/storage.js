// src/services/storage.js

const TENDER_KEY = "sih_tender_data";
const BID_KEY = "sih_bid_data";
const RESULT_KEY = "sih_compliance_result";


// ================================
// TENDER
// ================================

export const saveTender = (data) => {
    localStorage.setItem(
        TENDER_KEY,
        JSON.stringify(data)
    );
};

export const getTender = () => {

    const data = localStorage.getItem(TENDER_KEY);

    if (!data) {
        return null;
    }

    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading tender data:", error);
        return null;
    }
};


// ================================
// BID
// ================================

export const saveBid = (data) => {
    localStorage.setItem(
        BID_KEY,
        JSON.stringify(data)
    );
};

export const getBid = () => {

    const data = localStorage.getItem(BID_KEY);

    if (!data) {
        return null;
    }

    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading bid data:", error);
        return null;
    }
};


// ================================
// COMPLIANCE RESULT
// ================================

export const saveResult = (data) => {

    localStorage.setItem(
        RESULT_KEY,
        JSON.stringify(data)
    );
};

export const getResult = () => {

    const data = localStorage.getItem(RESULT_KEY);

    if (!data) {
        return null;
    }

    try {
        return JSON.parse(data);
    } catch (error) {
        console.error(
            "Error reading compliance result:",
            error
        );

        return null;
    }
};


// ================================
// CLEAR ALL DATA
// ================================

export const clearAllData = () => {

    localStorage.removeItem(TENDER_KEY);

    localStorage.removeItem(BID_KEY);

    localStorage.removeItem(RESULT_KEY);
};