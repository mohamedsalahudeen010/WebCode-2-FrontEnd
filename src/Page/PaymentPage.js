import React from 'react'
import StripeCheckOut from "react-stripe-checkout"

function PaymentPage({totalAmount}) {
    function tokenHandler(token){
            console.log(token)
            localStorage.setItem("oders",token)
            console.log(localStorage.getItem("oders"))
    }
  return (
    <StripeCheckOut 
    totalAmount={totalAmount*100}
    shippingAddress
    token={tokenHandler}
    stripeKey="pk_test_51MmO4FSJLVNkhG84cU7QdGSN4II4eDC0RezHjbeXxY5dYxAMB4Pqmw5augpPEJQ17GI2fkfpls5skaKtK6bdr7tp00hzBRfZpf"
    currency="INR">
        <button className="btn-pay">Check Out To Pay</button>
    </StripeCheckOut>
  )
}

export default PaymentPage