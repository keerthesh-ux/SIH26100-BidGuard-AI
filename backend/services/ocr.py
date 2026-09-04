import pymupdf
import pytesseract

from PIL import Image


# Windows Tesseract installation
pytesseract.pytesseract.tesseract_cmd = (
    r"C:\Program Files\Tesseract-OCR\tesseract.exe"
)


def extract_text_from_pdf(pdf_path):

    document = pymupdf.open(
        pdf_path
    )

    pages = []

    for page_number, page in enumerate(
        document
    ):

        # Try normal PDF text extraction
        text = page.get_text(
            "text"
        )

        if text and len(
            text.strip()
        ) > 20:

            pages.append({

                "page":
                    page_number + 1,

                "text":
                    text.strip(),

                "method":
                    "PDF_TEXT"
            })

        else:

            # Scanned PDF
            # Convert page to image

            pix = page.get_pixmap(
                matrix=pymupdf.Matrix(
                    2,
                    2
                ),
                alpha=False
            )

            image = Image.frombytes(
                "RGB",
                [
                    pix.width,
                    pix.height
                ],
                pix.samples
            )

            # OCR
            ocr_text = (
                pytesseract
                .image_to_string(
                    image,
                    lang="eng"
                )
            )

            pages.append({

                "page":
                    page_number + 1,

                "text":
                    ocr_text.strip(),

                "method":
                    "TESSERACT_OCR"
            })

    document.close()

    return pages