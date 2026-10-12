import { useState } from "react";

function StoreHours() {
  const [showHours, setShowHours] = useState(false);
  const handleToggleHours = () => {
    setShowHours(!showHours);
  };
  return (
    <>
      <button
        onClick={handleToggleHours}
        className="cursor-pointer rounded-md px-2 py-1 text-sm font-medium transition-colors text-brand hover:bg-gray-100 hover:text-brand-dark"
      >
        {showHours ? "Hide storehours" : "Show storehours"}
      </button>
      {showHours && <p> Mon–Fri 10–18, Sat 10–15, Sun closed</p>}
    </>
  );
}
export default StoreHours;
