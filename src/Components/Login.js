import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogonOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>

                <Description>
                    Get Premier Access to the Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.00.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before{
        background:url("/images/login-background.jpg") center center / cover no-repeat fixed;
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
        opacity:0.7;
    }
`


const CTA = styled.div`
    max-width:650px;
    padding:80px 40px;
    width:90%;
    display:flex;
    flex-direction:column;
    margin-top:100px;
    align-items:center;
`

const CTALogonOne = styled.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    display:block;
    width:100%;
`

const SignUp = styled.a`
    width:100%;
    background-color:#0063e5;
    color:white;
    font-size:18px;
    padding:16.5px 0;
    border-radius:4px;
    text-align:center;
    font-weight:600;
    display:flex;
    justify-content:center;
    cursor:pointer;
    text-decoration:none;
    transition:all 250ms ease-in-out;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;

    &:hover{
        background-color:#0483ee;
    }
`


const Description = styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`


const CTALogoTwo = styled.img`
    max-width:600px;
    margin-bottom:20px;
    display:block;
    width:100%;
`