import React, {useState, useEffect} from "react";
import "./styles/Museums.css"
import CardContainer from "./Card.jsx";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import {
    Container,
    Header,
 } from '@sberdevices/plasma-ui';

import {showAllMuseums} from "../server/API_helper";

const DivStyled = styled.div`
    padding: 60px;

 `;

function openMuseum(id, cards, history) {
    let ind = id - 1;
    if(ind < 0 || ind > cards.length || history.location.pathname === "/museums/first") return;
    history.push({pathname: "/museums/first", num: cards[ind].id});
}

export const Museums = (props) => {
    const load = () => {showAllMuseums().then(res => setCards(res.data))}
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
                        title="Музеи"
                        subtitle="Список музеев Москвы"
                        onClick={() => {
                            history.goBack();
                        }}
                    >
                    </Header>
                </Container>
            </DivStyled>
        </div>
        <div>
            {cards===[]?<div></div> : cards.map((e) => (<CardContainer key={e.id} info={e} />))}
        </div>
    </div>
    );
};

export default Museums;