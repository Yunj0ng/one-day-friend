import styles from "./AvatarInfo.module.scss";
import { useParams } from "react-router-dom";
import locationIcon from "@assets/icons/location.svg";
import starIcon from "@assets/icons/star.svg";
import dolarIcon from "@assets/icons/dolar.svg"
import { useSettingContext } from "@context/SettingContext";

const AvatarInfo = ({
  name,
  location,
  rating,
  hobby,
  description,
  onClick,
}) => {
  const { id } = useParams();
  const { basicFee } = useSettingContext();

  return (
    <div className={styles.info}>
      <h1>{name}</h1>
      <div className={styles.sub}>
        <div className={styles.sub2}>
          <img src={locationIcon} alt="icon" />
          <span>{location}</span>
        </div>
        <div className={styles.sub2}>
          <img src={starIcon} alt="icon" />
          <span>{rating}</span>
        </div>
        <div className={styles.sub2}>
          <img src={dolarIcon} alt="icon" />
          <span>{basicFee} /hr</span>
        </div>
      </div>
      <h4>興趣:</h4>
      <div>{hobby}</div>
      <h4>想說的話: </h4>
      <div>{description}</div>
      <button onClick={() => onClick?.(id)}>申請交友</button>
    </div>
  );
};

export default AvatarInfo;
