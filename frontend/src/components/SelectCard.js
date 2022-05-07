import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import EditCard from "./EditCard";
import { useHistory } from "react-router-dom";


export default function SelectCard() {
  const { id } = useParams();
  const history = useHistory() 

  const [cards, setCards] = useState([]);

  //get all card details
  function getCards() {
    axios
      .get("http://localhost:5000/card")
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    getCards();
  }, []);

  console.log(cards);

  
 



   function editCard(id) {
     console.log(id) 
      history.push({pathname:'/update',id})
   }

   function deleteCard(id) {
    console.log(id) 
     history.push({pathname:'/delete',id})
  }
   

  return (
    <div>
      <h1>Edit Payment Method</h1>

      <div class="container mt-3 pt-3">
        <div class="row">
          <div class="col-sm-6">
            {/* <div class="card">
              <div class="card-body">
                <table className="table mt-3">
                  <tbody>
                    {cards.map((item) => (
                      <tr key={item._id}>
                        <td>{item.cardType}</td>
                        <td>{item.cardNumber}</td>
                        <td>{item.expirationDate}</td>

                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                          <button type="submit" class="btn btn-primary btn-sm" onClick={() => editCard(item._id)}> Update
                          </button>
                          <button type="submit" id="delete_btn" class="btn btn-primary btn-sm" href="" onClick={() => deleteCard(item._id)}>Delete</button>
                        </div>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div> */}


            {cards.map((item) => (
              <>
              <div class="card">
                      <div class="card-body">
                         <h5>{item.cardType}</h5>
                         <h5></h5>
                        <h5>{item.cardNumber}<br></br><label >Exp.date</label><br></br>{item.expirationDate}</h5>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                          <button type="submit" class="btn btn-primary btn-sm" onClick={() => editCard(item._id)}> Update
                          </button>
                          <button type="submit" id="delete_btn" class="btn btn-primary btn-sm" href="" onClick={() => deleteCard(item._id)}>Delete</button>
                        </div>
                        
                      </div>
                    </div>
                    <br/>
              </>
                    
                  
                    ))}

            
            
            
                      </div>
        </div>
      </div>
    </div>
  );
}
