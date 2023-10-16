import Layout from "@components/Layout/Layout.jsx";
import CardContainer from "@components/CardContainer/CardContainer.jsx";
import dummyMember from "@dummyData/member.js";
import { useSletedContext } from "@context/SeletedContext";
import Loading from "@components/Loading/Loading.jsx";
import { useLoadingContext } from "@context/LoadingContext.jsx";

const ShowPage = () => {
  const { handleMemberClick } = useSletedContext();
  const { isLoading } = useLoadingContext();
  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        <CardContainer
          member={dummyMember}
          style="show"
          onClick={handleMemberClick}
        />
      )}
    </Layout>
  );
};

export default ShowPage;
