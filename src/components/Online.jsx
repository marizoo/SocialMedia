import { UpdateRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


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
 

const Online = ({user}) => {
    console.log(user)
    return (
             <OlFriend>
                    <ProfileImgCont>
                       <ProfileImg src={user.profilePicture} alt="Friends who is online" />
                       <OnlineBadge></OnlineBadge>
                    </ProfileImgCont>
                    <UserName>{user.username}</UserName>
                </OlFriend>
       
    )
}

export default Online
