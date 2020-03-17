import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

const Card = (props) => (
    <div className={`card-item card-xs-${props.xs}`}>
        <div className="card-body">
            {props.children}
        </div>
    </div>
);

Card.propTypes = {
    xs: PropTypes.number,
}

export default Card;