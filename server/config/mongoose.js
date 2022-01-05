import mongoose from 'mongoose';

export const connectDb = () => {
  // Set up default mongoose connection
  const mongoDbUrl = 'mongodb://localhost/capstone';
  mongoose.connect(mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Get the default connection
  const db = mongoose.connection;

  // Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  return db;
};
