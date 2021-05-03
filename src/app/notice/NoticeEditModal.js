import React from 'react';

import { Button, Modal } from 'react-bootstrap';

import NoticeWizard from './NoticeWizard';

const NoticeEditModal = ({ notice, displayModal, closeModal, dbCrud }) => {
  const submitNotice = (notice) => {
    dbCrud.dbPut(notice);
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
        <NoticeWizard submitNotice={submitNotice} noticeToEdit={notice} />
      </Modal.Body>
    </Modal>
  );
};

export default NoticeEditModal;
