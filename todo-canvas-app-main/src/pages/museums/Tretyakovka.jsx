import React, {useState} from "react";
import "./Tretyakovka.css";
import CarouselContainer from "./Carousel.jsx";
import { useHistory } from "react-router-dom";
import { 
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaVk,
    FaSubway,
    FaClock,
    FaPhoneAlt,
    FaLink,
    FaMapMarkedAlt,
    FaMoneyBillAlt,
 } from "react-icons/fa";
import { Button, ActionButton} from '@sberdevices/plasma-ui';
import { IconHeartStroke, IconHeart, IconChevronLeft } from '@sberdevices/plasma-icons';
import { headline1, headline3, paragraph1 } from '@sberdevices/plasma-tokens';


export const Tretyakovka = (props) => {
    const history = useHistory();
    const [inFavorite, setFavorite] = useState(false);
    return(
        <div>
            <div className="name-container">
                <ActionButton
                    back={true}
                    size='l'
                    view='clear'
                    pin='square-square'
                    contentLeft={<IconChevronLeft/>}
                    onClick={() => {
                        history.goBack();
                    }}
                >  
                </ActionButton>
                <h1 style={headline1}>{props.location.data}</h1>
                <p style={paragraph1} className="block-style">Московский музей, посвящённый дарвинской теории эволюции. Инициатором создания стал биолог Александр Котс, начавший свою преподавательскую карьеру при Московских высших женских курсах в 1907-м. Этот же год считается и датой основания музея - учёный перенёс свою коллекцию редких чучел животных в здание курсов в Мерзляковском переулке. После революции 1917 года Дарвиновский музей стал самостоятельным учреждением. В 1994-м правительство Москвы выделило под нужды музея здание на улице Вавилова. По состоянию на 2018 год в состав экспозиции входят 400 000 предметов.</p>
                <div className="div-style"> 
                    <CarouselContainer />
                </div>
                <div className="align-right">
                    <Button
                        onClick = {() => setFavorite(!inFavorite)}
                        text='Избранное'
                        size='l'
                        view='primary'
                        contentLeft={inFavorite ? <IconHeart/> : <IconHeartStroke/>}
                    >  
                    </Button>
                </div>
                <div className="div-style">
                    <FaMapMarkedAlt className="small-icon"/>
                    <h3 style={headline3}> Адрес: </h3>
                    <p style={paragraph1}>ул. Вавилова, 57</p>
                </div>
                <div className="div-style">
                    <FaPhoneAlt className="small-icon"/>
                    <h3 style={headline3}> Телефон: </h3>
                    <p style={paragraph1}>+7 (499) 132-10-47</p>
                </div>
                <div className="div-style">
                    <FaLink className="small-icon"/>
                    <h3 style={headline3}> Сайт: </h3>
                    <a href="https://www.w3schools.com/cssref/css3_pr_align-content.asp" className="inline-style"><p style={paragraph1}>darwinmuseum.ru</p></a>
                </div>
                <div className="div-style">
                    <FaClock className="small-icon"/>
                    <h3 style={headline3}> Время работы:</h3>
                    <div>
                        <p style={paragraph1}>Понедельник: </p>
                        <p style={paragraph1}>Выходной</p>
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
                    <div>
                        <p style={paragraph1}>Воскресенье: </p>
                        <p style={paragraph1}>10:00 - 18:00</p>
                    </div>
                </div>
                <div className="div-style">
                    <FaSubway className="small-icon"/>
                    <h3 style={headline3}> Станция метро: </h3>
                    <p style={paragraph1}>Академическая </p>
                    <p style={paragraph1}>(900 м.)</p>
                    <p style={paragraph1}>, </p>
                    <p style={paragraph1}>Академическая </p>
                    <p style={paragraph1}>(1000 м.)</p>
                </div>
                <div className="div-style">
                <FaMoneyBillAlt className="small-icon"/>
                    <h3 style={headline3}> Стоимость билетов: </h3>
                    <p style={paragraph1}>150 - 400 р.</p>
                </div>
                <div>
                    <a href="https://www.w3schools.com/cssref/css3_pr_align-content.asp" className="inline-style"><FaInstagram className="icon-with-link"/></a>
                    <FaFacebookF className="icon-with-link"/>
                    <FaTwitter className="icon-no-link"/>
                    <FaVk className="icon-no-link"/>
                </div>
               
            </div>
        </div>
    );
};

export default Tretyakovka;