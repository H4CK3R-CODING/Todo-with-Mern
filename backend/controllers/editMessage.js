import Todo from "../models/Todo.model.js";

const editMessage = async (req, res) => {
  try {
    const {id} = req.params;
    const { msg } = req.body;
    console.log(id);
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { msg: msg },
      { new: true }
    );
    res.send(todo);
  } catch (err) {
    console.log(err);
  }
};

export default editMessage;
