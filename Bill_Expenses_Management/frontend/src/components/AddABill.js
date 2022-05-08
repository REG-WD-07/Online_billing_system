import React, { useState } from "react";
import axios from "axios";


export default function AddABill() {

    const [Service_Profile_Category, setService_Profile_Category] = useState("");
    const [Select_SProfile, setSelect_SProfile] = useState("");
    const [No_of_Units, setNo_of_Units] = useState("");
    const [Taxes, setTaxes] = useState("");
    const [Total_Bill_Amount, setTotal_Bill_Amount] = useState("");
    const [FromDay, setFromDay] = useState("");
    const [FromMonth, setFromMonth] = useState("");
    const [FromYear, setFromYear] = useState("");
    const [ToDay, setToDay] = useState("");
    const [ToMonth, setToMonth] = useState("");
    const [ToYear, setToYear] = useState("");

    function sendData(e) {

        e.preventDefault();

        const AddnewBill = {
            Service_Profile_Category: Service_Profile_Category,
            Select_SProfile: Select_SProfile,
            No_of_Units: No_of_Units,
            Taxes: Taxes,
            Total_Bill_Amount: Total_Bill_Amount,
            FromDay: FromDay,
            FromMonth: FromMonth,
            FromYear: FromYear,
            ToDay: ToDay,
            ToMonth: ToMonth,
            ToYear: ToYear
        }

        //console.log(newBill);

        axios.post("http://localhost:5000/models/Add_a_Bill.model/add", AddnewBill).then(() => {
            alert("New bill is added successfully")
        }).catch((err) => {
            alert(err)
        })

    }


    return (

        <div class='container mt-5 pt-5'>


            <h3>Add a Bill</h3>

            <div class='container mt-3 pt-3'></div>

            <form onSubmit={sendData}>


                <label for="formGroupExampleInput" class="form-label">Select Service Profile</label>
                <select class="form-select" onChange={(e) => { setService_Profile_Category(e.target.value); }} aria-label="Default select example">
                    <option selected value="0">Select category</option>
                    <option value="1">Electricity</option>
                    <option value="2">Water</option>
                    <option value="3">Communication</option>
                    <option value="1">Entertainment</option>
                    <option value="2">Insurance</option>
                    <option value="3">Leasing and Finance</option>
                </select>

                <label for="formGroupExampleInput" class="form-label">Select Relevant Profile to Add</label>
                <select class="form-select" onChange={(e) => { setSelect_SProfile(e.target.value); }} aria-label="Default select example">
                    <option selected value={"0"}>Select profile</option>
                    <option value="1">Home</option>
                    <option value="2">Office</option>

                </select>

                <label for="formGroupExampleInput" class="form-label">No.of Units(if applicable)</label>
                <input type="number" class="form-control" id="formGroupExampleInput" placeholder="Enter number of units" onChange={(e) => {
                    setNo_of_Units(e.target.value);
                }} />

                <label for="formGroupExampleInput2" class="form-label">Taxes(if applicable in Rs.)</label>
                <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="Enter tax charge" onChange={(e) => {
                    setTaxes(e.target.value);
                }} />

                <label for="formGroupExampleInput2" class="form-label">Total Bill Amount(Rs.)</label>
                <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="Enter total bill amount" onChange={(e) => {
                    setTotal_Bill_Amount(e.target.value);
                }} />

                <label for="formGroupExampleInput" class="form-label">Billing Period</label>

                <label for="formGroupExampleInput" class="form-label">From</label>
                <select class="form-select" onChange={(e) => { setFromDay(e.target.value); }} aria-label="Default select example">
                    <option selected value={"0"}>dd</option>
                    <option value="1">1</option><option value="2">2</option>
                    <option value="3">3</option><option value="4">4</option>
                    <option value="5">5</option><option value="6">6</option>
                    <option value="7">7</option><option value="8">8</option>
                    <option value="9">9</option><option value="10">10</option>
                    <option value="11">11</option><option value="12">12</option>
                    <option value="13">13</option><option value="14">14</option><option value="15">15</option>
                    <option value="16">16</option><option value="17">17</option><option value="18">18</option>
                    <option value="19">19</option><option value="20">20</option><option value="21">21</option>
                    <option value="22">22</option><option value="23">23</option><option value="24">24</option>
                    <option value="25">25</option><option value="26">26</option><option value="27">27</option>
                    <option value="28">28</option><option value="29">29</option><option value="30">30</option>
                    <option value="31">31</option>

                </select>
                <select class="form-select" onChange={(e) => { setFromMonth(e.target.value); }} aria-label="Default select example">
                    <option selected value={"0"}>mm</option>
                    <option value="1">January</option><option value="2">February</option>
                    <option value="3">March</option><option value="4">April</option>
                    <option value="5">May</option><option value="6">June</option>
                    <option value="7">July</option><option value="8">August</option>
                    <option value="9">September</option><option value="10">October</option>
                    <option value="11">November</option><option value="12">December</option>

                </select>
                <select class="form-select" onChange={(e) => { setFromYear(e.target.value); }} aria-label="Default select example">
                    <option selected value={"0"}>yy</option>
                    <option value="1">2011</option><option value="2">2012</option>
                    <option value="3">2013</option><option value="4">2014</option>
                    <option value="5">2015</option><option value="6">2016</option>
                    <option value="7">2017</option><option value="8">2018</option>
                    <option value="9">2019</option><option value="10">2020</option>
                    <option value="11">2021</option><option value="12">2022</option>

                </select>

                <label for="formGroupExampleInput" class="form-label">To</label>
                <select class="form-select" onChange={(e) => { setToDay(e.target.value); }} aria-label="Default select example">
                    <option selected value={"0"}>dd</option>
                    <option value="1">1</option><option value="2">2</option>
                    <option value="3">3</option><option value="4">4</option>
                    <option value="5">5</option><option value="6">6</option>
                    <option value="7">7</option><option value="8">8</option>
                    <option value="9">9</option><option value="10">10</option>
                    <option value="11">11</option><option value="12">12</option>
                    <option value="13">13</option><option value="14">14</option><option value="15">15</option>
                    <option value="16">16</option><option value="17">17</option><option value="18">18</option>
                    <option value="19">19</option><option value="20">20</option><option value="21">21</option>
                    <option value="22">22</option><option value="23">23</option><option value="24">24</option>
                    <option value="25">25</option><option value="26">26</option><option value="27">27</option>
                    <option value="28">28</option><option value="29">29</option><option value="30">30</option>
                    <option value="31">31</option>

                </select>
                <select class="form-select" onChange={(e) => { setToMonth(e.target.value); }} aria-label="Default select example">
                    <option selected value={"0"}>mm</option>
                    <option value="1">January</option><option value="2">February</option>
                    <option value="3">March</option><option value="4">April</option>
                    <option value="5">May</option><option value="6">June</option>
                    <option value="7">July</option><option value="8">August</option>
                    <option value="9">September</option><option value="10">October</option>
                    <option value="11">November</option><option value="12">December</option>

                </select>
                <select class="form-select" onChange={(e) => { setToYear(e.target.value); }} aria-label="Default select example">
                    <option selected value={"0"}>yy</option>
                    <option value="1">2011</option><option value="2">2012</option>
                    <option value="3">2013</option><option value="4">2014</option>
                    <option value="5">2015</option><option value="6">2016</option>
                    <option value="7">2017</option><option value="8">2018</option>
                    <option value="9">2019</option><option value="10">2020</option>
                    <option value="11">2021</option><option value="12">2022</option>

                </select>

                <div class='container mt-3 pt-3'></div>

                <button type="submit" class="btn btn-primary btn-lg">Add Bill</button>
                <button type="button" class="btn btn-secondary btn-lg">Clear all</button>

            </form>


        </div>

    )
}