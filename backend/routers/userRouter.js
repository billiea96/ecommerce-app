import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get(
    '/seed', 
    expressAsyncHandler(async (req, res) => {
        // await User.remove({});
        const createdUsers = await User.insertMany(data.users);
        res.send({ createdUsers });
    })
);

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name, 
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
            return;
        }
    }

    res.status(401).send({ message: 'Invalid user or password' });
}));

userRouter.post('/register', expressAsyncHandler(async (req, res) => {
    let { name, email, password } = req.body;
    password = bcrypt.hashSync(password, 8);
    const user = new User({ name, email, password});

    const createdUser = await user.save();
    res.status(201).send({
        _id: createdUser._id,
        name: createdUser.name, 
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser)
    });
}));

userRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.send(user);
    }
    else {
        res.status(404).send({ message: 'User not found' });
    }
}));

export default userRouter;