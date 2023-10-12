import Layout from "@components/Layout/Layout.jsx";
import Cart from "@components/Cart/Cart.jsx"
import OderContent from "@components/OderContent/OderContent";
import ShowBill from "@components/ShowBill/ShowBill";
import { useSletedContext } from "@context/SeletedContext.jsx";
import UserInfo from "@components/UserInfo/UserInfo.jsx"
import { useUserContext } from "@context/UserContext.jsx";
import { useSettingContext } from "@context/SettingContext";
import { useOderContext } from "@context/OderContext";

import dummyData from "@dummyData/member.js"

const CartPage = () => {
  // const { seletedMemberData } = useSletedContext();
  const {userInfo, cardInfo, handleUserInfoChange, handleCardInfoChange} = useUserContext()
  const { basicFee } = useSettingContext();
  const {totalFee, seletedHours}=useOderContext()
 
  const seletedMemberData = dummyData[0]

  // 提交測試
  const handleSubmit =()=>{
    // 判斷有無空值 Object.values(obj)將物件值轉為陣列
    function isEmpty(obj) {
      return (
        Object.values(obj).every((value) => value === "") ||
        Object.values(obj).some((value) => value === "")
      );
    }
    if(isEmpty(userInfo) || isEmpty(cardInfo)){
      console.log("請輸入完整資料")
      return
    } else {
      console.log(
        `小計: ${totalFee}
			持卡人姓名: ${cardInfo.name}
			卡號: ${cardInfo.cardNum}
			有效期限: ${cardInfo.goodThru}
			CVC/CCV: ${cardInfo.cvc}`
      );
    }
  }
  return (
    <>
      <Layout>
        <Cart title="申請表" member={seletedMemberData} />
        <OderContent/>
        <UserInfo user={userInfo} card={cardInfo} onUserInfoChange={handleUserInfoChange} onCardInfoChange={handleCardInfoChange}/>
        <ShowBill basicFee={basicFee} hours={seletedHours} totalFee={totalFee} onClick={handleSubmit}/>
      </Layout>
    </>
  );
};

export default CartPage;
