import { createContext, useContext, useState } from "react";

// типизация элемента корзины
export interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}


interface ICartContextType {

  cart: ICartItem[];

  addToCart: (product: ICartItem) => void;

  removeFromCart: (id: number) => void;

  clearCart: () => void;
  updateQuantity: (id: number, quantity: number) => void;
}

// * 1. делаем контекст с помощью встроенного в react метода createContext()
export const CartContext = createContext<ICartContextType | undefined>(undefined);

// * 2. обертка для компонентов нашего приложения дающая доступ к данным контекста
export const CartProvider = ({ children }: { children: React.ReactNode }) => {

  const [cart, setCart] = useState<ICartItem[]>([]);


  const addToCart = (product: ICartItem) => {
    setCart((prevCart) => {
      const productExist = prevCart.find((item) => item.id === product.id);
      if (productExist) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item));
      }
      return [...prevCart, { ...product, quantity: product.quantity }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  return (
    // за место children придут обернутые в компонент элементы
    // за счет контекста эти элементы получат доступ к данным в этом компоненте
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>{children}</CartContext.Provider>
  );
};

// ! функция для получении данных из контекста
// создаем здесь, но используем в компонентах
// проверяет данные на undefined

export const useCart = () => {
  const contextData = useContext(CartContext);
  if (!contextData) {
    throw new Error("no such context 😵");
  }
  return contextData;
};
