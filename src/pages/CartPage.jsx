import Layout from "@components/Layout/Layout.jsx";
import Cart from "@components/Cart/Cart.jsx"
import OderContent from "@components/OderContent/OderContent";
import { useSletedContext } from "@context/SeletedContext.jsx";

import dummyData from "@dummyData/member.js"

const CartPage = () => {
  // const { seletedMemberData } = useSletedContext();
  const seletedMemberData = dummyData[0]
  return (
    <>
      <Layout>
        <Cart title="申請表" member={seletedMemberData} />
        <OderContent/>
      </Layout>
    </>
  );
};

export default CartPage;
