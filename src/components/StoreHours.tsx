import { useState } from "react";

function StoreHours() {
  const [showHours, setShowHours] = useState(false);
  const handleToggleHours = () => {
    setShowHours(!showHours);
  };
  return (
    <>
      <button onClick={handleToggleHours}>
        {showHours ? "Dölj öppettider" : "Visa öppettider"}
      </button>
      {showHours && <p> Mån–fre 10–18, Lör 10–15, Sön stängt</p>}
    </>
  );
}
export default StoreHours;
