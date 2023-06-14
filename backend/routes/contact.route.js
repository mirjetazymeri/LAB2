const express = require('express')
const contactRoute = express.Router()

// model
let ContactModel = require('../models/Contact')
contactRoute.route('/create-contact').post((req, res, next) => {
  ContactModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

contactRoute.route('/').get((req, res, next) => {
    ContactModel.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

contactRoute.route('/edit-contact/:id').get((req, res, next) => {
    ContactModel.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  
// Update
contactRoute.route('/update-contact/:id').put((req, res, next) => {
    ContactModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
          console.log('Book successfully updated!')
        }
      },
    )
  })
  
  // Delete
 contactRoute.route('/delete-contact/:id').delete((req, res, next) => {
    ContactModel.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
          msg: data,
        })
      }
    })
  })
  
  module.exports = contactRoute
  

  