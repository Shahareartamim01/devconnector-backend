import mongoose from 'mongoose';

// Schema = Rules for our "User"
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true, // must be unique
    match: [/.+\@.+\..+/, 'Please fill a valid email address'], // simple email check
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Virtual field (computed, not stored in DB)
userSchema.virtual('displayName').get(function () {
  return `${this.name} the programmer`; // just adding Smith for fun
});

// Method → each User can sayHello()
userSchema.methods.sayHello = function () {
  console.log(`Hi, I am ${this.name}!`);
};

// Export model
const User = mongoose.model('User', userSchema);

export default User;
