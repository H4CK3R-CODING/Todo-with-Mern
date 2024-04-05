import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  msg: {
    type: "String",
  },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;

