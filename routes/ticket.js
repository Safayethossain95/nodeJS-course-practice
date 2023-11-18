const router = require('express').Router()
const db = require('../db/db')

router.get('/t/:ticketId',()=>{})
router.patch('/t/:ticketId',(req,res)=>{
    const ticketId = req.params.ticketId
    const updatedTicket = db.updateById(ticketId,req.body)
    res.status(200).json({message:"Updated Successfully",updatedTicket})
})
router.delete('/t/:ticketId',(req,res)=>{
    const ticketId = req.params.ticketId
    db.deleteByID(ticketId)
    res.status(203).send()
})

router.get('/u/:username',()=>{})
router.patch('/u/:username',()=>{})
router.delete('/u/:username',()=>{})

router.post('/sell',(req,res)=>{
    const {username,price} = req.body
    const ticket = db.create(username,price)

    res.status(201).json({message:'Ticket created successfully',ticket})
})
router.post('/bulk',(req,res)=>{
    const {username,price,quantity} = req.body    
    const ticket = db.bulkCreate(username,price,quantity)
    res.status(201).json({message:'Bulk created successfully',ticket})
})
router.get('/draw',(req,res)=>{
    console.log("ami draw")
    const winnerCount = req.query.wc ?? 1
    const winners = db.draw(winnerCount)
    res.status(200).json(winners)
})
router.get('',(req,res)=>{
    const tickets = db.find()
    res.status(200).json({
        tickets
    })
})

module.exports = router