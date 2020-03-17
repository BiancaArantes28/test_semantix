import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to="/page1">
                            <FontAwesomeIcon icon={faPager} /> <br />
                            <small>Page 1</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/page2">
                            <FontAwesomeIcon icon={faPager} /> <br />
                            <small>Page 2</small>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
);

export default Header;