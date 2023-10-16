import styles from "./Cart.module.scss";
import heartIcon from "@assets/icons/bounce-heart.svg";

const Cart = ({ title, member }) => {
  if (!member) {
    return <div className={styles.noMemberSeleted}>尚未選擇朋友</div>;
  }

  const { name, image } = member;
  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.sub}>
        <img src={heartIcon} alt="icon" />
        <p>您已選擇 : </p>
      </div>
      <div className={styles.content}>
        <img src={image} alt="avatar" />
        <h3 className={styles.name}>{name}</h3>
      </div>
    </div>
  );
};

export default Cart;
