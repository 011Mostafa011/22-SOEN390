/**
 * UserRepository
 *
 * @description :: repository functions to User
 */

class UserRepository {
  findByEmail = (email) => {
    return new Promise((resolve, reject) => {
      let emailAddress = email.emailAddress ? email.emailAddress : email;
      User.findOne({ emailAddress })
        .then((result) => {
          console.log("findByEmail result:", result);
          return resolve(result);
        })
        .catch((err) => {
          console.log("Error: UserRepository - findByEmail - findOne", err);
          return reject(err);
        });
    });
  };

  upsert(user, id) {
    return new Promise(async (resolve, reject) => {
      let userRecord = {};
      try {
        if (id) {
          userRecord = await User.updateOne({ id: id }).set({ ...user });
        } else {
          const exist = await User.find({
            emailAddress: user.emailAddress.toLowerCase(),
          });
          if (exist.length === 0) {
            userRecord = await User.create({
              ...user,
              password: await sails.helpers.passwords.hashPassword(
                user.password
              ),
            }).fetch();
          } else {
            console.log("Error: UserRepository - create", "Already exist");
            return reject({
              code: "USER_ALREADY_EXIST",
              message: "User already exist",
            });
          }
        }

        return resolve(userRecord);
      } catch (err) {
        console.log("Error: UserRepository - upsert", err);
        return reject(err);
      }
    });
  }
}

module.exports = new UserRepository();
