const Users = require("../usersModel");
const Auth = require("../../auth/authModel");
const generateToken = require("../../../token/token");

module.exports = {
  verifyUserExist,
  checkIfUserExist,
  verifyAccountOwner
};

async function verifyUserExist(req, res, next) {
  try {
    const { id } = await Users.findById(req.params.id);
    id ? next() : res.status(400).json({ message: "No by with that ID" });
  } catch (err) {
    res.status(400).json({ message: "No user by that ID" });
  }
}

//middleware that checks if using exist using only email. 
// if the user doesn't exist it creates a new user and sets 
// the admin to false. this middleware was made to work with 
// 3rd party api like firebase for more security
function checkIfUserExist(req, res, next) {
  registeruser = req.body;
  if (req.body.email) {
    Auth.findByEmail(req.body.email)
      .then(user => {
        if (user) {
          next();
        } else {
           registeruser.admin = 0
          Auth.add(registeruser)
            .then(newUser => {
              const token = generateToken(newUser);
              res.status(201).json({
                message: `welcome ${newUser.email}!`,
                newUser,
                token
              });
            })
            .catch(error => {
              res.status(500).json(error);
            });
        }
      })
      .catch(err => {
        res.status(500).json({ err, message: "error finding user by email" });
      });
  } else if (!req.body.email) {
    res.status(400).json({ message: "Please provide a email" });
  }
}

async function verifyAccountOwner(req, res, next) {
  try {
    const { id } = await Users.findById(req.params.id);
    id === req.decodedToken.id
      ? next()
      : res.status(400).json({ message: "User does not own this account" });
  } catch (err) {
    // console.log("No post at ID: delete");
    res.status(400).json({ message: "No account with that ID" });
  }
}
