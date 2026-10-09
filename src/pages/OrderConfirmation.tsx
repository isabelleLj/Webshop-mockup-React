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
        <h1 className="text-2xl font-bold">Ingen beställning hittades</h1>

        <p className="mt-2">Du behöver göra en beställning först.</p>
        <Link to="/">Tillbaka till butiken</Link>
      </div>
    );
  }
  const { customer, items } = state;

  const totalPrice = items.reduce((total, product) => total + product.price, 0);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Tack för din beställning!</h1>

      <p>Din beställning har tagits emot.</p>

      <h2>Leveransadress</h2>

      <p>{customer.name}</p>
      <p>{customer.address}</p>
      <p>
        {customer.zip} {customer.city}
      </p>
      <p>{customer.email}</p>

      <h2>Din beställning</h2>

      {items.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price} kr</p>
        </div>
      ))}

      <p className="font-bold">Totalt: {totalPrice} kr</p>

      <Link to="/">Tillbaka till butiken</Link>
    </div>
  );
}

export default OrderConfirmation;
