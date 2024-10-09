import React from 'react'
import Services from '../components/services/Services'
import Recharge from '../components/recharge/Recharge'
import Payment from '../components/payment/Payment'
import PaymentForm from '../components/payment/PaymentForm'
import TransactionHistory from '../components/transactionHistory/TransactionHistory'

function Home() {
  return (
    <>
    <Services></Services>
    <Recharge></Recharge>
    {/* <TransactionHistory></TransactionHistory> */}
    {/* <PaymentForm></PaymentForm> */}
    {/* <UPIPaymentForm></UPIPaymentForm> */}
    {/* <PaymentInfo></PaymentInfo> */}
    {/* <PaymentOptions></PaymentOptions> */}
     </>
  )
}

export default Home