import React, {useState} from 'react'
import { storiesOf } from "@storybook/react";
import '../styles.css'
import { Modal } from "../components/Modal";

const stories = storiesOf('App Test', module)

stories.add('App', ()=>{
    const [isOpen, setIsOpen] = useState (false)

    function toggleModal(){
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <>
        <Modal isOpen={isOpen} toggleModal={toggleModal} redirect='nul part' redirectText='nul part' />
        <button onClick={toggleModal}>{isOpen ? "Hide" : "Show"}</button>
        </>
    )
})