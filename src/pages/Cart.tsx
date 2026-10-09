import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, totalItems, removeFromCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Kundvagn</h1>

      <p>Antal produkter: {totalItems}</p>

      {cart.length === 0 && <p className="mt-4">Din kundvagn är tom.</p>}

      {cart.map((product) => (
        <div key={product.id} className="mt-4 border p-4">
          <h2 className="font-bold">{product.name}</h2>
          <p>{product.price} kr</p>
          <button onClick={() => removeFromCart(product.id)}>Ta bort</button>
        </div>
      ))}

      <Link to="/checkout">Till kassan</Link>
    </div>
  );
}

export default Cart;
