const empty_arr =[]
function todo (req,res){
    const data = req.body.data
    empty_arr.push(data)
    return res.status(201).json({
        message:"Created Successfully",
        code:201,
        data
    })
}


module.exports = {
    todo
}