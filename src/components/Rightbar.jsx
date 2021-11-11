import React from 'react'
import styled from 'styled-components'
import { Users } from '../dummyData'
import Online from './Online'

const Cont = styled.div`
flex: 3.5;
`
const Wrapper = styled.div`
padding: 20px 20px 0 0;
`
const BdayCont = styled.div`
display: flex;
align-items: center;
`

const BdayImg = styled.img`
width: 40px;
height: 40px;
margin-right: 10px;
`

const BdayText = styled.span`
font-weight: 300;
font-size: 15px;
`

const AdImg = styled.img`
width: 100%;
border-radius: 10px;
margin: 30px 0 ;
`

const RightBarTitle = styled.h4`
margin-bottom: 20px;
`

const OlFriendsList = styled.ul`
padding: 0;
margin: 0;
list-style:none;
`
   


const Rightbar = () => {
    return (
        <Cont>
            <Wrapper>
            <BdayCont>
                <BdayImg src="./assets/gift.png" alt="gift Image"/>
                <BdayText> <b>Pola Foster</b> and <b>3 other queers</b> have birthday today</BdayText>
            </BdayCont>
            <AdImg src="./assets/ad.png" alt="advertisement image"/>
            <RightBarTitle>Online Friends</RightBarTitle>
            <OlFriendsList>
                {Users.map((u) => (
                    <Online key={u.id} user={u} />
                ))}
               
            </OlFriendsList>
            </Wrapper>
        </Cont>
    )
}

export default Rightbar
