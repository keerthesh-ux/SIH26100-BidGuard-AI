from pathlib import Path
from uuid import uuid4
import re

import fitz  # PyMuPDF
from docx import Document
from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

ALLOWED_EXTENSIONS = {".pdf", ".docx", ".txt"}

@app.get("/api/health")
def health():
    return {"message": "Backend connected!"}


def extract_text(file_path: Path) -> str:
    """Extract readable text from PDF, DOCX, or TXT files."""
    extension = file_path.suffix.lower()

    if extension == ".pdf":
        pdf = fitz.open(file_path)
        text = "".join(page.get_text() for page in pdf)
        pdf.close()
        return text

    if extension == ".docx":
        document = Document(file_path)
        return "\n".join(paragraph.text for paragraph in document.paragraphs)

    if extension == ".txt":
        return file_path.read_text(encoding="utf-8", errors="ignore")

    return ""


def get_keywords(text: str) -> list[str]:
    """
    Detect common tender-compliance terms mentioned in the tender.
    You can add project-specific terms to this list.
    """
    compliance_terms = [
        "gst",
        "pan",
        "turnover",
        "experience",
        "certificate",
        "registration",
        "technical",
        "financial",
        "eligibility",
        "bid security",
        "emd",
        "iso",
        "license",
        "msme",
        "startup",
        "audit",
        "security clearance",
    ]

    lower_text = text.lower()
    return [term for term in compliance_terms if term in lower_text]


@app.post("/api/upload-documents")
async def upload_documents(
    tender_document: UploadFile = File(...),
    bidder_document: UploadFile = File(...),
):
    tender_ext = Path(tender_document.filename).suffix.lower()
    bidder_ext = Path(bidder_document.filename).suffix.lower()

    if tender_ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Tender document must be PDF, DOCX, or TXT.",
        )

    if bidder_ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Bidder document must be PDF, DOCX, or TXT.",
        )

    tender_path = UPLOAD_DIR / f"tender_{uuid4()}{tender_ext}"
    bidder_path = UPLOAD_DIR / f"bidder_{uuid4()}{bidder_ext}"

    tender_path.write_bytes(await tender_document.read())
    bidder_path.write_bytes(await bidder_document.read())

    tender_text = extract_text(tender_path)
    bidder_text = extract_text(bidder_path)

    if not tender_text.strip() or not bidder_text.strip():
        raise HTTPException(
            status_code=400,
            detail="Could not extract text. Use a text-based PDF, DOCX, or TXT file.",
        )

    required_keywords = get_keywords(tender_text)
    bidder_text_lower = bidder_text.lower()

    matched_keywords = [
        term for term in required_keywords if term in bidder_text_lower
    ]

    missing_keywords = [
        term for term in required_keywords if term not in bidder_text_lower
    ]

    compliance_score = (
        round((len(matched_keywords) / len(required_keywords)) * 100, 2)
        if required_keywords
        else 0
    )

    return {
        "success": True,
        "message": "Documents analysed successfully.",
        "tender_file": tender_document.filename,
        "bidder_file": bidder_document.filename,
        "analysis": {
            "compliance_score": compliance_score,
            "requirements_detected": required_keywords,
            "matched_requirements": matched_keywords,
            "missing_requirements": missing_keywords,
            "tender_text_characters": len(tender_text),
            "bidder_text_characters": len(bidder_text),
        },
    }