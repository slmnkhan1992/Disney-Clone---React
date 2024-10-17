import React from 'react'
import styled from 'styled-components'
import { selectUserName, selectUserPhoto,setUserLogin,setSignOut } from '../features/user/UserSlice'
import { useSelector, useDispatch } from 'react-redux'
import { signInWithGoogle, signOutUser  } from '../Firebase';
import {useNavigate} from 'react-router-dom'

const Header = () => {

    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
          const user = await signInWithGoogle();
          console.log("Logged in user: ", user);
          console.log("User name: ", user.displayName);
          // You can dispatch an action to store the user details in Redux or Context API
          dispatch(setUserLogin({ name: user.displayName, email: user.email, photo: user.photoURL }));
          navigate("/");
        } catch (error) {
          console.error("Google Sign-In Error:", error);
        }

      };

      const signOut = async () => {
        try {
            await signOutUser(); 
            dispatch(setSignOut()); 
            navigate("/login");
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };


    return (
        <Nav>
            <Logo src="/images/logo.svg" alt="" />
            {
                !userName ? (
                    <LoginConatiner>
                        <Login onClick={handleSignIn} >Login</Login>
                    </LoginConatiner>
                ) : (
                    <>
                        <NavMenu>
                            <a>
                                <img src="/images/home-icon.svg" alt="" />
                                <span>HOME</span>   

                            </a>
                            <a>
                                <img src="/images/search-icon.svg" alt="" />
                                <span>SEARCH</span>

                            </a>
                            <a>
                                <img src="/images/watchlist-icon.svg" alt="" />
                                <span>WATCHLIST</span>

                            </a>
                            <a>
                                <img src="/images/original-icon.svg" alt="" />
                                <span>ORIGINAL</span>

                            </a>
                            <a>
                                <img src="/images/movie-icon.svg" />
                                <span>MOVIES</span>

                            </a>
                            <a>
                                <img src="/images/series-icon.svg" alt="" />
                                <span>SERIES</span>

                            </a>

                        </NavMenu>

                        <UserImg onClick={signOut} src={userPhoto} alt="" />
                    </>
                )
            }

            {/* <NavMenu>

                <a>
                    <img src="/images/home-icon.svg" alt="" />
                    <span>HOME</span>

                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>

                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>

                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINAL</span>

                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>

                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>

                </a>

            </NavMenu>

            <UserImg src="/images/mypic.png" alt="" /> */}


        </Nav>
    )
}

export default Header


const Nav = styled.nav`
    height:70px;
    background-color: #090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
    position:sticky;
    top:0;
    z-index:100;


`

const Logo = styled.img`
    width:80px;
`

const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;


    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;

        img{
            height:20px;
        }

        span{
            font-size:13px;
            letter-spacing: 1.42px;
            position:relative;

            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity:1;
            }
        }
    }

`


const UserImg = styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;
    overflow-x:hidden;
`

const Login = styled.a`
    background-color:rgba(0,0,0,0.6);
    padding:8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border:1px solid #f9f9f9;
    border-radius:4px;
    transition: all 0.2s ease 0s;
    cursor:pointer;

    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
    }   

`

const LoginConatiner = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
`