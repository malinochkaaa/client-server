import React, {useState, memo} from "react";
// import "../styles/Carousel.css";
import { 
    CarouselGridWrapper,
    Carousel, 
    CarouselItem,
    stylingCallback, 
    stylingResetCallback, 
    Card, 
    CardBody, 
    CardContent, 
    Image, 
    Row,
    Container,
} from '@sberdevices/plasma-ui';
import {useMediaQuery} from '@react-hook/media-query';
// if(document.documentElement.clientWidth == 1280 && document.documentElement.clientHeight == 800) 
// return "portal";
// else if(document.documentElement.clientWidth == 1366 && document.documentElement.clientHeight == 768)
// return "box";
// else 
// return "phone";
const defaultImage = "https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-p2gfbv7qayyokn2iuybz9hr1rkhapcogpd9eywlyeq.png";

export const CarouselContainer = (props) => {
   //const isPortal = useMediaQuery('only screen and (width: 1280px) and (height: 800px)');
    //const isBox = useMediaQuery('only screen and (width: 1366px) and (height: 768px)');
    
    //<Card className={isPortal ? 'portal' : isBox ? 'box' : 'phone'}>

    const [index, setIndex] = useState(1);
    const items = props.pictures == undefined ? [defaultImage, defaultImage] : props.pictures;
    let itemsComponents = items.map((item, i) => (
            <CarouselItem key={i}>
                <Card style={{ width: "24.5rem", height: "19rem", margin: "0.4rem",}}>
                    <CardBody>
                        <CardContent>
                            <div className="img-t">
                                <Image title={`Item ${i}`} src={item} />
                            </div>
                        </CardContent>
                    </CardBody>
                </Card>
            </CarouselItem>
    ))
    return(
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
                {itemsComponents}
                </Carousel>
            </CarouselGridWrapper>
        </Container>
    )
}

export default CarouselContainer;