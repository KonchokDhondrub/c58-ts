import type { JSX } from "react";

import { useCart, type ICartItem } from "../../cartContext/CartContext";
import MyButton from "../../myButton/MyButton";
import MyCounter from "../../myCounter/MyCounter";
import styles from "./Cart.module.css";

interface CartProps {
  setIsCartOpen: (open: boolean) => void;
}

export const getTotalPrice = (cart: ICartItem[]) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

export default function Cart({ setIsCartOpen }: CartProps): JSX.Element {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  return (
    <div className={styles.container}>
      <h2>
        Guest cart <MyButton size="sm" text="keep shopping 🛒" variant="transparent" onClick={() => setIsCartOpen(false)} />
      </h2>

      {cart.length === 0 ? (
        <p className={styles.empty}>Your cart is empty...</p>
      ) : (
        <>
          <div className={styles.cartContentContainer}>
            {cart.map((el) => (
              <div key={el.id} className={styles.items}>
                <div className={styles.childActive}>{el.title}</div>
                <div className={styles.chilNotdActive}>x{el.quantity}</div>
                <div className={styles.totalPrice}>{(el.price * el.quantity).toFixed(2)}€</div>

                <MyCounter
                  variant="transparent"
                  count={el.quantity}
                  setCount={(newCount: number) => {
                    if (newCount > 0) {
                      updateQuantity(el.id, newCount);
                    }
                  }}
                />

                <MyButton size="sm" text="X" variant="danger" onClick={() => removeFromCart(el.id)} />
              </div>
            ))}
          </div>

          <div className={styles.totalPrice}>
            <h3>Total price: {getTotalPrice(cart)}€</h3>
            <MyButton text="order" />
            <MyButton text="clear cart" onClick={clearCart} variant="danger" />
          </div>
        </>
      )}
    </div>
  );
}
