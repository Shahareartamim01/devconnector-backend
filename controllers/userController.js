import user from '../models/user.js';
import bcrypt from 'bcryptjs';

// Get all users from the database
export const getUser = async (req, res) => {
    try{
        const users = await user.find ({});
        res.json(users);
    } catch (err){
        res.status(500).json({message: 'Error fetching users'});
    }
};

// post a new user to the database
export const createUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;

        const userExists = await user.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

         // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);



        const newUser = new user({
            name, email, password: hashedPassword,
        });
        await newUser.save();

        res.status(201).json({message: 'User created successfully', newUser: {id: newUser._id,  name: newUser.name, email: newUser.email, role: newUser.role, date: newUser.date}});

    } catch (err) {
         console.error('Error creating user:', err.message);  // Add this line
    res.status(500).json({ message: 'Error creating user', error: err.message });
    }
}