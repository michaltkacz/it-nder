import React from 'react';

import { Modal } from 'react-bootstrap';

import { database } from '../../firebase';

import NoticeWizard from './NoticeWizard';

const NoticeEditModal = ({ notice, displayModal, closeModal }) => {
  const updateInDatabase = (notice) => {
    const noticesRef = database.ref('notices').child(notice.id);
    noticesRef.update(notice);
    closeModal();
  };

  return (
    <Modal
      show={displayModal}
      size='lg'
      centered
      onHide={(e) => {
        closeModal(e);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Edit notice
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NoticeWizard submitNotice={updateInDatabase} noticeToEdit={notice} />
      </Modal.Body>
    </Modal>
  );
};

export default NoticeEditModal;
