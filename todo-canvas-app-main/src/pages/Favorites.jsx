import React from "react";
import styled from 'styled-components';
import "./styles/Museums.css"
import { Container, Header, Image }  from '@sberdevices/plasma-ui';
import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    Cell, 
    TextBoxSubTitle, 
    TextBox, 
    TextBoxTitle
 } from '@sberdevices/plasma-ui';

const DivStyled = styled.div`
    padding: 60px;
 `;

 const CardStyled = styled.div`
 padding-left: 60px;
`;
export const Favorites = () => (
    <div>
        <div>
        <DivStyled>
            <Container>
                <Header
                    title="Избранное"
                    subtitle="Список избранных музеев"
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
                                    <Image  className="img-m" src="https://res.cloudinary.com/museums/image/upload/c_fill,h_768,q_100,w_1024/1_1_darvin_museum.jpg" />
                                </div>
                            }
                            content={
                                <TextBox>
                                    <TextBoxTitle><Link to="/museums/first">Третьяковская галерея в Лаврушинском переулке</Link></TextBoxTitle>
                                    <TextBoxSubTitle>Лаврушинский переулок, 10</TextBoxSubTitle>
                                </TextBox>
                            }
                        />
                    </CardContent>
                </Card>
            </CardStyled>
        </div>
    </div>
    
);
export default Favorites;