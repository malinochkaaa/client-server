import React, {useState} from "react";
import "./styles/Museums.css"
import { IconHeartStroke, IconHeart } from '@sberdevices/plasma-icons';
import styled from 'styled-components';
import { Link} from "react-router-dom";
import {
    Card,
    CardContent,
    Cell, 
    TextBoxSubTitle, 
    TextBox, 
    TextBoxTitle,
    ActionButton,
    Image,
 } from '@sberdevices/plasma-ui';
 import {updateFavorites} from "../server/favoritesManager"
import { useEffect } from "react";
const CardStyled = styled.div`padding-left: 60px;`;
const NumStyled = styled
const CardContainer = (props) => {
    const [inFavorite, setFavorite] = useState(props.info.in_favourites); //TODO получать в избранном или нет из пропсов 
    useEffect(() => setFavorite(props.info.in_favourites), [props.info.in_favourites]);
    return(
        <div className="card-style">
            <CardStyled>
                <Card style={{ width: "50rem" }}>
                    <CardContent compact>
                    <TextBox style={{ fontSize: "16px", position: "absolute", top: "10px"}} title={props.ind}/>
                        <Cell
                            contentLeft={
                                <div className="img-style">
                                    <Image className="img-m" src={props.info.pictures} />
                                </div>
                            }
                            content={
                                <TextBox>
                                    <TextBoxTitle className="text-style">
                                        <Link to={{pathname: `${props.prefix}/museums/first`}} onClick={() => props.openMuseum(props.info.id)}>{props.info.name}</Link>
                                    </TextBoxTitle>
                                    <TextBoxSubTitle className="text-style">{props.info.address}</TextBoxSubTitle>
                                    <ActionButton
                                        onClick = {() => {updateFavorites(inFavorite, props.info.id); setFavorite(!inFavorite);}}
                                        size='l'
                                        view='primary'
                                        pin='square-square'
                                        contentLeft={inFavorite ? <IconHeart/> : <IconHeartStroke/>}
                                    >  
                                    </ActionButton>
                                </TextBox>
                            }
                        />
                    </CardContent>
                </Card>
            </CardStyled>
        </div>
    );
};

export default CardContainer;