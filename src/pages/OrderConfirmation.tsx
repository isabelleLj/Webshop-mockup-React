import { useLocation, Link } from "react-router-dom";
import type { CartItem } from "../context/CartContext";

type CheckOutData = {
  name: string;
  email: string;
  address: string;
  zip: string;
  city: string;
};

type OrderState = {
  customer: CheckOutData;
  items: CartItem[];
};

function OrderConfirmation() {
  const location = useLocation();

  const state = location.state as OrderState | null;

  if (!state) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">No order registerd</h1>

        <p className="mt-2">You need to place a order first.</p>
        <Link to="/">Back to shop</Link>
      </div>
    );
  }
  const { customer, items } = state;

  const totalPrice = items.reduce((total, product) => total + product.price, 0);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Thank you for your order!</h1>

      <p>Your order has been recived.</p>

      <h2>Address:</h2>

      <p>{customer.name}</p>
      <p>{customer.address}</p>
      <p>
        {customer.zip} {customer.city}
      </p>
      <p>{customer.email}</p>

      <h2>Your order</h2>

      {items.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.price} kr</p>
        </div>
      ))}

      <p className="font-bold">Total: {totalPrice} kr</p>

      <Link to="/">Back to shop</Link>
    </div>
  );
}

export default OrderConfirmation;
