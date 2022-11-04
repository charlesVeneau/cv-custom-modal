import React from 'react';
import { CheckCircleIcon } from '../CheckCircleIcon';
import { ErrorIcon } from '../ErrorIcon';
import { Xmark } from '../Xmark/Xmark';
import "../../styles.css";
import { NavLink } from 'react-router-dom';

/**
 * It's a modal that displays a success message when an employee is added
 * @returns A modal component that is rendered when the isSaved state is true.
 */
export const  Modal = ({ isOpen, closeModal, content }) => {
  // const closeButton = useRef(null);

  /**
   * If the user clicks on the modal-block element, close the modal
   * @param event - The event object that is passed to the function.
   */
  function closeParentModal(event){
    if(event.target.classList.contains('modal-block'))
      closeModal()
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
            closeModal={closeModal}
          />
          {content.status === "success"? <CheckCircleIcon/> : <ErrorIcon/> }
          <h3 className="modal-title">{content.modalTitle}</h3>
          <p>{content.modalText}</p>
          <NavLink
            to={content.link}
            className="modal-link"
            onClick={() => closeModal()}
          >
            {content.linkText}
          </NavLink>
        </div>
      </div>
  );}
}