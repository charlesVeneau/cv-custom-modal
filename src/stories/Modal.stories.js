import React, {useState} from 'react'
import { storiesOf } from "@storybook/react";
import '../styles.css'
import { Modal } from "../components/Modal";
import { BrowserRouter } from "react-router-dom"

const stories = storiesOf('App Test', module)

stories.add('App', ()=>{
    const [isOpen, setIsOpen] = useState (false)

    const content = {
        "link": "noWhere",
        "linkText": "noWhere",
        "modalTitle": "Succes !",
        "modalText": "Employee added successfully!",
        "status": "success"
    }

    function toggleModal(){
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <BrowserRouter>
        <Modal isOpen={isOpen} toggleModal={toggleModal} content={content} />
        <button onClick={toggleModal}>{isOpen ? "Hide" : "Show"}</button>
        </BrowserRouter>
    )
})