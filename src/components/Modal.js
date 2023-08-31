import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.img`
  max-width: 70%;
  max-height: 70%;
  border-radius: var(--border-radius-primary);
  box-shadow: var(--box-shadow-grid-column);
`;

const Modal = ({ src, alt, onClose }) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalContent src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </ModalBackground>
  );
};

export default Modal;
