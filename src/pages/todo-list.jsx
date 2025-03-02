import { useForm } from 'react-hook-form'
import { useState } from 'react'
import './todo-list.css'

function TodoList(){
    // stores tasks persistently using zustand

    const tasks = [];
    


    // create form using react-hook-form
    const form = useForm()
    const { register, handleSubmit, reset } = form


    const onSubmit = (data) => {
        tasks.push(data.task)
        console.log(tasks);
        reset();
    }

    return (
        <>

            <main>
                <div className='todo-list'>
                    <div>
                        <h1>Todo List</h1>
                        <form id="task-form" onSubmit={handleSubmit(onSubmit)}>
                            <input 
                            placeholder='add new task' 
                            id="task" 
                            {...register("task")}></input>
                        </form>
                    </div>

                    <ul>
                        <li>Test1 <button>X</button></li>


                    </ul>

                </div>

            </main>
        </>
    );
}

export default TodoList;