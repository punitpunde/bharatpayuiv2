import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Payment from "./components/payment/Payment";
import PaymentForm from "./components/payment/PaymentForm";
import UPIPayment from "./pages/UPIPayment";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./components/extra/ErrorPage";

function App() {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <div className="container-fluid mt-5 py-5 px-3 px-md-5">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/payment" element={<Payment></Payment>}></Route>
          <Route
            path="/upi-payment"
            element={<UPIPayment></UPIPayment>}
          ></Route>
          <Route
            path="/transaction-history"
            element={<TransactionHistory></TransactionHistory>}
          ></Route>
          <Route
            path="/get-started"
            element={<LandingPage></LandingPage>}
          ></Route>
          <Route path="/error" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
