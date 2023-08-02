import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../Pages/PagesStyle/Order.css";
import { Link } from "react-router-dom";
import DisplaySpinner from "../components/Atom/DisplaySpinner";

function Orders() {
  const mainOrders = useSelector((state) => state.orders);
  const { loading, error, allUserOrders } = mainOrders;
  console.log(allUserOrders, "pppp");
  return (
    <div className="all-order">
      {loading ? (
        <p className="order-spin">loading....</p>
      ) : error ? (
        <p className="text-danger">network error!</p>
      ) : (
        <div className="userOrdersPage">
          <table className="userOrdersPage">
            <thead>
              <tr>
                <th>id</th>
                <th>order time</th>
                <th>method</th>
                <th>status</th>
                <th>total</th>
                <th>action</th>
              </tr>
            </thead>
            {allUserOrders.map((order, index) => {
              const {
                status,
                totalPriceToPay,
                invoice,
                order_id,
                created_at,
                payment_option,
              } = order;

              const dateOne = new Date(created_at);
              const newCreatedAt = String(dateOne).slice(0, 16);

              return (
                <tbody key={index}>
                  <tr>
                    <td>{invoice}</td>
                    <td>{newCreatedAt}</td>
                    <td>{payment_option}</td>
                    <td className={`${status !== "pending" && "otherStatus"}`}>
                      {status}
                    </td>
                    <td>${totalPriceToPay}</td>
                    <td>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/order/${order_id}`}
                        className="Details-btn"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}

export default Orders;
