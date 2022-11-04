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
        "status": "error"
    }

    function closeModal(){
        setIsOpen(false);
    }

    function openModal(){
        setIsOpen(true)
    }

    return (
        <BrowserRouter>
        <Modal isOpen={isOpen} closeModal={closeModal} content={content} />
        <button onClick={openModal}>{isOpen ? "Hide" : "Show"}</button>
        </BrowserRouter>
    )
})