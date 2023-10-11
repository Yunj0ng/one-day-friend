import styles from "./Card.module.scss";
import faceIcon from "@assets/icons/face.svg";

const Card = ({ id, name, img, location,rating, style, onClick }) => {
  return (
    <div className={styles.card} onClick={()=>{onClick?.(id)}}>
      {style === "rating" ? (
        <>
			    <div className={styles.showRating}>
						<img src={faceIcon} alt="icon"/>
						<span>{rating}</span>
					</div>
          <img src={img} alt="avatar-pic" />
          <div className={styles.cardText}>
            <p className={styles.cardTitle}>{name}</p>
            <p className={styles.cardDescription}>{location}</p>
          </div>
        </>
      ) : (
        <>
          <img src={img} alt="avatar-pic" />
          <div className={styles.cardText}>
            <p className={styles.cardTitle}>{name}</p>
            <p className={styles.cardDescription}>{location}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
