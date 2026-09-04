import os
import shutil

from services.ocr import extract_text_from_pdf


# --------------------------------------------------
# Backend directory
# --------------------------------------------------

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)


# --------------------------------------------------
# Upload directory
# --------------------------------------------------

UPLOAD_DIR = os.path.join(
    BASE_DIR,
    "uploads"
)


async def process_document(file):

    if not file.filename:
        raise ValueError("File name is missing.")

    # Create uploads folder only when needed
    # and only if it does not already exist.
    if not os.path.isdir(UPLOAD_DIR):
        os.makedirs(
            UPLOAD_DIR,
            exist_ok=True
        )

    # Prevent unsafe file paths
    filename = os.path.basename(
        file.filename
    )

    file_path = os.path.join(
        UPLOAD_DIR,
        filename
    )

    # Save uploaded file
    with open(
        file_path,
        "wb"
    ) as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )

    # OCR / PDF text extraction
    pages = extract_text_from_pdf(
        file_path
    )

    # Combine extracted text
    combined_text = "\n".join(
        page["text"]
        for page in pages
    )

    return {
        "filename": filename,
        "path": file_path,
        "pages": pages,
        "text": combined_text
    }