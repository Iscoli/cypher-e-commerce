import React from 'react'

function OrderDetailsBox({
  senderName,
        items,
        senderAddress,
        firstName,
        lastName,
        email,
        address,
        country,
        code, 
        city, 
        number,
        totalPriceInCart,
        totalPriceToPay,
        shipping_cost,
        order_id,
        invoice,
        discountPrice,
        status,
        userRef,
        created_at,
}) {
  console.log(invoice,'oooeee')
  return (
    <div>
      <div>
        <h1>
          Date
        </h1>
        <p>{status}</p>

      </div>
    </div>
  )
}

export default OrderDetailsBox
