
   import { useEffect } from 'react';
   import { 
    updateDoc,
    doc,
    collection,
    getDocs,
    query,
    where,
    orderBy} from "firebase/firestore";
    import {
      getAuth
    } from 'firebase/auth'
    import {db} from '../firebase.config'

    function Orders(){
     const auth = getAuth()
      
     useEffect(()=>{
          const fetchUserOrders = async()=>{
           const ordersRef = collection(db,'orders')

           const q = query( 
            ordersRef,
            where('userRef', '==', auth.currentUser.uid),
            orderBy('timestamp', 'desc')
           )
           const querySnap = await getDocs(q)
           
            let orders = []

              querySnap.forEach((doc)=>{
                return orders.push({
                  id: doc.id,
                  data: doc.data()
                })
              })
                console.log(orders,'poppo')
          }
          fetchUserOrders()
     },[auth.currentUser.uid])
 
      return <div>
        My Orders
        
      </div>
    }

    export default Orders