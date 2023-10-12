import styles from "./ShowBill.module.scss"

const ShowBill =({basicFee, hours, totalFee, onClick})=>{
	return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        結帳金額: ${basicFee} x {hours} 小時 = <span className={styles.price}>${totalFee}</span>
      </div>
			<button className={styles.btn} onClick={onClick}>結帳</button>
    </div>
  );
}

export default ShowBill