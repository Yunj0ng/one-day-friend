import styles from "./InfoBlock.module.scss"

const InfoItem = ({title, link})=>{
	return (
    <div id="info" className={styles.wrapper}>
      {title === "最新公告" ? (
        <div className={styles.title}>
          {title}
        </div>
      ) : (
        <div className={styles.infoItem}>
          <div className={styles.infoTitle}>
            <a href="{link}">{title}</a>
          </div>
          <div className={styles.infoBtn}>
            <a href="{link}">查看</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoItem