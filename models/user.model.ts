import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name Is Required!!'],
    index: true,
    max: [40, 'Name Should be less than 40 chars!!'],
    min: [3, 'Name Should be at least 3 chars!!'],
  },
  email: {
    type: String,
    required: [true, 'Email Is Required!!'],
    unique: [true, 'Email Already exists!!'],
  },
  username: {
    type: String,
    required: [true, 'Username Is Required!!'],
    unique: [true, 'Username Already Taken!!'],
    max: [50, 'Username Should be less than 50 chars!!'],
    min: [5, 'Username Should be at least 10 chars!!'],
  },
  country: {
    type: String,
  },
  gender: {
    type: String,
  },
  bio: {
    type: String,
    max: 100,
    min: 10,
  },
  avatarUrl: {
    type: String,
  },
  coverUrl: {
    type: String,
  },
  following: {
    type: Number,
    default: 0
  },
  followers: {
    type: Number,
    default: 0
  },
  isOnboardingComplete: {
    type: Boolean,
    default: false
  }
},
  { timestamps: true }
)

const User = models.User || model('User', userSchema);
export default User;