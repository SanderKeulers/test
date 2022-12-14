const mongoose = require("mongoose");

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        
          });
        
    } catch (error) {
        console.log(error)
        
    }


  console.log("MongoDB Connected");
};

module.exports = connectDB;