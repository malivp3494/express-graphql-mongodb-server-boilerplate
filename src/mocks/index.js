import faker from 'faker';
import User from '../models/User';

const TOTAL_USERS = 10;

export default async () => {
  try {
    await User.remove();
    await Array.from({ length: TOTAL_USERS }).map(i => {
      User.create({
        username: faker.internet.userName(),
        password: 'passmeplease',
      });
    });
  } catch (err) {
    console.log('Error: ', err);
  }
};
