 import React from 'react'
 import { Link } from 'react-router-dom';
 import pages from '../UsablesCss/pages.css'
 function Pages(props) {
  const PagesItem = [
    {
      path: "/",
      name: "Offer",
    },
    {
      path: "/about",
      name: "Checkout",
    },

    {
      path: "/comment",
      name: "FAQ",
    },
    {
      path: "/product",
      name: "About US",
    },
    {
      path: "/product",
      name: "Contact US",
    },
    {
      path: "/product",
      name: "Privacy Policy",
    },
    {
      path: "/product",
      name: "Terms & Condition",
    },
    {
      path: "/product",
      name: "404",
    },
  ];
   return (
     <div>
       
       {PagesItem.map((item, index) => (
            <div key={index}>
              <Link className='linke' to={`/${item.name}`} onClick={props.closeModalHandler}>
                {" "}
                <p>{item.name}</p>
              </Link>
            </div>
          ))}
     </div>
   )
 }
 
 export default Pages
 