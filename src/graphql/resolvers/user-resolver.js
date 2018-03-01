import User from '../../models/User';

export default {
  getUsers: () => {
    return User.find({});
  },

  addUser: async (_, args) => {
    const user = await insertToDatabase(args);
    return {
      token: user.createToken(),
    };
  },
};

const insertToDatabase = async args => {
  return await User.create({
    username: args.username,
    password: args.password,
  });
};
