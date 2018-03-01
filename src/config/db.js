import mongoose from 'mongoose';
import constants from './constants';

mongoose.Promise = global.Promise;

mongoose.set('debug', true);

try {
  mongoose.connect(constants.MONGODB_URL, {});
} catch (err) {
  mongoose.createConnection(constants.MONGODB_URL, {});
}

mongoose.connection
  .once('open', () => console.log('MongoDB is running!'))
  .on('error', err => {
    throw err;
  });
