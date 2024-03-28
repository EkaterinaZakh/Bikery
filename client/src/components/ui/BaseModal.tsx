import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

type BaseModalType = {
  children: JSX.Element;
  onClose: () => void;
  open: boolean;
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // background: 'rgba(255, 255, 255, 0.9)'
};

export default function BaseModal({ children, onClose, open }: BaseModalType): JSX.Element {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>{children}</Box>
    </Modal>
  );
}
