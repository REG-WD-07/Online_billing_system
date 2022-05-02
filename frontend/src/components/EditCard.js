import React, { useEffect, useState } from "react";
import axios from "axios";
import Moment from 'react-moment';


export default function EditCard () {



    
    
            const [cards, setCards] = useState([]);
    
            function getCards() {
              axios.get("http://localhost:5000/card/get").then((res) => {
                  setCards(res.data);
              }).catch((err) => {
                  alert(err.message);
              })
            }
    
        useEffect(() => {
            getCards();
        }, [])
    
        console.log(cards);
    
    

    return (

         
    <div class='container mt-100 pt-10'>
      
    
<div style ={ {marginTop: 100}}>
    <h3>Edit Payment Method</h3>


<label for="formGroupExampleInput" class="form-label" style={{marginRight: 50}}>Card type</label>

<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="visa"  />
<label class="form-check-label" for="inlineRadio1"></label>
<img src='/images/visa.jpg' width='50'  alt="" />
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="master"  />
<label class="form-check-label" for="inlineRadio2"></label>
<img src='/images/mastercard.jpg' width='50' alt=""/>
</div>




    <div class="container">

    {/* <button><img src="/images/mastercard.jpg" alt="my image"  style={{outline: 'none'}} nonClick={() => imageClick()}/></button>
    <button><img src="/images/mastercard.jpg" alt="my image"  onClick={() => imageClick()}/></button> */}




{/* <input type="radio" value="visa"  onChange={() => imageClick()}>Visa</input>

<input type="radio" value="master"  onChange={() => imageClick()}>Master</input> */}

<form id = "frm" >





<label for="formGroupExampleInput" class="form-label">Card holder name</label>
<input required type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter card holder name" />

<label for="formGroupExampleInput2" class="form-label">Card number</label>
<input required type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter card number" />

<label for="formGroupExampleInput2" class="form-label">Expiration date</label>
<input required type="text" class="form-control" id="formGroupExampleInput2" placeholder="MM/YY" />

<div>
<label for="formGroupExampleInput2" class="form-label">Security code</label>
<input required type="text" class="form-control" id="formGroupExampleInput2" placeholder="CVV" />
<button type="button" class="btn btn-lg btn-secondary" data-bs-toggle="popover" title="The CVV is a 3- or 4-digit code printed on your credit card." data-bs-content="And here's some amazing content. It's very engaging. Right?">?</button>
</div>

<div class='container mt-3 pt-3'></div>

<button type="submit" class="btn btn-primary btn-lg">Save</button>
<button type="button" class="btn btn-secondary btn-lg" >Cancel</button>

</form>

</div>
</div>
  </div>

    )
}