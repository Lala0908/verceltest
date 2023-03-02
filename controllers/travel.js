const router = require('express').Router()
const Travel = require('../models/travel')

router.get('/', async (req, res) => {
    try{
        const travel = await Travel.find()
        res.json(travel)
         } catch (error) {
            console.log(error)
            res.status(400).json({'message': 'error getting resources'})
         }

})

router.post('/', async (req, res) => {
   try{
    const travel = await new Travel(req.body).save()
    res.json(travel)
     } catch (error) {
        console.log(error)
        res.status(400).json({'message': 'error creating resource'})
     }
})

module.exports = router