const mongoose = require('mongoose');

// Connect to the MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/todoDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4, // as mongo use ipv6 by default , so wwe have make it ipv4 to connect
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with a failure code
  }
};

//module.exports = connectDB; // to use this function in other files.. we are exporting it.. and we will use it there by importing it 
 export {connectDB};