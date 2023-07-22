import React from "react";
import { useEffect } from "react";
import "../ProductModal/PhCategoryModal.css";
import Pages from "../../Useables/Pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../Logo/Logo";
import ItemModal from "./ItemModal/ItemModal";
import { fetchCategory } from "../../../Redux";
import { useSelector, useDispatch } from "react-redux";


function PhCategoryModal(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  const data = useSelector((state) => state.categories);
  const categories = Object.values(data.categories);
  const menuItem = [];
 
  return (
    <>
      <div className={props.open ? "main-phm  moveaway " : "main-phm movehere"}>
        <div className="phmodal-flex1">
          <div className="phmodal-flex11">
            <Logo />
          </div>
          <div className="phmodal-flex12">
            <FontAwesomeIcon
              className="close-btn"
              icon={faClose}
              onClick={props.closeModalHandler}
            />
          </div>
        </div>
      </div>
      <div
        className={
          props.open ? "main-phmodal  moveaway " : "main-phmodal movehere"
        }
      >
        <div className="phmodal-flex2"
         style={{padding:'0.6rem 1.8rem', marginBottom:'10px'
      }}>
          <h3>All Categories</h3>
          <hr></hr>
          {data.loading ? (
            <div>
              <h3>loading....</h3>
            </div>
          ) : data.error ? (
            <div>
              <h3>{data.error}</h3>{" "}
            </div>
          ) : (
            categories.map((item,index)=>{
              return  <ItemModal key={index} item={item}  closeModalHandler={props.closeModalHandler} />
            })
            
          )}

          <h3>Pages</h3>
          <hr></hr>
          <Pages  closeModalHandler={props.closeModalHandler}/>
        </div>
      </div>
    </>
  );
}

export default PhCategoryModal;
