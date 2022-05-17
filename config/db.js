const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env'});

const uri = process.env.MONGO_URI;

const clientOptions = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 

}

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri, clientOptions);
        console.log(`MongoDB connnected: ${conn.connection.host}`.cyan.underline.bold)
    } catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);   
    }
}

module.exports = connectDB;