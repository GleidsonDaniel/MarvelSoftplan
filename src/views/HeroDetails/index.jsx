import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image, Button, Form } from 'react-bootstrap';

import { setEditedHero } from '../../store/actions';

import EditHeroModal from '../../components/EditHeroModal';
import RenderSeries from '../../components/RenderSeries';

const HeroDetails = ({ app: { selectedHero }, setEditedHeroAction }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="hero_details">
      <div className="header_top_edit">
        <Button onClick={() => setModalShow(true)}>Editar</Button>
      </div>
      <EditHeroModal
        handleSubmit={editedHero => {
          setModalShow(false);
          setEditedHeroAction(editedHero, selectedHero);
        }}
        selectedHero={selectedHero}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Image
        className="hero_details_image"
        rounded
        src={`${selectedHero.thumbnail.path}.${selectedHero.thumbnail.extension}`}
      />
      <h2 className="hero_details_header">{selectedHero.name}</h2>
      <Form.Label>Descrição</Form.Label>
      <div className="hero_description">
        <p className="hero_description_text">
          {selectedHero.description || 'Descrição indisponivel'}
        </p>
      </div>
      <Form.Label>Series</Form.Label>
      <div className="hero_caroussel">
        <RenderSeries series={selectedHero.series} />
      </div>
    </div>
  );
};

const mapDispatchToProps = { setEditedHeroAction: setEditedHero };

const mapStateToProps = state => ({
  app: state.app,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HeroDetails),
);
