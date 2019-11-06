const router = require('express').Router();

const Cars = require('./cars-model.js');


// GET routes //

router.get('/', (req, res) => {
    
    Cars.get()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(error => { 
            res.status(500).json({ message: 'Unable to retrieve cars', error})
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Cars.getById(id)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(error => {
            res.status(500).json({ message: "unable to retrieve car by ID", error})
        })
})

// Post new car //

router.post('/', (req, res) => {
    const carData = req.body;

    Cars.insert(carData)
        .then(newCar => {
            res.status(201).json(newCar)
        })
        .catch(error => {
            res.status(500).json({ message: "unable to add new car", error})
        })
})

// PUT update car data //

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Cars.update(id, changes)
        .then(update => {
            res.status(200).json(update)
        })
        .catch(error => {
            res.status(500).json({message: 'unable to update car information', error})
        })


})

// DELETE delete car //

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Cars.remove(id)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(error => {
            res.status(500).json({message: "unable to delete car", error})
        })
})




module.exports = router;