import { useState } from "react";

function AddToCartButton() {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <button onClick={() => setIsAdded(!isAdded)}>
      {isAdded ? "Added" : "Add to cart"}
    </button>
  );
}

export default AddToCartButton;
