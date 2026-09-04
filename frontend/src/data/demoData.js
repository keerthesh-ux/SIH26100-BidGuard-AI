// src/data/demoData.js

export const defaultTenderData = {
    id: "GEM-2026-001",

    title: "Supply of Desktop Computers",

    department: "Government Department",

    category: "IT Hardware",

    submissionDeadline: "30 August 2026",

    estimatedValue: "₹25,00,000",

    requirements: [
        {
            id: 1,
            category: "Technical",
            requirement: "RAM",
            requiredValue: "16 GB",
            submittedValue: "16 GB",
            status: "Compliant"
        },

        {
            id: 2,
            category: "Technical",
            requirement: "Storage",
            requiredValue: "512 GB SSD",
            submittedValue: "512 GB SSD",
            status: "Compliant"
        },

        {
            id: 3,
            category: "Technical",
            requirement: "Processor",
            requiredValue: "Intel Core i5 or equivalent",
            submittedValue: "Intel Core i5",
            status: "Compliant"
        },

        {
            id: 4,
            category: "Commercial",
            requirement: "Warranty",
            requiredValue: "3 Years",
            submittedValue: "1 Year",
            status: "Non-Compliant"
        },

        {
            id: 5,
            category: "Eligibility",
            requirement: "ISO Certification",
            requiredValue: "ISO 9001",
            submittedValue: "Not Provided",
            status: "Non-Compliant"
        }
    ]
};


export const defaultBidData = {
    bidId: "BID-2026-001",

    vendor: "ABC Technologies Pvt. Ltd.",

    submittedDate: "28 August 2026",

    product: "Desktop Computer",

    quantity: 100,

    quotedAmount: "₹22,50,000"
};


export const defaultComplianceData = {
    score: 85,

    totalRequirements: 20,

    compliant: 17,

    nonCompliant: 3,

    status: "Partially Compliant",

    issues: [
        {
            requirement: "Warranty",
            required: "3 Years",
            submitted: "1 Year",
            severity: "High"
        },

        {
            requirement: "ISO Certification",
            required: "ISO 9001",
            submitted: "Not Provided",
            severity: "High"
        },

        {
            requirement: "Processor Specification",
            required: "Intel Core i5 or equivalent",
            submitted: "Specification mismatch",
            severity: "Medium"
        }
    ]
};