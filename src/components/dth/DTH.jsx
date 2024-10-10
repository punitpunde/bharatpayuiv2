import React from 'react'
import DTHForm from './DTHForm'
import DTHBrowsePlans from './DTHBrowsePlans'

function DTH() {
  return (
    <div className='row justify-content-center rechargeform-row ms-0 me-0'>

     <DTHForm></DTHForm>
     <DTHBrowsePlans></DTHBrowsePlans>
    </div>
  )
}

export default DTH