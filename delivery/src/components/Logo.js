import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    max-width: 208px;
    max-height: 64px;
    margin-top: 50px;
    color: #fff;
    margin-left: 40px;
`;

const Logo = ({ img }) => <Image src={img} />;

export default Logo;
