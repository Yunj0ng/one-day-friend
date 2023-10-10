import { useNavigate } from "react-router-dom";
import Layout from "@components/Layout/Layout.jsx";
import CardContainer from "@components/CardContainer/CardContainer.jsx";
import dummyMember from "@dummyData/member.js";

const ShowPage = () => {
  const navigate = useNavigate()
  const handleCardClick=(id)=>{
    navigate(`/detail/${id}`);
  }
	return (
    <Layout>
      <CardContainer member={dummyMember} style="show" onClick={handleCardClick}/>
    </Layout>
  );
};

export default ShowPage;
