import React, { useState } from "react";
import DropdownForm from "../Inputs/DropdownForm";
import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import UniversalButton from "../Buttons/UniversalButtonComponent";
import Datepicker from "react-tailwindcss-datepicker";

const inputStyle = {
    width: "500px",
};

export default function ProjectUpdateComponent(props) {

    
    const { data, setData, post, processing, errors, reset } = useForm({
        staffingid : props.staffingid,
        firstname: props.firstname,
        lastname: props.lastname,
        projectName: props.projectName,
        startDate: props.startDate,
        endDate: props.endDate,

        description: "",
    });
    console.log(data);
  
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
        console.log(data.projectName)
      
     
    };

    const [value, setValue] = useState({
        startDate: props.startDate,
        endDate: props.endDate,
    });

    const handleValueChange = (newValue) => {
   
        setValue(newValue);
        data.startDate = newValue.startDate;
        data.endDate = newValue.endDate;
      
 
    };


    const handleUpdate = (event) => {
        event.preventDefault();
        axios
            .post("/api/updateStaffing", data)
            .then(() => {
               
              window.location.href = "Scheduler";
                
            })
            .catch((error) => {
             
            });
    };
    const handleDelete = (event) => {
        event.preventDefault();
        axios
            .post("/api/deleteStaffing", props)
            .then(() => {
                window.location.href = "Scheduler";
                   
            })
    
    };
  
    return (
        <>
            <div >
                <div className="flex justify-center align-center p-12">
                    <form >
                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="firstname"
                                value="Vorname"
                            />

                            <TextInput
                                id="firstname"
                                name="firstname"
                                value={props.firstname}
                                className="mt-1 block w-full"
                                autoComplete="firstname"
                                handleChange={onHandleChange}
                                locked={true}
                            />

                            <InputError
                                message={errors.firstname}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="lastname"
                                value="Zuname"
                            />

                            <TextInput
                                id="lastname"
                                name="lastname"
                                value={props.lastname}
                                className="mt-1 block w-full"
                                autoComplete="lastname"
                                handleChange={onHandleChange}
                                locked={true}
                            />

                            <InputError
                                message={errors.lastname}
                                className="mt-2"
                            />
                        </div>
                    
                        <DropdownForm
                        projects={props.projects}
                        onHandleChange ={onHandleChange}
                        value={props.projectName}
                        >

                        </DropdownForm>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="datum"
                                value="Datum"
                            />
                            <Datepicker
                                value={value}
                                onChange={handleValueChange}
                            />
                        </div>

                
                    </form>
                    
                </div>

                <div className="flex justify-center align-center">
                    <form onSubmit={handleUpdate}>
                            <UniversalButton
                                type="submit"
                                text="Update"
                            ></UniversalButton>
                   </form>      
                   <form onSubmit={handleDelete}>   
                            <UniversalButton
                                type="submit"      
                                text="Delete"
                            ></UniversalButton>
                       
                    </form>  
                    </div>
            </div>
        </>
    );
}
