import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import "./styles/Museums.css"
import { Container, Header, Image }  from '@sberdevices/plasma-ui';
import { Link, useHistory } from "react-router-dom";
import CardContainer from "./Card.jsx";
import {showFavorites} from "../server/API_helper"

const DivStyled = styled.div`
    padding: 60px;
 `;

 const CardStyled = styled.div`
 padding-left: 60px;
`;

function openMuseum(id, cards, history) {
    let ind = id - 1;
    if(ind < 0 || ind > cards.length || history.location.pathname === "/fav/first") return;
    history.push({pathname: "/fav/first", num: cards[ind].id});
}

export const Favorites = (props) => {
    const load = () => {showFavorites().then(res => setCards(res.data))}
    const [isLoaded, setIsLoaded] = useState(false);
    const [cards, setCards] = useState([]);
    useEffect(() => setIsLoaded(true), [cards]);
    useEffect(() => {if(!isLoaded) load()})
    const history = useHistory();
    openMuseum(props.openId, cards, history);
    window.currentURL = history.location.pathname;
    return(
    <div>
        <div>
        <DivStyled>
            <Container>
                <Header
                    back={true}
                    title="Избранное"
                    subtitle="Список избранных музеев"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                </Header>
            </Container>
        </DivStyled>
        </div>
        <div className="card-style">
            {cards===[]?<div></div> : cards.map((e) => (<CardContainer key={e.id} info={e} />))}
        </div>
    </div>
    );
};
export default Favorites;