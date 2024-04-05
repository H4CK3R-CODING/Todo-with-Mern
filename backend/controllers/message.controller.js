import TodoModel from "../models/Todo.model.js";


const sendMessage = (req,res)=>{
  const {msg} = req.body;
  const savi = new TodoModel({ msg: msg });
  savi.save();
  res.send({msg});
}

export default sendMessage;