"use client";
import React from 'react'
import { useState } from 'react';
import ChangePasswordModal from '@/components/ChangePassModal/changePassModal';
import useDisclosure from '../hook/useDisclosure';

function ChangePassPage() {
    const [showModal, setShowModal] = useState(false);
    const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
    <button  onClick={onOpen}   className=' justify-center items-center'> Open Modal</button>
     <ChangePasswordModal isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default ChangePassPage