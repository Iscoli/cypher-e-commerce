
   import { useEffect } from 'react';
    import { useSelector } from 'react-redux'; 
    import DisplaySpinner from '../components/Atom/DisplaySpinner';

    function Orders(){
      const mainOrders = useSelector((state) => state.orders);
      const {loading,
        error,
        allUserOrders} = mainOrders 
       console.log(allUserOrders,'pppp')
      return <div>
       {
        loading ? (
          <p className='order-spin'>loading....
          </p>
        ) : error ? (
          <p className="text-danger">network error!</p>
        ) : (
           <table>
             <thead>
                <tr>
                  <th>status</th>
                  <th>name</th>
                  <th>method</th>
                  <th>total</th>
                  <th>action</th>
                </tr>
              </thead>
              {
                allUserOrders.map((order,index)=>{
                  const {
                   status,
                   name
                  }=order
                  return <tbody key={index}>
                  <tr>
                    <td>{status}</td>
                    <td>{name}</td>
                    
                  </tr>
                </tbody>
                })
              }
           </table>
        )
       }
      </div>
    }

    export default Orders