import React, {useState} from "react";
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

const items = [
    { 
        title: 'Item 1', 
        src: "https://res.cloudinary.com/museums/image/upload/c_fill,h_768,q_100,w_1024/1_1_darvin_museum.jpg", 
    }, 
    { 
        title: 'Item 2', 
        src: "https://res.cloudinary.com/museums/image/upload/c_fill,h_768,q_100,w_1024/1_2_darvin_museum.jpg",
    }, 
    { 
        title: 'Item 3', 
        src: "https://res.cloudinary.com/museums/image/upload/c_fill,h_768,q_100,w_1024/1_3_darvin_museum.jpg", 
    }, 
    { 
        title: 'Item 4', 
        src: "https://res.cloudinary.com/museums/image/upload/c_fill,h_768,q_100,w_1024/1_4_darvin_museum.jpg", 
    }, 
    { 
        title: 'Item 5', 
        src: "https://res.cloudinary.com/museums/image/upload/c_fill,h_768,q_100,w_1024/1_5_darvin_museum.jpg", 
    }
];

export const CarouselContainer = () => {
    const [index, setIndex] = useState(1);
    //https://res.cloudinary.com/museums/image/upload/c_fill,h_768,q_100,w_1024/1_1_darvin_museum.jpg
    let itemsComponents = items.map((item, i) => (
            <CarouselItem key={i}>
                <Card style={{ width: "24.5rem", height: "19rem", margin: "0.4rem",}}>
                    <CardBody>
                        <CardContent>
                            <div className="img-t">
                                <Image title={item.title} src={item.src} />
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