import React, { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    doctor: "",
    notes: "",
    product: "",
    followup: ""
  });

  const [chat, setChat] = useState("");

  const handleSubmit = async () => {
    await axios.post("http://localhost:8000/log", form);
    alert("Saved!");
  };

  const handleChat = async () => {
    const res = await axios.post("http://localhost:8000/chat", { message: chat });
    setForm(res.data); // auto fill form
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Log Interaction</h2>

      <input placeholder="Doctor" onChange={(e)=>setForm({...form, doctor:e.target.value})} /><br/>
      <input placeholder="Product" onChange={(e)=>setForm({...form, product:e.target.value})} /><br/>
      <input placeholder="Notes" onChange={(e)=>setForm({...form, notes:e.target.value})} /><br/>
      <input placeholder="Follow Up" onChange={(e)=>setForm({...form, followup:e.target.value})} /><br/>

      <button onClick={handleSubmit}>Save</button>

      <hr/>

      <h3>Chat Mode</h3>
      <input placeholder="Type message..." onChange={(e)=>setChat(e.target.value)} />
      <button onClick={handleChat}>Convert</button>
    </div>
  );
}

export default App;
