import React from 'react';
import './OrderDetails.css'

function OrderDetail({invoices}) {
  const handlePrint = () => {
    window.print();
  };

      const {
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
      } = invoices


      const timestamp =  created_at;
      const date = new Date(timestamp);
      
      const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
      const formattedDate = date.toLocaleString('en-US', options);
      console.log(status,'sattta')
  return (
    <div className='main-orderdetail'>

     <button onClick={handlePrint}>Print Receipt</button>
      <div>
       <h2>Date</h2>
       <p>{formattedDate}</p>
       </div>



       <div>
        <h3>Invoice No.</h3>
        <p>#{invoice}</p>
       </div>


       <div>
        <h3>Invoice To.</h3>
        <p>{senderName}</p>
        <p>{address}</p>
        <p>{city}</p>
        <p>{email}</p>
        <p>{number}</p>
       </div>


       <div className="userOrdersPage">
          <table className="userOrdersPage">
            <thead>
              <tr>
                <th>SR.</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Item Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            {items.map((order, index) => {
              console.log(order,'ooorr')
              const { status, name,count,price } = order;
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index}</td>
                    <td>{name}</td>
                    <td>{count}</td>
                    <td>{price}</td>
                    <td>{count * price}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
       
    </div>
  )
}

export default OrderDetail
