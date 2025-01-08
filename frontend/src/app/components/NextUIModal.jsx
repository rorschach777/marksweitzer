
"use client";

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

const NextUIModal = ( props ) => {
  const { onOpen, onClose} = useDisclosure();
  const [size, setSize] = React.useState('5xl')


  const handleClose = () => {
    onClose();
    props.toggleModal();
  }

  return (
    <>

      <Modal 
        size={size} 
        isOpen={props.isOpen} 
        onClose={handleClose} 
        backdrop="blur"
        className="next-ui-modal"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">{props.title}</ModalHeader>
              <ModalBody>
                <p> 
                  {props.description}
                </p>
                {props.children ? props.children : null}
              </ModalBody>
              <ModalFooter>

              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default NextUIModal;