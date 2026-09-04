import re


REQUIREMENTS = [

    {
        "id": "REQ-001",
        "category": "Financial",
        "title": "Minimum Annual Turnover",
        "description":
            "Average annual turnover must be at least "
            "₹5 Crore."
    },

    {
        "id": "REQ-002",
        "category": "Certification",
        "title": "ISO 9001 Certification",
        "description":
            "Bidder must possess a valid ISO 9001 certificate."
    },

    {
        "id": "REQ-003",
        "category": "Experience",
        "title": "Similar Project Experience",
        "description":
            "Bidder must have completed at least "
            "3 similar projects."
    },

    {
        "id": "REQ-004",
        "category": "Legal",
        "title": "GST Registration",
        "description":
            "Bidder must have a valid GST registration."
    },

    {
        "id": "REQ-005",
        "category": "Technical",
        "title": "OEM Authorization",
        "description":
            "OEM authorization must be provided."
    },

    {
        "id": "REQ-006",
        "category": "Technical",
        "title": "Product Warranty",
        "description":
            "Product must have at least 3 years warranty."
    }
]


def check_turnover(text):

    values = re.findall(
        r"(\d+(?:\.\d+)?)\s*(?:crore|cr)",
        text.lower()
    )

    numbers = [
        float(value)
        for value in values
    ]

    if not numbers:

        return {
            "status": "MISSING",
            "confidence": 90,
            "evidence": "No turnover information found."
        }

    average = sum(numbers) / len(numbers)

    if average >= 5:

        return {
            "status": "COMPLIANT",
            "confidence": 96,
            "evidence":
                f"Average turnover: ₹{average:.2f} Crore"
        }

    return {
        "status": "NON_COMPLIANT",
        "confidence": 97,
        "evidence":
            f"Average turnover: ₹{average:.2f} Crore"
    }


def keyword_check(text, keywords):

    text_lower = text.lower()

    for keyword in keywords:

        if keyword.lower() in text_lower:

            return {
                "status": "COMPLIANT",
                "confidence": 94,
                "evidence":
                    f"Detected: {keyword}"
            }

    return {
        "status": "MISSING",
        "confidence": 88,
        "evidence":
            "Required evidence was not found."
    }


def check_experience(text):

    matches = re.findall(
        r"(\d+)\s+(?:similar\s+)?projects?",
        text.lower()
    )

    if not matches:

        return {
            "status": "REVIEW",
            "confidence": 75,
            "evidence":
                "Experience could not be automatically verified."
        }

    count = max(
        int(x)
        for x in matches
    )

    if count >= 3:

        return {
            "status": "COMPLIANT",
            "confidence": 95,
            "evidence":
                f"{count} similar projects identified."
        }

    return {
        "status": "NON_COMPLIANT",
        "confidence": 96,
        "evidence":
            f"Only {count} similar projects identified."
    }


def analyze_documents(text):

    results = []


    # 1. Turnover

    result = check_turnover(text)

    results.append({
        **REQUIREMENTS[0],
        **result
    })


    # 2. ISO

    result = keyword_check(
        text,
        [
            "ISO 9001",
            "ISO9001"
        ]
    )

    results.append({
        **REQUIREMENTS[1],
        **result
    })


    # 3. Experience

    result = check_experience(text)

    results.append({
        **REQUIREMENTS[2],
        **result
    })


    # 4. GST

    result = keyword_check(
        text,
        [
            "GST",
            "GSTIN",
            "Goods and Services Tax"
        ]
    )

    results.append({
        **REQUIREMENTS[3],
        **result
    })


    # 5. OEM

    result = keyword_check(
        text,
        [
            "OEM Authorization",
            "OEM authorization",
            "OEM"
        ]
    )

    results.append({
        **REQUIREMENTS[4],
        **result
    })


    # 6. Warranty

    result = keyword_check(
        text,
        [
            "3 years warranty",
            "three years warranty",
            "36 months warranty",
            "3-year warranty"
        ]
    )

    results.append({
        **REQUIREMENTS[5],
        **result
    })


    return results


def calculate_summary(results):

    total = len(results)

    compliant = sum(
        r["status"] == "COMPLIANT"
        for r in results
    )

    non_compliant = sum(
        r["status"] == "NON_COMPLIANT"
        for r in results
    )

    missing = sum(
        r["status"] == "MISSING"
        for r in results
    )

    review = sum(
        r["status"] == "REVIEW"
        for r in results
    )

    score = round(
        compliant / total * 100
    )

    return {
        "total": total,
        "compliant": compliant,
        "non_compliant": non_compliant,
        "missing": missing,
        "review": review,
        "score": score
    }