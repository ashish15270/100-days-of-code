const express = require('express')
const fs = require('fs')
const uuid = require('uuid')


const router = express.Router()

const resData = require('./../util/restaurant-data')

router.get('/restaurants',function(req, res){
  const order = req.query.order
  let nextOrder = 'desc'

  if (order !== 'asc' && order === 'desc'){
    nextOrder = 'asc'
  }

  if (order === 'desc'){
    nextOrder = 'asc'
  }

  const storedRestaurants = resData.getStoredRestaurant()
  
  storedRestaurants.sort(function(resA, resB) {
    if ( 
      (order === 'asc' && resA.name > resB.name) || 
    (order === 'desc' && resA.name < resB.name)
  ) {
      return 1
    } 
      return -1
  })
  
  res.render('restaurants', { numberOfRestaurants: storedRestaurants.length, 
    restaurants: storedRestaurants, nextOrder: nextOrder
  })
})

router.get('/restaurants/:id', function(req, res) {
  const storedRestaurants = resData.getStoredRestaurant()

  const restaurantId = req.params.id

  for (restaurant of storedRestaurants){
    if (restaurant.id === restaurantId)
    return res.render('restaurants-detail', {restaurant : restaurant})
  }
  res.status(404).render('404')
})

router.get('/recommend',function(req, res){
  res.render('recommend')
})

router.post('/recommend', function(req, res){
  const restaurant = req.body
  restaurant.id = uuid.v4();

  const storedRestaurants = resData.getStoredRestaurant()
  storedRestaurants.push(restaurant)

  resData.storeRestaurants

  res.redirect('/confirm')
})

router.get('/confirm',function(req, res){
  res.render('confirm')
})

module.exports = router
