import user from '../models/user.js';

const userModelsql = {
  async getAdmin(username) {
    return await user.findOne({ where: { username } });
  },

  async insertAdmin(username, hashedPassword, role) {
    return await user.create({
      username,
      password: hashedPassword,
      role
    });
  },
}

export default userModelsql;