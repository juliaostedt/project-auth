import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config()

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-Authentication";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex") //uses 128 bytes to create a randomized algorithm to crypto the password.
  }
});

const User = mongoose.model("User", UserSchema); // the first letter will be lowercase and an s will be added in the db to the name "User"

const authenticateUser = async (req, res, next) => {
const accessToken = req.header("Authorization");
try {
const user = await User.findOne({accessToken: accessToken});
if (user) {
  next();
} else {
  res.status(401).json({ //401 = Authentication error
    success: false,
    response: "Please log in"
  })
}
} catch (error) { //400 - BAD REGUEST
res.status(400).json({
  success: false,
  response: error
})
}

};
// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("This is the backend of Project Auth by Mia Dahlgren and Julia Östedt");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find().limit(20).exec();
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ message: "Could not create user" })
  }
});

app.get('/secrets', authenticateUser, (req, res) => {
  res.status(200).json({message:"This is a super secret message"})
});

//REGISTER ENDPOINT
app.post("/register", async (req, res) => {
const { username, password } = req.body;
try {
  const salt = bcrypt.genSaltSync();
  if(password.length < 8) {
  res.status(400),json({
    success: false,
    response: "Password must be at least 8 characters"
  });
} else {
  const newUser = await new User ({username: username, password: bcrypt.hashSync(password, salt)}).save();
  res.status(201).json({ //201 is for "created"
    success: true,
    response: {
      username: newUser.username,
      accessToken: newUser.accessToken,
      id: newUser._id
    }
  });
}
}
catch(error) {
  res.status(400).json({
    success: false,
    response: error
  });

  //Add response when trying to create a username that already exists?
}
});

// LOGIN ENDPOINT
app.post("/login", async (req, res) => {
  const {username, password} = req.body;
  try {
    const user = await User.findOne({username});
    if (user && bcrypt.compareSync(password, user.password)) { //If our secret password is the same as the input if it would have been crupted in the same way it is true
    res.status(200).json({
      success: true,
      response: {
        username: user.username,
        id: user._id,
        accessToken: user.accessToken
     }})
  } else {
      res.status(404).json({
        success: false,
        response: "Your password or username was incorrect"
      });
  }
} catch (error) {
    res.status(400).json({
      success: false,
      response: error
    });
  }
});

//FUNCTION FOR AUTHENTICATED USER, IS ACCESS GRANTED?
// AUTHENTICATED ENDPOINT
/* const ThoughtSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: () => new Date() 
  },
  hearts: {
    type: Number,
    default: 0
  }
});  */


/* const Thought = mongoose.model("Thought", ThoughtSchema);

app.get("/thoughts", authenticateUser);
app.get("/thoughts", (req, res)=> {
  res.status(200).json({success: true, response: "all the thoughts"});
}); */

 ///


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
