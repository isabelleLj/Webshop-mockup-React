import { useState } from "react";

function AddToCartButton() {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <button onClick={() => setIsAdded(!isAdded)}>
      {isAdded ? "Tillagd" : "Lägg i varukorg"}
    </button>
  );
}

export default AddToCartButton;
