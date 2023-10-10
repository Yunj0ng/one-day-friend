import styles from "./AvatarInfo.module.scss"
import { useNavigate, useParams } from "react-router-dom";
import locationIcon from "@assets/icons/location.svg";
import starIcon from "@assets/icons/star.svg";

const AvatarInfo=({name, location, rating, hobby, description})=>{
	const navigate = useNavigate()
	const {id} = useParams()

	const handleBtnClick =(id)=>{
	  localStorage.setItem("id:", id)
		navigate("/cart")
	}
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
      </div>
      <h4>興趣:</h4>
      <div>{hobby}</div>
      <h4>想說的話: </h4>
      <div>{description}</div>
      <button onClick={()=>handleBtnClick(id)}>申請交友</button>
    </div>
  );
}

export default AvatarInfo