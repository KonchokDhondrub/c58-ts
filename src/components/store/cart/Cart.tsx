import type { JSX } from "react";
import { useCart } from "../../cartContext/CartContext";

import MyButton from "../../myButton/MyButton";
import MyCounter from "../../myCounter/MyCounter";
import styles from "./Cart.module.css";

interface CartProps {
  setIsCartOpen: (open: boolean) => void;
}

export default function Cart({ setIsCartOpen }: CartProps): JSX.Element {
  const { cart, addToCart, removeFromCart, clearCart, updateQuantity } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={styles.container}>
      <h2>
        :user: cart <MyButton size="sm" text="keep shoping 🛒" variant="transparent" onClick={() => setIsCartOpen(false)} />
      </h2>
      {/* <div className={styles.header}> */}
        {/* <Link to="/lesson-15">
          <MyButton type="button" text="back" />
        </Link> */}
      {/* </div> */}
      {cart.length === 0 ? (
        <p className={styles.empty}>Your cart is empty...</p>
      ) : (
        <>
          <div className={styles.cartContentContainer}>
            {cart.map((el) => (
              <div className={styles.items}>
                <div className={styles.childActive}>{el.title}</div>
                <div className={styles.chilNotdActive}>x{el.quantity}</div>
                <div className={styles.totalPrice}>{(el.price * el.quantity).toFixed(2)}€</div>

                <MyCounter variant="transparent"
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
            <h3>Total price: {getTotalPrice().toFixed(2)}€</h3>
            <MyButton text="order" />
            <MyButton text="clear cart" onClick={clearCart} variant="danger" />
          </div>
        </>
      )}
    </div>
  );
}
