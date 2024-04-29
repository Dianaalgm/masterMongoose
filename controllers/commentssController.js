const Comment = require ("../models/comment");

//CRUD Code for comments goes here 
//CREATE---------
const createComment = async(req,res)=>{
    //Get data from req.body
    const {title,body} = req.body;
    const comment = await Comment.create({
        title: title,
        body: body
    });
    res.json({comment:comment});
};

//READ------------
const fetchAllComments = async (req,res)=>{
    const comments = await Comment.find();
    res.json({comments:comments})
}

const fetchOneComment = async (req,res)=>{
    //Get ID
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId)
    res.json({comment:comment})
};

//UPDATE---------
const updatecomment = async(req,res)=>{
    const commentId = req.params.id;
    const { title,body }  = req.body;
    await Comment.findByIdAndUpdate(commentId,{
        title:title,
        body:body,
    });
    //Find to update Comments -> retrieve and send it as res
    const updatedComment = await Comment.findById(commentId);
    res.json({ comment: updatedComment})
};

//DELETE------
const deleteComment = async(req,res)=>{
    const commentId = req.params.id;
    await Comment.deleteOne({
        id:commentId
    })
    res.json({success: "Record has deleted successfully"})
};

//Export functions
module.exports = {
    createComment,
    fetchAllComments,
    fetchOneComment,
    updatecomment,
    deleteComment
};