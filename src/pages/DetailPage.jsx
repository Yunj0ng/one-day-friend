import styles from "@styles/page.module.scss";
import { useParams } from "react-router-dom";
import Layout from "@components/Layout/Layout.jsx";
import AvatarInfo from "@components/AvatarInfo/AvatarInfo.jsx"


import dummyMember from "@dummyData/member.js";

const DetailPage = () => {
  const { id } = useParams();
  const memberData = dummyMember.find((m) => m.id === Number(id));
  return (
    <Layout>
      <div className={styles.section}>
        <div className={styles.wrapper}>
          <img src={memberData.image} alt="avatar" className={styles.avatar} />
          <div className={styles.info}>
            <AvatarInfo
              name={memberData.name}
              location={memberData.location}
              rating={memberData.rating}
              hobby={memberData.hobby}
              description={memberData.description}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
