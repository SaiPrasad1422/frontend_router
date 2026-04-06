import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AddRule() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    action: "",
    direction: "both",
    rate: "",
    priority: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const payload = {
      device_ip: state.client_ip,
      remote_ip: state.server_ip,
      transport: state.transport,
      protocol: state.protocol,
      action: form.action,
      direction: form.direction,
      rate: form.rate || null,
      priority: form.priority || null,
      note: form.note || null,
    };

    try {
      await axios.post("http://127.0.0.1:8000/rules/add", payload);
      alert("Rule added successfully!");
      navigate("/rules");
    } catch (err) {
      console.error(err);
      alert("Failed to add rule");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Add Rule</h2>

      {/* 🔥 FLOW INFO */}
      <p>
        <strong>{state.client_ip}</strong> →{" "}
        <strong>{state.server_ip}</strong>
      </p>

      {/* 🔥 ACTION */}
      <div style={{ marginTop: "10px" }}>
        <label>Action:</label>
        <select name="action" onChange={handleChange}>
          <option value="">Select Action</option>
          <option value="throttle">Throttle</option>
          <option value="block">Block</option>
          <option value="prioritize">Prioritize</option>
          <option value="kill_flow">Kill Flow</option>
          <option value="tag">Tag Only</option>
        </select>
      </div>

      {/* 🔥 DIRECTION */}
      <div style={{ marginTop: "10px" }}>
        <label>Direction:</label>
        <select name="direction" onChange={handleChange}>
          <option value="download">Download</option>
          <option value="upload">Upload</option>
          <option value="both">Both</option>
        </select>
      </div>

      {/* 🔥 RATE (ONLY FOR THROTTLE) */}
      {form.action === "throttle" && (
        <div style={{ marginTop: "10px" }}>
          <label>Rate:</label>
          <input
            name="rate"
            placeholder="5mbit"
            value={form.rate}
            onChange={handleChange}
          />
        </div>
      )}

      {/* 🔥 PRIORITY (ONLY FOR PRIORITIZE) */}
      {form.action === "prioritize" && (
        <div style={{ marginTop: "10px" }}>
          <label>Priority:</label>
          <select name="priority" onChange={handleChange}>
            <option value="">Select</option>
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
          </select>
        </div>
      )}

      {/* 🔥 NOTE (OPTIONAL ALWAYS) */}
      <div style={{ marginTop: "10px" }}>
        <label>Note:</label>
        <input
          name="note"
          placeholder="Reason"
          value={form.note}
          onChange={handleChange}
        />
      </div>

      {/* 🔥 SUBMIT */}
      <button style={{ marginTop: "15px" }} onClick={handleSubmit}>
        Save Rule
      </button>
    </div>
  );
}

export default AddRule;