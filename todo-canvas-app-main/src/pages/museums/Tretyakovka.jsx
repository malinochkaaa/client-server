import React, {useState} from "react";
import "./Tretyakovka.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import styled from 'styled-components';
import { Row, Container } from "@sberdevices/plasma-ui";
import { CarouselGridWrapper, Carousel, CarouselCol, stylingCallback, stylingResetCallback} from '@sberdevices/plasma-ui';
import { headline1, headline3, paragraph1 } from '@sberdevices/plasma-tokens';

const items = [{ title: 'Item 1' }, { title: 'Item 2' }, { title: 'Item 3' }, { title: 'Item 4' }];

export const Tretyakovka = () => {
    const [index, setIndex] = useState(1);

    return(
        <div>
            <div className="name-container">
                <h1 style={headline1}>Дарвиновский музей</h1>
                <p style={paragraph1} className="block-style">Московский музей, посвящённый дарвинской теории эволюции. Инициатором создания стал биолог Александр Котс, начавший свою преподавательскую карьеру при Московских высших женских курсах в 1907-м. Этот же год считается и датой основания музея - учёный перенёс свою коллекцию редких чучел животных в здание курсов в Мерзляковском переулке. После революции 1917 года Дарвиновский музей стал самостоятельным учреждением. В 1994-м правительство Москвы выделило под нужды музея здание на улице Вавилова. По состоянию на 2018 год в состав экспозиции входят 400 000 предметов.</p>
                <div className="div-style"> 
                    <Container>
                        <CarouselGridWrapper>
                            <Carousel
                            as={Row}
                            axis="x"
                            index={index}
                            scrollSnapType="mandatory"
                            detectActive
                            detectThreshold={0.5}
                            stylingCallback={stylingCallback}
                            stylingResetCallback={stylingResetCallback}
                            onIndexChange={(i) => setIndex(i)}
                            paddingStart="50%"
                            paddingEnd="50%"
                        >
                            {items.map(({ title }, i) => (
                                <CarouselCol key={`item:${i}`}>{title}</CarouselCol>
                            ))}
                            </Carousel>
                        </CarouselGridWrapper>
                    </Container>
                </div>
                <div className="div-style">
                    <h3 style={headline3}>Адрес: </h3>
                    <p style={paragraph1}>ул. Вавилова, 57</p>
                </div>
                <div className="div-style">
                    <h3 style={headline3}>Телефон: </h3>
                    <p style={paragraph1}>+7 (499) 132-10-47</p>
                </div>
                <div className="div-style">
                    <h3 style={headline3}>Сайт: </h3>
                    <p style={paragraph1}>darwinmuseum.ru</p>
                </div>
                <div className="div-style">
                    <h3 style={headline3}>Время работы:</h3>
                    <div>
                        <p style={paragraph1}>Выходной</p>
                    </div>
                    <div>
                        <p style={paragraph1}>Понедельник: </p>
                        <p style={paragraph1}>10:00 - 18:00</p>
                    </div>
                    <div>
                        <p style={paragraph1}>Вторник: </p>
                        <p style={paragraph1}>10:00 - 18:00</p>
                    </div>
                    <div>
                        <p style={paragraph1}>Среда: </p>
                        <p style={paragraph1}>10:00 - 21:00</p>
                    </div>
                    <div>
                        <p style={paragraph1}>Четверг: </p>
                        <p style={paragraph1}>10:00 - 18:00</p>
                    </div>
                    <div>
                        <p style={paragraph1}>Пятница: </p>
                        <p style={paragraph1}>10:00 - 18:00</p>
                    </div>
                    <div>
                        <p style={paragraph1}>Суббота: </p>
                        <p style={paragraph1}>10:00 - 18:00</p>
                    </div>
                </div>
                <div className="div-style">
                    <h3 style={headline3}>Расстояние от метро: </h3>
                    <p style={paragraph1}>900 м.</p>
                </div>
                <div className="div-style">
                    <h3 style={headline3}>Станция метро: </h3>
                    <p style={paragraph1}>Академическая</p>
                </div>
                <div className="div-style">
                    <h3 style={headline3}>Стоимость билетов: </h3>
                    <p style={paragraph1}>150 - 400 р.</p>
                </div>
                <div>
                    <a href="https://res.cloudinary.com/museums/image/upload/c_fill,h_1200,q_100,w_1600/v1621283077/test/Tretyakovka_2.jpg" className="inline-style"><FaInstagram className="icon-with-link"/></a>
                    <FaFacebookF className="icon-with-link"/>
                    <FaTwitter className="icon-no-link"/>
                    <FaVk className="icon-no-link"/>
                </div>
            </div>
        </div>
    );
};

export default Tretyakovka;