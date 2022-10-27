import React, { useRef } from 'react';
import { CheckCircleIcon } from '../CheckCircleIcon';
import { Xmark } from '../Xmark/Xmark';
import "../../styles.css";
import { NavLink } from 'react-router-dom';

/**
 * It's a modal that displays a success message when an employee is added
 * @returns A modal component that is rendered when the isSaved state is true.
 */
export const  Modal = ({ isOpen, toggleModal, content }) => {
  const closeButton = useRef(null);

  function closeParentModal(event){
    event.target.classList.contains('modal-block') ? toggleModal() : undefined;
  }


  if(isOpen){
    return (
      <div
        onClick={(e) => closeParentModal(e)}
        id="modal-block"
        className="modal-block"
      >
        <div
          id="modal-elt"
          className="modal-elt"
        >
          <Xmark
            ref={closeButton}
            toggleModal={toggleModal}
          />
          <CheckCircleIcon/>
          <h3 className="modal-title">{content.modalTitle}</h3>
          <p>{content.modalText}</p>
          <NavLink
            to={content.link}
            className="modal-link"
            onClick={() => toggleModal()}
          >
            {content.linkText}
          </NavLink>
        </div>
      </div>
  );}
}