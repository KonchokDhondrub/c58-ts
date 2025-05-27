import { useState, type JSX } from "react";
import { useCart } from "../../cartContext/CartContext";
import MyButton from "../../myButton/MyButton";

import styles from "./Cart.module.css";
import MyCounter from "../../myCounter/MyCounter";

export default function Cart(): JSX.Element {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={styles.container}>
      <h2>Cart 🛒</h2>
      <div className={styles.header}>
        {/* <Link to="/lesson-15">
          <MyButton type="button" text="back" />
        </Link> */}
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty...</p>
      ) : (
        <>
          <div className={styles.cartContentContainer}>
            {cart.map((el) => (
              <div className={styles.items}>
                <div className={styles.childActive}>{el.title}</div>
                <div className={styles.chilNotdActive}>{el.quantity} psc.</div>
                <div className={styles.totalPrice}>{(el.price * el.quantity).toFixed(2)}€</div>

                {/* <MyCounter count={el.quantity} setCount={() => {
                    const [count, setCount] = useState(el.quantity);
                    if (count > el.quantity) {
                        addToCart({ el.id, title, price, quantity: count })
                    }
                    }} /> */}
                    
                <MyButton size="sm" text="delete" onClick={() => removeFromCart(el.id)} />
              </div>
            ))}
          </div>
          <div className={styles.totalPrice}>
            <h3>Total price: {getTotalPrice().toFixed(2)}€</h3>
            <MyButton size="sm" text="clear cart" onClick={clearCart} />
          </div>
        </>
      )}
    </div>
  );
}
