import React, { useEffect, useState } from 'react'


const initialFormValues = { duty: '', complete:false};

function Form({ todos, addTodos }) {

    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.duty === ''){
            alert("Enter a to do!")
            return false;
        }

        addTodos([...todos, form]);

    }; 

    useEffect(() => {
        console.log(todos);
    }, [todos])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
      }, [todos])   

    

    return (

        <form onSubmit={onSubmit}>
            <div>
                <input id='newdutytxt'               
                    name='duty'
                    placeholder='Add a new duty!'
                    value={form.duty}
                    onChange={onChangeInput} />
            </div>

            <input 
        className="sub" 
        type="submit" 
        value="Submit">
      </input>

        
        </form>

    )
}

export default Form;