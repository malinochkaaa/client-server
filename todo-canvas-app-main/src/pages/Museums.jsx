import React, {useState} from "react";
import "./styles/Museums.css"
import styled from 'styled-components';
import { IconHeartStroke, IconHeart } from '@sberdevices/plasma-icons';
import { Link, useHistory } from "react-router-dom";
import {
    Card,
    CardContent,
    Cell, 
    TextBoxSubTitle, 
    TextBox, 
    TextBoxTitle,
    ActionButton,
    Container,
    Header,
    Image,
 } from '@sberdevices/plasma-ui';
import { showAllMuseums } from "../server/API_helper";

const CardStyled = styled.div`
    padding-left: 60px;
`;
const DivStyled = styled.div`
    padding: 60px;
 `;

export const Museums = () => {
    const history = useHistory();
    const [inFavorite, setFavorite] = useState(false);
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
        <div className="card-style">
            <CardStyled>
                <Card style={{ width: "50rem" }}>
                    <CardContent compact>
                        <Cell
                            contentLeft={
                                <div className="img-style">
                                    <Image className="img-m" src="https://res.cloudinary.com/museums/image/upload/c_fill,h_768,q_100,w_1024/1_1_darvin_museum.jpg" />
                                </div>
                            }
                            content={
                                <TextBox>
                                    <TextBoxTitle className="text-style"><Link to={ {pathname:"/museums/first", data: "alina"} }>Третьяковская галерея в Лаврушинском переулке</Link></TextBoxTitle>
                                    <TextBoxSubTitle className="text-style">Лаврушинский переулок, 10</TextBoxSubTitle>
                                    <ActionButton
                                        onClick = {() => setFavorite(!inFavorite)}
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
    </div>
    );
};

export default Museums;