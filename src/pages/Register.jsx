import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
width: 100vw;
height: 100vh;
background-color: ${({theme}) => theme.colors.secondary};
display: flex;
align-items: center;
justify-content: center;

`
const Wrapper = styled.div`
width: 70%;
height: 80%;
display: flex;
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
`

const LoginLogo = styled.h3`
font-size: 50px;
font-weight: 800;
color: ${({theme}) => theme.colors.logo};
`

const LoginDesc = styled.span`
font-size: 24px;
`

const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;

`

const LoginBox = styled.div`
height: 500px;
padding: 20px;
background-color: white;
border-radius: 10px;
display: flex;
flex-direction:column;
justify-content: space-between;
`

const LoginInput = styled.input`
height: 50px;
border-radius: 10px;
border: 1px solid gray;
font-size: 18px;
padding-left: 20px;

&:focus {
    outline: none;
}
`

const LoginButton = styled.button`
height: 50px;
border-radius: 10px;
border: none;
background-color: ${({theme}) => theme.colors.logo};
color: white;
font-size: 20px;
font-weight: 500;
cursor: pointer;
`
const RegButton = styled.button`
width: 70%;
align-self: center;
height: 50px;
border-radius: 10px;
border: none;
background-color: limegreen;
color: white;
font-size: 20px;
font-weight: 500;
cursor: pointer;
`

const Register = () => {
    return (
        <Cont>
            <Wrapper>
                <Left>
                     <LoginLogo>UniQueers</LoginLogo>
                     <LoginDesc>Where all queers unite</LoginDesc>
                </Left>

                <Right>
                    <LoginBox>
                        <LoginInput type="text" placeholder="Username"/>
                        <LoginInput type="email" placeholder="Email"/>
                        <LoginInput type="password" placeholder="Password"/>
                        <LoginInput type="password" placeholder="Password Again"/>
                        <LoginButton>Sign Up</LoginButton>
                        <RegButton>Log into Account</RegButton>
                      
                    </LoginBox>
                </Right>
            </Wrapper>
        </Cont>
    )
}

export default Register

