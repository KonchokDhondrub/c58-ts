import { createContext, useState } from "react";

interface ICartItem {
  id: number;
  title: string;
  price: string;
  quantity: number;
}

interface ICartContextType {
  cart: ICartItem[];
  addToCart: (product: ICartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<ICartContextType | undefined>(undefined);
const [cart, setCart] = useState<ICartItem[]>([]);

// Add to Cart
const addToCart = (product: ICartItem) => {
  setCart((prevCart) => {
    const productExist = prevCart.find((item) => item.id === product.id);
    if (productExist) {
      return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    }
    return [...prevCart, { ...product, quantity: 1 }];
  });
};

// Remove from Cart
const removeFromCart = (id: number) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== id));
};

// Clear Cart
const clearCart = () => {
  setCart([]);
};

// Cart Provider
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
};
