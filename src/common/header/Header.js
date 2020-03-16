import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPager } from '@fortawesome/free-solid-svg-icons'

import './header.css';

const Header = () => (
    <header>
        <div className="sideNav">
            <div className="title">
                <span>Semantix</span>
            </div>
            <div className="nav">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faPager} /> <br/>
                        <small>Page 1</small>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPager} /> <br/>
                        <small>Page 2</small>
                    </li>
                </ul>
            </div>
        </div>
    </header>
);

export default Header;