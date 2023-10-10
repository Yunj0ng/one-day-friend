import dummyMember from "@dummyData/member.js";
import Layout from "@components/Layout/Layout.jsx";
import Slider from "@components/Slider/Slider.jsx";
import GlobalNav from "@components/GlobalNav/GlobalNav.jsx";
import InfoItem from "@components/InfoBlock/InfoBlock.jsx";
import CardContainer from "@components/CardContainer/CardContainer.jsx";
import SnsContainer from "@components/SnsContainer/SnsContainer";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Slider />
        <GlobalNav />
        <div id="infoBlock">
          <InfoItem title="最新公告" />
          <InfoItem title="一日朋友規則" link="#" />
        </div>
        <CardContainer member={dummyMember} style="rating" />
        <CardContainer member={dummyMember} style="normal" />
				<SnsContainer/>
      </Layout>
    </>
  );
};

export default HomePage;
