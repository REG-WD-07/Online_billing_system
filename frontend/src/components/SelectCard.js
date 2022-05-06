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

  //delete card button funtion
  const deleteCard = (id) => {
    window.confirm("Are you sure you want to delete the card ?")
    axios
      .delete(`http://localhost:5000/card/delete/${id}`)
      .then(() => {
        alert("Card deleted")
        
      })
      .catch((e) => {
        alert("error");
      });
  };


   function editCard(id) {
     console.log(id) 
     
      history.push({pathname:'/update',id})

    //  axios
    //   .put(`http://localhost:5000/card/update/${id}`)
    //   .then(() => {
    //     alert("Card Updated")
        
    //   })
    //   .catch((e) => {
    //     alert("error");
    //   });
   
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
