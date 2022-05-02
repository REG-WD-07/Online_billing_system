import React, { useState, useEffect} from "react";
import axios from "axios";


export default function PayBill () {

    const [billType, setBillType] = useState("");
    const [profile, setProfile] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [cards, setCards] = useState(null);

    // useEffect(() =>{
    //   fetch("http://localhost:5000/card/").then(response => {
    //    return response.json();
    // }).then(data =>{
    //   //let cd = Object.keys(data);
    //   setCards(data);

    // }).catch((err)=>{
    //     alert(err)
    // })
    // });


    function sendData(e){
        
        e.preventDefault();

        const newBill = {
              billType: billType,
              profile: profile,
              accountNumber: accountNumber,
              amount: amount,
              cardNumber: paymentMethod
        }
        
        console.log(newBill);

        axios.post("http://localhost:5000/bill/add", newBill).then(() => {
            alert("Payment is successful")
        }).catch((err)=>{
            alert(err)
        })

    }


    return (

      


  <div class='container mt-5 pt-5'>

    <h3>Pay bills</h3>

      <div class='container mt-3 pt-3'></div>
      
        <form onSubmit={sendData}>
      
          <label for="formGroupExampleInput" class="form-label">Bill type</label>
            <select required class="form-select" onChange={(e)=> {setBillType(e.target.value);}} aria-label="Default select example">
              <option selected value="0">Select bill type</option>
              <option value="Electricity">Electricity</option>
              <option value="Water">Water</option>
              <option value="Communication">Communication</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Insurance">Insurance</option>
              <option value="LeasingandFinance">Leasing and Finance</option>
          </select>

          <label for="formGroupExampleInput" class="form-label">Profile</label>
            <select required class="form-select" onChange={(e)=> {setProfile(e.target.value);}} aria-label="Default select example">
              <option selected value={"0"}>Select profile</option>
              <option value="Home">Home</option>
              <option value="Office">Office</option>
            </select>
            
          <label for="formGroupExampleInput" class="form-label">Account number</label>
          <input required type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter account number" onChange={(e)=> {
            setAccountNumber(e.target.value);}} />

          <label for="formGroupExampleInput2" class="form-label">Amount</label>
          <input required type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter amount" onChange={(e)=> {
            setAmount(e.target.value);}} />

          <label for="formGroupExampleInput" class="form-label">Payment method</label>
            <select required class="form-select" onChange={(e)=> {setPaymentMethod(e.target.value);}} aria-label="Default select example">
              <option selected value={"0"}>Select payment method</option>
              <option  value={"123456"}>123456  Visa</option>
              <option  value={"456789"}>456789  Master</option>
            </select>

          <div class='container mt-3 pt-3'></div>
          <button type="submit" class="btn btn-primary btn-lg" >Pay</button>
          <button type="button" class="btn btn-secondary btn-lg" onClick={()=>window.location.reload(false)}>Cancel</button>

        </form>

  </div>

    )
}