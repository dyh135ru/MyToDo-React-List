function App(){

    const [todos, setTodos] = React.useState(
        [
            {
                text: 'learn react',
                isCompleted: false,
            },
            {
                text: 'meet friend for lunch',
                isCompleted: false,
            },
            {
                text: 'build todo app',
                isCompleted: false,
            }
        ]
    );
<<<<<<< HEAD

    const addTodo = text => {
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
    }
    
    const removeTodo = e => {
        const index = Number(e.target.id);
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    }
=======
>>>>>>> b81d91a0200cc2757465ebd6a8820258b466e8ce
    return(<>

        {
            todos.map((todo,i) => 
<<<<<<< HEAD
                <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>)
        }
        <TodoForm addTodo={addTodo}/>
        
=======
                <div className="todo" key={i}>{todo.text}</div>)
        }
>>>>>>> b81d91a0200cc2757465ebd6a8820258b466e8ce
    
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)