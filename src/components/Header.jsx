import React from 'react';
import { Navbar, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import { FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';

import { logo } from '../assets';
import { setHeroSearch, selectHero } from '../store/actions';

const Header = ({
  history: { push },
  app: { searchHeroes, heroSearch },
  setHeroSearchAction,
  selectHeroAction,
}) => {
  const renderIcon = () => <FaSearch className="search_drop" />;
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="menu_links" onClick={() => push('/')}>
          <img className="logo" alt="Logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="header_top" inline>
            <div style={{ width: 200 }}>
              <Select
                onInputChange={i => {
                  i && setHeroSearchAction(i);
                }}
                onChange={i => {
                  selectHeroAction(i, push);
                  setHeroSearchAction('');
                }}
                onFocus={() => setHeroSearchAction('')}
                getOptionLabel={option => option.name}
                getOptionValue={option => option.id}
                value={heroSearch}
                components={{ DropdownIndicator: renderIcon }}
                options={searchHeroes}
                placeholder="Digite o nome"
                noOptionsMessage={() => 'Heroi não encontrado'}
              />
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Navbar className="header_bottom" fixed="bottom" bg="dark" variant="dark">
        <p className="text_header_bottom">Data provided by Marvel. © 2014 Marvel</p>
      </Navbar>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  setHeroSearchAction: setHeroSearch,
  selectHeroAction: selectHero,
};

const mapStateToProps = state => ({
  app: state.app,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Header),
);
