import React from 'react';
import { Modal, Button, Form as BtForm } from 'react-bootstrap';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validation = yup.object().shape({
  name: yup.string().required(),
});

const EditHeroModal = ({ onHide, show, selectedHero, handleSubmit }) => (
  <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton onClick={onHide}>
      <Modal.Title id="contained-modal-title-vcenter">Edite o personagem</Modal.Title>
    </Modal.Header>
    <Formik initialValues={selectedHero} onSubmit={handleSubmit} validationSchema={validation}>
      <Form>
        <Modal.Body>
          <BtForm.Label>Nome</BtForm.Label>
          <Field className="form-control" name="name" placeholder="Digite um nome para o heroi" />
          <ErrorMessage
            component="span"
            name="name"
            render={() => (
              <div>
                <p className="form_error">O nome do heroi não pode ficar vazio</p>
              </div>
            )}
          />
          <BtForm.Label>Descrição</BtForm.Label>
          <Field
            component="textarea"
            className="form-control"
            name="description"
            placeholder="Digite uma descrição para o heroi"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Salvar</Button>
        </Modal.Footer>
      </Form>
    </Formik>
  </Modal>
);

export default EditHeroModal;
