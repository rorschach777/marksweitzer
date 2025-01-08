
"use client";

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

const NextUIModal = ( props ) => {
  const { onClose} = useDisclosure();

  const handleClose = () => {
    onClose();
    props.toggleModal();
  }

  return (
    <>

      <Modal 
        size={'5xl'} 
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