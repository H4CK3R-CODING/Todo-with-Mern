import React from 'react'

const Messages = ({alltodo,hadleEditBtn,hadleDel}) => {

    // console.log(alltodo[0].msg);
  return (
    <div className='mt-6'>
      <ul>
        {
            Array.from(alltodo).map((data,idx)=>{
                return (<li className='flex m-4' key={idx}>
                    <p className="m-3 font-semibold">{data.msg}</p>
                    <button className="font-semibold bg-slate-400 p-1 rounded-md w-[80px]" onClick={()=>{hadleEditBtn(data)}}>
                        Edit
                    </button>
                    <button className="font-semibold bg-slate-400 p-1 rounded-md w-[80px]" onClick={()=>{hadleDel(data)}}>
                        Delete
                    </button>
                </li>);
            })
        }
      </ul>
    </div>
  )
}

export default Messages
