const db=require("../models");
const Student = db.student;

exports.create =async(req,res)=>{
    try{
        const student = await Student.create(req.body);

        res.status(200).send({student});
    }catch(error){
        console.log(error);
        res.status(500).send(error)
    }
}
exports.findAll = async (req, res) => {
    try{
        const student = await Student.findAll();
        res.send(student);
    }catch(error){
        console.log(error);
    }
}
    
