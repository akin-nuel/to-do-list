import { useState } from "react";

const Input = ({addTodo}) => {
    const [value, setValue] = useState("")    

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("")
    }

    return ( 
        <div className="content">
            <form action="" className="todoform" onSubmit={handleSubmit}>
                <input type="text" className="addItemInput" placeholder="Type task..." value={value} onChange={(e) => setValue(e.target.value)}/>
                <input type="submit" className="todo-btn" value="Add"/>
            </form>

        </div>
    );
}
 
export default Input;