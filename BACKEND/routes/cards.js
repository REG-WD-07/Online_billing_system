const router = require("express").Router();
let Card = require("../models/Card");


// Insert
router.route("/insert").post((req,res)=>{


    const cardType = req.body.cardType;
    const cardHolderName = req.body.cardHolderName;
    const cardNumber = req.body.cardNumber;
    const expirationDate = req.body.expirationDate;
    const securitycode = req.body.securitycode;
    //date
    const dateTime = req.body.dateTime;

    const newCard = new Card({
        
        cardType,
        cardHolderName,
        cardNumber,
        expirationDate,
        securitycode,
        //date
        dateTime

    })

    newCard.save().then(()=>{
        res.json("Payment method is added succesfully")
    }).catch((err)=>{
        console.log(err);
    })

})

//View
router.route("/").get((req,res)=>{

    Card.find().then((cards)=>{
        res.json(cards)
    }).catch((err)=>{
        console.log(err)
    })

})

//Update
router.route("/update/:id").put(async (req, res) => {
    let CardId = req.params.id;
    const {cardtype, cardholdername, cardNumber, expirationdate, securitycode} = req.body;

    const updateCard = {
        cardtype,
        cardholdername,
        cardNumber,
        expirationdate,
        securitycode
    }

    const update = await Card.findByIdAndUpdate(CardId, updateCard)
    .then(() => {
        res.status(200).send({status: "Card details are updated succesfully"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

//Delete
router.route("/delete/:id").delete(async (req,res) => {
    let CardId = req.params.id;

    await Card.findByIdAndDelete(CardId)
    .then(() => {
        res.status(200).send({status: "Payment method is removed"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete card", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let CardId = req.params.id;
    const card = await Card.findById(CardId)
    .then((card) => {
        res.status(200).send({status: "Card fetched", card});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get card", error: err.message});

    })
})


module.exports = router;