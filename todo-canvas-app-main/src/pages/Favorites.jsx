import React from "react";
import styled from 'styled-components';
import { Container, Header }  from '@sberdevices/plasma-ui';
import { text, background, gradient, body1 } from '@sberdevices/plasma-tokens';

// const AppStyled = styled.div`
//     padding: 60px;
//     ${body1}
//     color: ${text};
//     background-color: ${background};
//     background-image: ${gradient};
// `;

export const Favorites = () => (
    <div>
    <Container>
        <Header
            title="Избранное"
            subtitle="Subtitle text"
        >
        </Header>
    </Container>
    </div>
);
export default Favorites;