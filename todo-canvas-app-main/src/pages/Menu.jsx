import React from "react";
import "./styles/Menu.css"
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { headline1, headline2 } from '@sberdevices/plasma-tokens';
import { MarkedList, MarkedItem}  from '@sberdevices/plasma-ui'
import { text, background, gradient, body1 } from '@sberdevices/plasma-tokens';

// const AppStyled = styled.div`
//     padding-top: 190px;
//     padding-bottom: 430px;
//     padding-left: 200px;
//     padding-right: 170px;
//     ${body1}
//     color: ${text};
//     background-color: ${background};
//     background-image: ${gradient};
// `;

const Menu = () => {
    return(
        <div className="menu-container">
            <h1 style={headline1}>Меню</h1>
            <MarkedList>
                <MarkedItem >
                    <h2 style={headline2}>
                        <Link to="/museums">Список музеев Москвы</Link>
                    </h2>
                </MarkedItem >
                <MarkedItem >
                    <h2 style={headline2}>
                        <Link to="/fav">Список избранных музеев</Link>
                    </h2>
                </MarkedItem >
            </MarkedList>
        </div>
    );
};

export default Menu;