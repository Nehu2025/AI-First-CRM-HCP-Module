from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Interaction(BaseModel):
    doctor: str
    notes: str
    product: str
    followup: str

db = []

@app.post("/log")
def log_interaction(data: Interaction):
    db.append(data)
    return {"message": "Saved"}

@app.post("/chat")
def chat(data: dict):
    msg = data["message"]

    # simple AI mock (replace with LLM later)
    return {
        "doctor": "Dr Sharma",
        "notes": msg,
        "product": "Diabetes Medicine",
        "followup": "Next Week"
    }