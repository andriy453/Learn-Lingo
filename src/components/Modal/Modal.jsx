import { createPortal } from 'react-dom';
import { Backdrop } from './Modal.styled';
import { useEffect, useLayoutEffect } from 'react';

function Modal({ children, onClose }) {
  useEffect(() => {
    return window.addEventListener('keydown', keyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    return () => {
      window.removeEventListener('keydown', keyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const keyDown = (e) => {
    if (e.code === 'Escape') {
      onClose(false);
    }
  };

  const onOverlayClose = (e) => {
    if (e.currentTarget === e.target) {
      onClose(false);
    }
  };
  return createPortal(
    <Backdrop onClick={onOverlayClose}>{children}</Backdrop>,
    document.getElementById('modal-root')
  );
}

export default Modal;
