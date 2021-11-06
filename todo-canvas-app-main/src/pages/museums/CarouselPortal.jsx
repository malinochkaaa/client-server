import React, {useState, memo} from "react";
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
import "./Tretyakovka.css";
const defaultImage = "https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-p2gfbv7qayyokn2iuybz9hr1rkhapcogpd9eywlyeq.png";
export const CarouselPortalContainer = (props) => {
    const [index, setIndex] = useState(1);
    const items = props.pictures == undefined ? [defaultImage, defaultImage] : props.pictures;
    let itemsComponents = items.map((item, i) => (
            <CarouselItem key={i}>
<<<<<<< HEAD
                <Card style={{ width: "12rem", height: "10rem", margin: "0.4rem",}}>
                    <CardBody>
                        <CardContent>
                            <div className="portal-img-t">
=======
                <Card style={{width: "auto"}}>
                    <CardBody>
                        <CardContent>
                            <div>
>>>>>>> parent of 50f8145 (update)
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

export default CarouselPortalContainer;