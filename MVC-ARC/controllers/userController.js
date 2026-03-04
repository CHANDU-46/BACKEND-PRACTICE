const userModel = require('../models/userModel');

exports.getUsers = (req, res) => {
    res.json(userModel.users);
};

exports.createUser = (req, res) => {
    const newUser = {
        id: userModel.users.length + 1,
        name: req.body.name,
    };

    userModel.users.push(newUser);
    res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = userModel.users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name;
    res.json(user);
};

exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    userModel.users = userModel.users.filter((u) => u.id !== id);
    res.json({ message: "User Deleted" });
};
