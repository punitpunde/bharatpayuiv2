import React from 'react'
import RechargeForm from './RechargeForm'
import "./recharge.css"
import BrowsePlans from './BrowsePlans'

function Recharge() {
  return (
    <div className='row justify-content-center rechargeform-row ms-0 me-0'>

        <RechargeForm></RechargeForm>
        <BrowsePlans></BrowsePlans>
    </div>
  )
}

export default Recharge