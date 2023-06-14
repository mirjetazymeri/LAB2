
const mongoose = require('mongoose')
const Schema = mongoose.Schema

let contactSchema = new Schema(
  {
    name:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    description:{
        type:String
  }
},
  {
    collection: 'contacts', 
  },
)

module.exports = mongoose.model('Contact', contactSchema)
