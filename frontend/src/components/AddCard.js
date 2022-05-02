import React, { useState } from "react";
import axios from "axios";


export default function AddCard () {

    const [cardType, setCardType] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [securitycode, setSecurityCode] = useState("");


    function sendcardData(e){
        
        e.preventDefault();

        const newCard = {

            cardType: cardType,
            cardHolderName: cardHolderName,
            cardNumber: cardNumber,
            expirationDate: expirationDate,
            securitycode: securitycode

        }

        console.log(newCard);
        
        axios.post("http://localhost:5000/card/insert",newCard).then(() => {
            alert("Payment method is added successfully")
        }).catch((err)=>{
            alert(err)
        })

    }

    const radioClick = (e) => {
       setCardType(e.target.value);
    }


    return (

         
    <div class='container mt-100 pt-10'>
      
    
<div style ={ {marginTop: 100}}>
    <h3>Add Payment Method</h3>


<label for="formGroupExampleInput" class="form-label" style={{marginRight: 50}}>Card type</label>

<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="visa" checked={cardType === "visa"} onChange={radioClick}/>
<label class="form-check-label" for="inlineRadio1"></label>
<img src='/images/visa.jpg' width='50'  alt="" />
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="master"  checked={cardType === "master"} onChange={radioClick}/>
<label class="form-check-label" for="inlineRadio2"></label>
<img src='/images/mastercard.jpg' width='50' alt=""/>
</div>




    <div class="container">

    {/* <button><img src="/images/mastercard.jpg" alt="my image"  style={{outline: 'none'}} nonClick={() => imageClick()}/></button>
    <button><img src="/images/mastercard.jpg" alt="my image"  onClick={() => imageClick()}/></button> */}




{/* <input type="radio" value="visa"  onChange={() => imageClick()}>Visa</input>

<input type="radio" value="master"  onChange={() => imageClick()}>Master</input> */}

<form id = "frm" onSubmit={sendcardData}>





<label for="formGroupExampleInput" class="form-label">Card holder name</label>
<input required type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter card holder name" onChange={(e)=> {setCardHolderName(e.target.value);}} />

<label for="formGroupExampleInput2" class="form-label">Card number</label>
<input required type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter card number" onChange={(e)=> {setCardNumber(e.target.value);}}/>

<label for="formGroupExampleInput2" class="form-label">Expiration date</label>
<input required type="text" class="form-control" id="formGroupExampleInput2" placeholder="MM/YY" onChange={(e)=> {setExpirationDate(e.target.value);}}/>

<div>
<label for="formGroupExampleInput2" class="form-label">Security code</label>
<input required type="text" class="form-control" id="formGroupExampleInput2" placeholder="CVV" onChange={(e)=> {setSecurityCode(e.target.value);}}/>
<button type="button" class="btn btn-lg btn-secondary" data-bs-toggle="popover" title="The CVV is a 3- or 4-digit code printed on your credit card." data-bs-content="And here's some amazing content. It's very engaging. Right?">?</button>
</div>

<div class='container mt-3 pt-3'></div>

<button type="submit" class="btn btn-primary btn-lg">Save</button>
<button type="button" class="btn btn-secondary btn-lg" onClick={()=>window.location.reload(false)}>Cancel</button>

</form>

</div>
</div>
  </div>

    )
}