# AI-First-CRM-HCP-Module

Log Interaction Screen (Simple idea)
User (sales person) can:

Option 1: Form

Doctor Name->Date->Notes->Product discussed

Next follow-up

Option 2: Chat (AI)
User types:
👉 “I met Dr Sharma, discussed diabetes medicine, follow-up next week”
AI will:
Extract data
Fill form automatically

🧠 LangGraph Agent (easy explanation)

Agent = Smart helper
Role:
Understand user input
Use tools
Save data

🛠️ 5 Tools (IMPORTANT for your assignment)
1. Log Interaction ✅ (must):  Save meeting data

AI converts chat → structured data

2. Edit Interaction ✅ (must):  Update old data
Example:
👉 “Change follow-up to Friday”

3. Get HCP History:  Show past meetings

4. Suggest Next Action
AI suggests:
👉 “Call doctor again”

5. Summarize Interaction: Short summary of meeting

🏗️ Simple Architecture

Frontend (React)
⬇
Backend (FastAPI)
⬇
LangGraph Agent
⬇
LLM (Groq)
⬇
Database (PostgreSQL)
