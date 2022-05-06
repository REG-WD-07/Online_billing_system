// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router";



// function DeleteCard() {
//     var { id } = useParams();
//     useEffect(() => {

//         function deleteCard(id) {

//             const result = window.confirm("Do you really want to Delete?");
//             if (result == true) {

//                 axios.delete(`http://localhost:5000/card/delete/${id}`).then((res) => {
//                     console.log(res);
//                     window.location = "/components/SelectCard";
//                     alert("Decline Requset Success");
//                 }).catch((err) => {
//                     alert(err);
//                 })
//             } else {
//                 window.location = "/components/SelectCard" + id;
//             }
//         }
//         deleteCard(id);
//     })



//     return (
//         <div> 

//         </div>
//     )
// }

// export default DeleteCard;

























// // //      return (

// // //         <div></div>
 
// // //         <div class='container mt-3 pt-3'>
// // //             <div class="alert alert-success" role="alert">
// // //   <h4 class="alert-heading">Remove Payment Method</h4>
// // //   <p></p>
// // //   <hr/>
// // //   <p class="mb-0">Are you sure you want to remove this card ?</p>
// // //   <div class='container mt-3 pt-3'></div>
// // //         <button class="btn btn-primary me-md-2" type="button" value="Delete" onClick={() => DeleteCard()}>YES</button>
// // //         <button class="btn btn-primary" type="button">NO</button>
// // // </div>
// // //         </div>
        
// // //             )
// // //         }





