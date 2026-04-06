import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AddRule() {
  const { state } = useLocation(); // 🔥 data from Flows
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
    // 🔥 CORRECT PAYLOAD (FROM FLOWS + FORM)
    const payload = {
      device_ip: state?.device_ip,
      remote_ip: state?.remote_ip,
      transport: state?.transport,
      protocol: state?.protocol,

      action: form.action,
      direction: form.direction,
      rate: form.rate || null,
      priority: form.priority || null,
      note: form.note || null,
    };

    console.log("STATE:", state);   // 🔥 debug
    console.log("PAYLOAD:", payload);

    try {
      await axios.post("http://127.0.0.1:8000/rules/add", payload);

      alert("Rule added successfully!");
      navigate("/rules"); // 🔥 redirect to rules page
    } catch (err) {
      console.error(err);
      alert("Failed to add rule");
    }
  };

  // 🔥 safety check (if user opens page directly)
  if (!state) {
    return <p>No flow data found. Please go back to flows.</p>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Add Rule</h2>

      {/* 🔥 FLOW INFO */}
      <div style={{ marginBottom: "20px" }}>
        <p>
          <strong>{state.device_ip}</strong> →{" "}
          <strong>{state.remote_ip}</strong>
        </p>
        <p>
          {state.transport} / {state.protocol}
        </p>
      </div>

      {/* 🔥 ACTION */}
      <div style={{ marginTop: "10px" }}>
        <label>Action:</label>
        <br />
        <select
          name="action"
          value={form.action}
          onChange={handleChange}
        >
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
        <br />
        <select
          name="direction"
          value={form.direction}
          onChange={handleChange}
        >
          <option value="download">Download</option>
          <option value="upload">Upload</option>
          <option value="both">Both</option>
        </select>
      </div>

      {/* 🔥 RATE (ONLY FOR THROTTLE) */}
      {form.action === "throttle" && (
        <div style={{ marginTop: "10px" }}>
          <label>Rate:</label>
          <br />
          <input
            name="rate"
            placeholder="e.g. 5mbit"
            value={form.rate}
            onChange={handleChange}
          />
        </div>
      )}

      {/* 🔥 PRIORITY (ONLY FOR PRIORITIZE) */}
      {form.action === "prioritize" && (
        <div style={{ marginTop: "10px" }}>
          <label>Priority:</label>
          <br />
          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
          >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
          </select>
        </div>
      )}

      {/* 🔥 NOTE (OPTIONAL) */}
      <div style={{ marginTop: "10px" }}>
        <label>Note:</label>
        <br />
        <input
          name="note"
          placeholder="Optional note"
          value={form.note}
          onChange={handleChange}
        />
      </div>

      {/* 🔥 SUBMIT */}
      <button
        style={{ marginTop: "20px", padding: "10px 20px" }}
        onClick={handleSubmit}
      >
        Save Rule
      </button>
    </div>
  );
}

export default AddRule;