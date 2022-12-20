import mongoose from "mongoose"

const Schema = mongoose.Schema

const puppySchema = new Schema({
  name: {type: String, required: true},
  breed: {type: String, default: 'Mixed'},
  age: {type: Number, default: 0}
}, {
  timestamps: true
})

// compule into Puppy model
const Puppy = mongoose.model('Puppy', puppySchema)

export {
  Puppy
}