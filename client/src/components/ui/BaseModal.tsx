import React from 'react'
import  Modal from "@mui/material/Modal" 
import Box from '@mui/material/Box';

type BaseModalType = {
    children: JSX.Element;
    onClose: () => void;
    open: boolean
}

const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

export default function BaseModal({children, onClose, open}: BaseModalType): JSX.Element {
  return (
    <Modal
    open={open}
    onClose={onClose}
    aria-labelledby='modal-modal-title'
    aria-describedby='modal-modal-description'

    >
        <Box sx={modalStyle}>
        {children}
        </Box>
    </Modal>
  )
}
