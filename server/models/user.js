const { Schema, model } = require('mongoose');

const photographerSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    companyName:{
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    photoType: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    reservationCost: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
});

const User = model('User', photographerSchema);

module.exports = User;