import { useEffect, useState } from "react";
import { getRules, removeRule } from "../services/api";
import RulesTable from "../components/RulesTable";

function Rules() {
  const [rules, setRules] = useState([]);

  const fetchRules = async () => {
    const data = await getRules();
    setRules(data);
  };

  useEffect(() => {
    fetchRules();
  }, []);

  const handleDelete = async (id) => {
    const ok = await removeRule(id);
    if (ok) {
      fetchRules(); // 🔥 refresh after delete
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Rules</h2>

      <RulesTable data={rules} onDelete={handleDelete} />
    </div>
  );
}

export default Rules;