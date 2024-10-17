import React, { useState } from 'react';
import styled from 'styled-components';

const Viewers = () => {
    return (
        <Container>
            {viewersData.map((viewer, index) => (
                <Wrap key={index}>
                    <Video
                        src={viewer.videoSrc}
                        muted
                        loop
                    />
                    <img src={viewer.imgSrc} />
                </Wrap>
            ))}
        </Container>
    );
};

const viewersData = [
    { imgSrc: '/images/viewers-disney.png', videoSrc: '/videos/1564674844-disney.mp4' },
    { imgSrc: '/images/viewers-pixar.png', videoSrc: '/videos/1564676714-pixar.mp4' },
    { imgSrc: '/images/viewers-marvel.png', videoSrc: '/videos/1564676115-marvel.mp4' },
    { imgSrc: '/images/viewers-starwars.png', videoSrc: '/videos/1608229455-star-wars.mp4' },
    { imgSrc: '/images/viewers-national.png', videoSrc: '/videos/1564676296-national-geographic.mp4' },
];

export default Viewers;

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    padding: 30px 0px 26px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
    position: relative;
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }

    &:hover video {
        display: block;
        
    }
`;

const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    display: none;


    ${Wrap}:hover & {
        display: block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        animation: rotate 0.6s linear infinite;
    }
`;