import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ColorForm = ({ addColor }) => {
    const INITIAL_STATE = {
        color: ""
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
        console.log('formData:', formData);
    }

    const history = useHistory();
    // const goHome = () => {
    //     history.push('/colors');
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData.color);
        setFormData(INITIAL_STATE);
        history.push('/colors');
    };

    // const [isSubmitted, setToSubmitted] = useState(false);
    // const submit = () => {
    //     setToSubmitted(true);
    // }



    return (
        <form>
            <label htmlFor="color">Color: </label>
            <input 
                name="color" 
                value={formData.value}
                onChange={handleChange}
                />
            <button onClick={handleSubmit}>Add</button>
        </form>
    )
}

export default ColorForm;