import { createContext, useContext, useState, type ReactNode } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  stock: number;
  sku: string;
};

type CartContextValue = {
  cart: CartItem[];
  totalItems: number;
  addToCart: (product: CartItem) => void;
  clearCart: () => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const totalItems = cart.length;

  const addToCart = (product: CartItem) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart måste användas inom CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
