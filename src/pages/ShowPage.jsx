import Layout from "@components/Layout/Layout.jsx";
import CardContainer from "@components/CardContainer/CardContainer.jsx";
import dummyMember from "@dummyData/member.js";
import { useSletedContext } from "@context/SeletedContext";


const ShowPage = () => {
  const { handleMemberClick } = useSletedContext();
  
	return (
    <Layout>
      <CardContainer
        member={dummyMember}
        style="show"
        onClick={handleMemberClick}
      />
    </Layout>
  );
};

export default ShowPage;
