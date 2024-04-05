import React, { createElement, useEffect, useState } from "react";
import axios from "axios";
import Messages from "../components/Messages";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [alltodo, setAlltodo] = useState([]);
  const [editable, setEditable] = useState({});

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const hadleEditBtn = (data) => {
    setTodo(data.msg);
    const btn = document.querySelector("#todo_btn");
    btn.style.display = "none";
    const editBtn = document.querySelector("#editBtn");
    editBtn.style.display = "block";
    setEditable(data);
    // editBtn.addEventListener("click",(event)=>{
    //   event.preventDefault();
    //   const editData = async ()=>{
    //     const config = {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     };
    //     const data = { msg: todo };
    //     console.log(data);
    //     const result =await axios.post(`/api/msg/edit/${data._id}`,data, config);
    //     console.log(result);
    //   }
    //   editData();
    // });
  };

  const handleEdit = (event) => {
    event.preventDefault();
    if (editable) {
      const editData = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const data = { msg: todo };
        const result = await axios.post(
          `/api/msg/edit/${editable._id}`,
          data,
          config
        );
      };
      editData();

      // empty the input
      setTodo("");
      setEditable("");

      // remove edit btn and displat todo btn
      const btn = document.querySelector("#todo_btn");
      btn.style.display = "block";
      const editBtn = document.querySelector("#editBtn");
      editBtn.style.display = "none";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (todo.length == 0) {
      alert("write something");
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = { msg: todo };

    const result = await axios.post("/api/msg/sendMessage", data, config);

    // const result = await fetch("/api/msg/sendMessage", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({msg: todo}),
    // });

    // for empty the input after submit
    setTodo((curr) => {
      return "";
    });
  };

  const hadleDel = (data) =>{
    const del = axios.delete(`/api/msg/del/${data._id}`);
    console.log(del);
  }

  useEffect(() => {
    const getdata = async () => {
      const data = await axios.get("/api/msg/getTodo");
      // console.log(data.data);
      return data.data;
    };
    getdata()
      .then((data) => {
        // console.log(data);
        return setAlltodo((curr) => {
          return [...data];
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(data);
    // setAlltodo((curr) => {
    //   return [...data];
    // });
  }, [alltodo]);

  return (
    <>
      <div className="flex items-center flex-col">
        <form onSubmit={handleSubmit}>
          <input
            className="border-2 border-sky-400 rounded-lg m-2 p-2"
            type="text"
            name="todo"
            id="todo"
            onChange={handleChange}
            value={todo}
          />
          <button
            type="submit"
            className="btn font-semibold bg-slate-400 p-2 rounded-lg"
            id="todo_btn"
          >
            Add TODO
          </button>
          <button
            className="font-semibold bg-slate-400 p-2 rounded-lg hidden"
            id="editBtn"
            onClick={handleEdit}
          >
            Edit
          </button>
        </form>
        <div className="flex">
          <Messages alltodo={alltodo} hadleEditBtn={hadleEditBtn} hadleDel={hadleDel}/>
        </div>
      </div>
    </>
  );
};

export default Home;
