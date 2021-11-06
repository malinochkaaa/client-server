import React from "react";
import "./styles/Menu.css"
import { Link } from "react-router-dom";
import { headline1, headline2 } from '@sberdevices/plasma-tokens';
import { MarkedList, MarkedItem}  from '@sberdevices/plasma-ui'
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Menu = (props) => {
    const prefix = props.prefix;
    const history = useHistory();
    useEffect(() => {
        if(props.nextPage !== -1){
            if(props.nextPage === 0)
                history.push(`${prefix}/museums`);
            else if(props.nextPage === 1)
                history.push(`${prefix}/fav`);
        }
    }, [props.nextPage]);
    window.currentURL = "/";
    return(
        <div className="menu-container">
            <h1 style={headline1}>Меню</h1>
            <MarkedList>
                <MarkedItem >
                    <h2 style={headline2}>
                        <Link to={`${prefix}/museums`}>Список музеев Москвы</Link>
                    </h2>
                </MarkedItem >
                <MarkedItem >
                    <h2 style={headline2}>
                        <Link to={`${prefix}/fav`}>Список избранных музеев</Link>
                    </h2>
                </MarkedItem >
            </MarkedList>
        </div>
    );
};

export default Menu;