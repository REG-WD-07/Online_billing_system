import React, { useEffect, useState } from "react";
import axios from "axios";
import Moment from 'react-moment';

export default function PaymentHistory() {


        const [bills, setBills] = useState([]);

        function getBills() {
          axios.get("http://localhost:5000/bill/view").then((res) => {
              setBills(res.data);
          }).catch((err) => {
              alert(err.message);
          })
        }

    useEffect(() => {
        getBills();
    }, [])

    console.log(bills);







    
  return (
    <div className='container mt-5 pt-5'>
        <h3>Payment History</h3>
        <div className="container mt-3">
          <div className="container-fluid">
            <form className="d-flex">
              <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit" >Search</button>
            </form>
          </div>

          <table className="table mt-3">
            <thead>
              <tr>
                <th>Refferance No.</th>
                <th>Bill type</th>
                <th>Profile</th>
                <th>Account No.</th>
                <th>Paid using</th>
                <th>Transaction date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {              
              bills.map( item => (
                <tr>
                  <td>{item._id}</td>
                  <td>{item.billType}</td>
                  <td>{item.profile}</td>
                  <td>{item.accountNumber}</td>
                  <td>{item.cardNumber}</td>
                  <td><Moment format="YYYY-MM-DD HH:mm">{item.createdAt}</Moment></td>
                  <td>{item.amount}</td>
                </tr>
              )
              )}
            </tbody>
          </table>
        
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary me-md-2" type="button">Print</button>
          </div>
      </div>
    </div>
  )
}
