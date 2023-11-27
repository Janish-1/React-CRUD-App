const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3001;

const uri = 'mongodb+srv://janish:janish@cluster0.j3lhqgn.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Specifying database
  dbName: 'Userdata',
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Create Schema for inputting Data into 'userdetails' collection
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
},{ collection: 'userdetails' });

// Define what collection to use here 
const UserModel = mongoose.model('userdetails', userSchema); // Model for 'userdetails' collection

app.use(bodyParser.json());
app.use(cors());

// Create Function
app.post('/create', async (req, res) => {
  const { firstName, lastName, email } = req.body;

  try {
    // Create a new user document
    const newUser = new UserModel({
      firstName,
      lastName,
      email,
    });

    // Save the new user document to the 'user' collection
    await newUser.save();

    res.status(200).json({ message: 'User data saved to MongoDB', data: newUser });
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ message: 'Error saving user data' });
  }
});

// Read Function
app.get('/read',async(req,res)=> {
    try {
        // Fetch Data From Collection
        const data = await UserModel.find();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error); // Log error for debugging
        res.status(500).json({message: 'Failed to fetch data'});
    }
});

// Assuming you have already set up your app and UserModel as described above

app.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;

  try {
    const filter = { _id: id }; // Filter to find the user by id
    const update = { firstName, lastName, email }; // Creates a new updated object

    const updatedUser = await UserModel.findOneAndUpdate(
      filter,
      update,
      { new: true } // Returns the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User data updated', data: updatedUser });
  } catch (error) {
    console.error('Error updating user data:', error);
    res.status(500).json({ message: 'Error updating user data' });
  }
});

app.post('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await UserModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully', data: deletedUser });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Error deleting user' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});