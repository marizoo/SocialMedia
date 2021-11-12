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
const RightbarTitle = styled.h4`
font-size: 18px;
font-weight: 500;
margin-bottom: 10px;
` 

const RbInfoCont = styled.div`
margin-bottom: 30px;
` 

const RbInfoItem = styled.div`
margin-bottom: 10px;
` 

const RbInfoKey = styled.span`
font-weight: 500;
margin-right: 15px;
color: #555;
` 

const RbInfoValue = styled.span`
font-weight: 300;
` 


const RbFollowings = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
` 

const RbFollowing = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
cursor: pointer;
` 

const RbFImage = styled.img`
width: 100px;
height: 100px;
object-fit: cover;
border-radius: 5px;
` 

const RbFName = styled.span`` 


const Rightbar = ({profile}) => {


    const HomeRightbar = () => {
        return(
            <>
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
            </>
        )
    };

    const ProfileRightbar = () => {
        return(
            <>
                <RightbarTitle>User information</RightbarTitle>
                <RbInfoCont>
                    <RbInfoItem>
                        <RbInfoKey>City:</RbInfoKey>
                        <RbInfoValue>New York</RbInfoValue>
                    </RbInfoItem>
                    <RbInfoItem>
                        <RbInfoKey>From:</RbInfoKey>
                        <RbInfoValue>Madrid</RbInfoValue>
                    </RbInfoItem>
                    <RbInfoItem>
                        <RbInfoKey>Relatioship:</RbInfoKey>
                        <RbInfoValue>Single</RbInfoValue>
                    </RbInfoItem>
                </RbInfoCont>
                <RightbarTitle>User Friends</RightbarTitle>
                <RbFollowings>
                    <RbFollowing>
                        <RbFImage src="./assets/person/1.jpeg" alt="following friends' picture"/>
                        <RbFName>John Carter</RbFName>
                    </RbFollowing>
                    <RbFollowing>
                        <RbFImage src="./assets/person/2.jpeg" alt="following friends' picture"/>
                        <RbFName>John Carter</RbFName>
                    </RbFollowing>
                    <RbFollowing>
                        <RbFImage src="./assets/person/3.jpeg" alt="following friends' picture"/>
                        <RbFName>John Carter</RbFName>
                    </RbFollowing>
                    <RbFollowing>
                        <RbFImage src="./assets/person/4.jpeg" alt="following friends' picture"/>
                        <RbFName>John Carter</RbFName>
                    </RbFollowing>
                    <RbFollowing>
                        <RbFImage src="./assets/person/5.jpeg" alt="following friends' picture"/>
                        <RbFName>John Carter</RbFName>
                    </RbFollowing>
                    <RbFollowing>
                        <RbFImage src="./assets/person/6.jpeg" alt="following friends' picture"/>
                        <RbFName>John Carter</RbFName>
                    </RbFollowing>
                </RbFollowings>
            </>
        )
    }

    return (
        <Cont>
            <Wrapper>
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </Wrapper>
        </Cont>
    )
}

export default Rightbar
