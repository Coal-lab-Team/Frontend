"use client";
import React from 'react'
import { useState } from 'react';
import ChangePasswordModal from '@/components/ChangePassModal/changePassModal';

function ChangePassPage() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  return (
    <>
    <button  onClick={openModal}   className=' justify-center items-center'> Open Modal</button>
    { showModal && <ChangePasswordModal onClose={closeModal}/>}
    </>
  )
}

export default ChangePassPage