import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import myContext from './context/MovieContext'

const Detail = () => {
    const { id } = useParams()
    const { data } = useContext(myContext)
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const movie = data.find((movie) => movie.id === parseInt(id))
        console.log(movie)
        setMovie(movie)
        console.log(movie)
    }, [])


    return (
        <Container>
            <Background>
                <img src={movie.poster} alt="overview" />

            </Background>
            <ImageTitle>
                <img src="https://pngimg.com/d/walt_disney_PNG3.png" alt="overview" />
            </ImageTitle>

            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' />
                    <span>PLAY</span>

                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png' />
                    <span>Trailer</span>

                </TrailerButton>
                <AddButton>
                    <span>+</span>

                </AddButton>
                <GroupWatchButton>
                    <img src='/images/group-icon.png' />

                </GroupWatchButton>
            </Controls>

            <SubTitle>{movie.releaseYear} | {movie.duration} | {movie.title}</SubTitle>
            <Description>
                {movie.description}
            </Description>


        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
`

const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

`
const ImageTitle = styled.div`
    height:30vh;
    min-height:170px;
    width:35vw;
    min-width:200px;
    margin-top:60px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`


const Controls = styled.div`

    display:flex;
    align-items:center;


`

const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    padding:0px 24px;
    margin-right:22px;
    display:flex;
    align-items:center;
    height:56px;
    background:rgb(249,249,249);
    border:none;
    cursor:pointer;
    letter-spacing:1.8px;


    &:hover{
        background:rgb(198,198,198);
    }


`

const TrailerButton = styled(PlayButton)`
    background:rgba(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    text-transform:uppercase;
    margin-right:16px;


`

const AddButton = styled.button`
    margin-right:16px;
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
    span{
        font-size:30px;
        color:white;
    }


`

const GroupWatchButton = styled(AddButton)`
    background:rgb(0,0,0)

`

const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;    

`

const Description = styled.div`
    margin-top:16px;
    line-height: 1.4;
    font-size: 20px;
    color:rgb(249,249,249);
    max-width: 760px;
`