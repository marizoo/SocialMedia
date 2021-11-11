import React from 'react'
import styled from 'styled-components'

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
const OlFriend = styled.li`
display: flex;
align-items: center;
margin-bottom: 15px;
`

const ProfileImgCont = styled.div`
margin-right: 10px;
position: relative;
`

const ProfileImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
`

const OnlineBadge = styled.span`
width: 12px;
height: 12px;
border-radius: 50%;
background-color: limegreen;
position: absolute;
top: -2px;
right: 0;
border: 2px solid white;
`

const UserName = styled.span`
font-weight: 500;
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
                <OlFriend>
                    <ProfileImgCont>
                       <ProfileImg src="./assets/person/3.jpeg" alt="Friend's picture who is online" />
                       <OnlineBadge></OnlineBadge>
                    </ProfileImgCont>
                    <UserName>Eva Green</UserName>
                </OlFriend>
                <OlFriend>
                    <ProfileImgCont>
                       <ProfileImg src="./assets/person/3.jpeg" alt="Friend's picture who is online" />
                       <OnlineBadge></OnlineBadge>
                    </ProfileImgCont>
                    <UserName>Eva Green</UserName>
                </OlFriend>
                <OlFriend>
                    <ProfileImgCont>
                       <ProfileImg src="./assets/person/3.jpeg" alt="Friend's picture who is online" />
                       <OnlineBadge></OnlineBadge>
                    </ProfileImgCont>
                    <UserName>Eva Green</UserName>
                </OlFriend>
                <OlFriend>
                    <ProfileImgCont>
                       <ProfileImg src="./assets/person/3.jpeg" alt="Friend's picture who is online" />
                       <OnlineBadge></OnlineBadge>
                    </ProfileImgCont>
                    <UserName>Eva Green</UserName>
                </OlFriend>
                <OlFriend>
                    <ProfileImgCont>
                       <ProfileImg src="./assets/person/3.jpeg" alt="Friend's picture who is online" />
                       <OnlineBadge></OnlineBadge>
                    </ProfileImgCont>
                    <UserName>Eva Green</UserName>
                </OlFriend>
            </OlFriendsList>
            </Wrapper>
        </Cont>
    )
}

export default Rightbar
