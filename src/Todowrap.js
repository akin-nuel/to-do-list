const Todo = ({task}) => {
    return ( 
        <div className="Todowrap">
            <input type="checkbox" className="chekbox" />
            <p>{task.task}</p>

        </div>
    );
}
 
export default Todo;