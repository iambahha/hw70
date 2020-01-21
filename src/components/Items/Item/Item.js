import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({name, id, onClick}) => (
    <Fragment>
    <NavLink to={'/shows/' + id} onClick={onClick}>{name}</NavLink>
    <br></br>
    </Fragment>
);

export default Item;