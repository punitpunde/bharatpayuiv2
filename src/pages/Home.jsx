import React from "react";
import Services from "../components/services/Services";
import Recharge from "../components/recharge/Recharge";
import Payment from "../components/payment/Payment";
import PaymentForm from "../components/payment/PaymentForm";
import TransactionHistory from "../components/transactionHistory/TransactionHistory";
import HomePage from "../components/home/HomePage";
import DTH from "../components/dth/DTH";
import Landing from "../components/landing/Landing";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import BankTransferForm from "../components/bankTransfer/BankTransferForm";
import PaymentSuccess from "../components/extra/PaymentSuccess";
import Contact from "../components/contacts/Contact";

// import Services from '../components/servicesPage/Services'

function Home() {
  return (
    <>
   
    {/* <Landing></Landing> */}
      <HomePage></HomePage>
      {/* <Services></Services>
  <Recharge></Recharge> */}
  {/* <BankTransferForm></BankTransferForm> */}
  {/* <PaymentSuccess></PaymentSuccess> */}
  {/* <Contact></Contact> */}
    </>
  );
}

export default Home;
