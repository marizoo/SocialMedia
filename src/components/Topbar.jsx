import { Chat, Person, Search, Notifications } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
height: 50px;
width: 100%;
background-color: ${({theme}) => theme.colors.primary};
display: flex;
align-items: center;
position: sticky;
top: 0;
z-index: 999;
`

const Left = styled.div`
flex: 3;
`

const Logo = styled.span`
font-size: 24px;
margin-left: 20px;
font-weight: bold;
color: white;
cursor: pointer;
`
    
const Center = styled.div`
flex: 5;
`

const SearchBar = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 30px;
background-color: white;
border-radius: 30px;
padding-left: 10px;
`


const SearchInput = styled.input`
border: none;
width: 70%;
&:focus {
    outline: none;
}
`

const Right = styled.div`
flex: 4;
display: flex;
align-items: center;
justify-content: space-around;
color: white;
`

const Links = styled.div`
`

const LinkItems = styled.span`
margin-right: 10px;
font-size: 14px;
cursor: pointer;
`

const Icons = styled.div`
display: flex;
`

const IconItem = styled.div`
display: flex;
margin-right: 15px;
cursor: pointer;
position: relative;
`

const IconBadge = styled.span`
width: 15px;
height: 15px;
background-color: red;
border-radius: 50%;
color: white;
position: absolute;
top: -5px;
right: -5px;
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
`

const Image = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
object-fit: cover;
cursor: pointer;
`

const Topbar = () => {
    return (
        <Cont>
            <Left>
                <Logo>UniQueers</Logo>
            </Left>

            <Center>
                <SearchBar>
                        <Search style={{fontSize: "20px"}}/>
                    <SearchInput placeholder="Search for friends, posts or videos"/>
                   
                </SearchBar>
            </Center>

            <Right>
                <Links>
                    <LinkItems>Homepage</LinkItems>
                    <LinkItems>Timeline</LinkItems>
                </Links>
                <Icons>
                    <IconItem>
                        <Person/>
                        <IconBadge>1</IconBadge>
                    </IconItem>
                    <IconItem>
                        <Chat/>
                        <IconBadge>2</IconBadge>
                    </IconItem>
               
                    <IconItem>
                        <Notifications/>
                        <IconBadge>4</IconBadge>
                    </IconItem>
                </Icons>
                <Image src="/assets/person/1.jpeg" alt="profile picture"/>

               
            </Right>

        </Cont>
    )
}

export default Topbar
