import React from "react";
import { Link } from "react-router-dom";
import "../UsablesCss/pages.css";
import { ReactComponent as Offer } from "../assets/offer.svg";
import { ReactComponent as FAQ } from "../assets/faqe.svg";
import { ReactComponent as NotFound } from "../assets/404e.svg";
import { ReactComponent as Privacy } from "../assets/privacy.svg";
import { ReactComponent as Contact } from "../assets/contact.svg";
import { ReactComponent as Check } from "../assets/check.svg";
import { ReactComponent as About } from "../assets/about.svg";
import { ReactComponent as Terms } from "../assets/tems.svg";
function Pages({ closeModalHandler }) {
  const PagesItem = [
    {
      path: "/offer",
      name: "Offer",
      icon: <Offer />,
    },
    {
      path: "/check",
      name: "Checkout",
      icon: <Check />,
    },

    {
      path: "/comment",
      name: "FAQ",
      icon: <FAQ />,
    },
    {
      path: "/about",
      name: "About US",
      icon: <About />,
    },
    {
      path: "/product",
      name: "Contact US",
      icon: <Contact />,
    },
    {
      path: "/product",
      name: "Privacy Policy",
      icon: <Privacy />,
    },
    {
      path: "/product",
      name: "Terms & Condition",
      icon: <Terms />,
    },
    {
      path: "/product",
      name: "404",
      icon: <NotFound />,
    },
  ];
  return (
    <div>
      {PagesItem.map((item, index) => (
        <Link
          className="linke"
          key={index}
          to={`${item.path}`}
          onClick={closeModalHandler}
        >
          <div className="pages-moda">
            <span>{item.icon}</span>
            <span className="moda-sptag">{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Pages;
