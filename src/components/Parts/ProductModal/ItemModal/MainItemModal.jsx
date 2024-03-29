import React from "react";
import ItemModal from "../ItemModal/ItemModal";
import { fetchCategory } from "../../../../Redux";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function MainItemModal({ closeModalHandler }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
    // eslint-disable-next-line
  }, []);
  const data = useSelector((state) => state.categories);
  const categories = Object.values(data.categories);

  return (
    <>
      {data.loading ? (
        <div>
          <h3>loading....</h3>
        </div>
      ) : data.error ? (
        <div>
          <h3>{data.error}</h3>{" "}
        </div>
      ) : (
        categories.map((item, index) => {
          return (
            <ItemModal
              key={index}
              item={item}
              closeModalHandler={closeModalHandler}
            />
          );
        })
      )}
    </>
  );
}

export default MainItemModal;
