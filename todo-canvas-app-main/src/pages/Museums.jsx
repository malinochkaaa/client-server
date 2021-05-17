import React from "react";
import "./styles/Museums.css"
import styled from 'styled-components';
import { Container, Header, Image }  from '@sberdevices/plasma-ui';
import { Link } from "react-router-dom";
import { text, background, gradient, body1, headline1, footnote1 } from '@sberdevices/plasma-tokens';
import {
    Card,
    CardBody,
    CardContent,
    CardMedia,
    CardHeadline1, 
    Cell, 
    CellIcon, 
    IconPlaceholder, 
    TextBoxBiggerTitle, 
    TextBoxSubTitle, 
    TextBox, 
    TextBoxTitle, 
    CellDisclosure,
    Button
 } from '@sberdevices/plasma-ui';
 import { IconHeart } from '@sberdevices/plasma-icons';

const CardStyled = styled.div`
    padding-left: 60px;
`;
const DivStyled = styled.div`
    padding: 60px;
 `;

export const Museums = () => (
    <div>
        <div>
           <DivStyled>
                <Container>
                    <Header
                        title="Музеи"
                        subtitle="Список музеев Москвы"
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
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/7/75/Tretyakov_Manor%2C_2010_02x.jpg?uselang=ru" />
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

export default Museums;