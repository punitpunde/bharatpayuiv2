import React from 'react'
import PaymentForm from '../components/payment/PaymentForm'
import CountdownTimer from '../components/extra/CountdownTimer'

function UPIPayment() {
  return (
   <>
   <CountdownTimer></CountdownTimer>
   <PaymentForm></PaymentForm>
   </>
  )
}

export default UPIPayment