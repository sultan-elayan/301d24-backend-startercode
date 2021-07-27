'use strict';
const axios = require('axios');
const coffeeModel = require('../models/coffee.model');

// Endpoint for testing
const home = (req, res) => {

    res.send('hello im live ')
}


// Call the coffee api here and return the results
const retreiveItemsController = async (req, res) => {

    let url = 'https://coffeepedias.herokuapp.com/coffee-list/';

    let urlRes = await axios.get(url);

    let allDrinks = urlRes.data.map((item, idx) => {
        let drink = new Drink(item);
        return drink;
    })
    res.send(allDrinks)
};

class Drink {
    constructor(data) {

        this.id = data.id,
            this.title = data.title,
            this.description = data.description,
            this.ingredients = data.ingredients,
            this.image_url = data.image_url


    }
}



// Get favorite coffee from MongoDB
const getFavoriteCoffee = (req, res) => {

    coffeeModel.find({}, (error, data) => {
        res.send(data);
    })

}
// Create new fav coffee endpoint
const createItemController = (req, res) => {
    let { title, ingredients, image_url } = req.body

    let favDrink = new coffeeModel ({
        title: title,
        ingredients: ingredients,
        image_url: image_url

    })
    favDrink.save();
};

// update coffee from MongoDB
const updateItemController = (req, res) => {
    let id = req.params.id;
    const { title, description, ingredients, image_url } = req.body
    coffeeModel.findOne({ _id: id }, (error, data) => {
        data.title = title,
            data.description = description,
            data.ingredients = ingredients,
            data.image_url = image_url,
            data.save().then(() => {
                coffeeModel.find({}, (error, allData) => {
                    res.send(allData);
                })
            })
    })

};

// delete coffee from MongoDB
const deleteItemController = (req, res) => {
    let id = req.params.id;

    coffeeModel.remove({ _id: id }, (error, data) => {
        coffeeModel.find({}, (error, allData) => {
            res.send(allData)
        })
    })

};

module.exports = {
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    retreiveItemsController
};