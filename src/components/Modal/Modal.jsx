import { CheckCircleIcon } from '../CheckCircleIcon';
import { Xmark } from '../Xmark';
import { Dialog, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { Fragment, useRef } from 'react';

/**
 * It's a modal that displays a success message when an employee is added
 * @returns A modal component that is rendered when the isSaved state is true.
 */
export const  Modal = ({ isOpen, toggleModal, content }) => {
  const closeButton = useRef(null);


  if(isOpen){
    return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        initialFocus={closeButton}
        onClose={() => toggleModal()}
        id="modal-block"
        className="modal-block"
      >
        <Dialog.Panel
          id="modal-elt"
          className="modal-elt"
        >
          <Xmark
            ref={closeButton}
            toggleModal={toggleModal}
          />
          <CheckCircleIcon/>
          <Dialog.Title className="modal-title">{content.modalTitle}</Dialog.Title>
          <p>{content.modalText}</p>
          <NavLink
            to={content.link}
            className="modal-link"
            onClick={() => toggleModal()}
          >
            {content.linkText}
          </NavLink>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );}
}