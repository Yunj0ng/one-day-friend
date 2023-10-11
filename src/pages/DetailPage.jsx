import styles from "@styles/page.module.scss";
import Layout from "@components/Layout/Layout.jsx";
import AvatarInfo from "@components/AvatarInfo/AvatarInfo.jsx"
import { useSletedContext } from "@context/SeletedContext";


const DetailPage = () => {
  const { seletedMemberData, handleToCartClick } = useSletedContext();
  const {name, image, location, rating, hobby, description} = seletedMemberData
  return (
    <Layout>
      <div className={styles.section}>
        <div className={styles.wrapper}>
          <img
            src={image}
            alt="avatar"
            className={styles.avatar}
          />
          <div className={styles.info}>
            <AvatarInfo
              name={name}
              location={location}
              rating={rating}
              hobby={hobby}
              description={description}
              onClick={handleToCartClick}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
