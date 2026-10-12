import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { getOriginalPrice, hasDiscount } from "../utils/pricing";

function Cart() {
  const { cart, totalItems, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="min-h-screen bg-warm-white px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-brand-dark">
          Cart
        </h1>

        <p className="mb-6 text-gray-600">
          Quantity:{" "}
          <span className="font-semibold text-brand-dark">{totalItems}</span>
        </p>

        {cart.length === 0 && (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-brand-dark">
              Your cart is empty
            </h2>
            <p className="mt-3 text-gray-600">
              Explore our shop and find your favorites!
            </p>
            <Link
              to="/"
              className="mt-6 inline-block rounded-xl bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Back to store
            </Link>
          </div>
        )}

        <div className="space-y-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className=" rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-brand-dark">
                {product.name}
              </h2>
              <>
                {hasDiscount(product.category) && (
                  <p className="text-sm text-gray-500 line-through">
                    {getOriginalPrice(
                      product.price,
                      product.category,
                    ).toLocaleString("sv-SE")}{" "}
                    kr
                  </p>
                )}

                <p className="text-xl font-bold text-brand">
                  {product.price.toLocaleString("sv-SE")} kr
                </p>
              </>

              <button
                onClick={() => removeFromCart(product.id)}
                className=" cursor-pointer rounded-lg px-1 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 hover:text-red-700"
              >
                Ta bort
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500">Totalt</p>
              <p className="mt-1 text-3xl font-bold text-brand-dark">
                {totalPrice.toLocaleString("sv-SE")} kr
              </p>
            </div>

            <Link
              to="/checkout"
              className="mt-8 inline-block rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg"
            >
              Till kassan
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
