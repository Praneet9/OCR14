import User from "./user.model";
import bcrypt from "bcrypt";

// Create a new User
export const createUser = async (req, res) => {
  // Make sure the user confilcts does not occure
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        //User conficts responce
        return res.status(409).json({
          error: true,
          message: `${res.body.email} already exists :(`
        });
      } else {
        // this will hash the password and will create a new user.
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: true,
              message: `Error in Authentication!: ${err}`
            });
          } else {
            const user = new User({
              name: req.body.name,
              email: req.body.email,
              password: hash
            });

            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  error: false,
                  message: "User created :)"
                });
              })
              .catch(err => {
                res.status(500).json({
                  error: true,
                  message: `Failed to create a new user!: ${err}`
                });
              });
          }
        });
      }
    });
};

// Signin user
export const SigninUser = async (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          error: true,
          message: `Authentication failed!`
        });
      }

      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            error: true,
            message: `Authentication failed!`
          });
        }

        if (result) {
          return res.status(200).json({
            error: false,
            message: "Successfuly login :)"
          });
        } else {
          return res.status(401).json({
            error: false,
            message: `Authentication failed!`
          });
        }
      });
    });
};