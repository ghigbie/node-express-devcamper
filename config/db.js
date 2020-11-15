const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        userFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`MongoDB connected: ${conn.connection.host.blue}`.green)
}

module.exports = connectDB;