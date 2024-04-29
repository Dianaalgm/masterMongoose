const User = require ("../models/user");

//CRUD Code for users goes here 
//CREATE---------
const createUser = async(req,res)=>{
    //Get data from req.body
    const {title,body} = req.body;
    const user = await User.create({
        title: title,
        body: body
    });
    res.json({user:user});
};

//READ------------
const fetchAllUsers = async (req,res)=>{
    const users = await User.find();
    res.json({users:users})
}

const fetchOneUser = async (req,res)=>{
    //Get ID
    const userId = req.params.id;
    const user = await User.findById(userId)
    res.json({user:user})
};

//UPDATE---------
const updateUser = async(req,res)=>{
    const userId = req.params.id;
    const { title,body }  = req.body;
    await User.findByIdAndUpdate(userId,{
        title:title,
        body:body,
    });
    //Find to update User -> retrieve and send it as res
    const updatedUser = await User.findById(userId);
    res.json({ user: updatedUser})
};

//DELETE------
const deleteUser = async(req,res)=>{
    const userId = req.params.id;
    await User.deleteOne({
        id:userId
    })
    res.json({success: "Record has deleted successfully"})
};

//Export functions
module.exports = {
    createUser,
    fetchAllUsers,
    fetchOneUser,
    updateUser,
    deleteUser
};