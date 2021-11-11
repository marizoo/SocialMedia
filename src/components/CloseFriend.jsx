import React from 'react'
import styled from 'styled-components'

const Friend = styled.li`
display: flex;
align-items: center;
margin-bottom: 15px;
`

const FImg = styled.img`
border-radius: 50%;
height: 32px;
width: 32px;
object-fit: cover;
margin-right: 10px;
`

const FName = styled.span`

`


const CloseFriend = ({user}) => {
    return (
        <Friend>
            <FImg src={user.profilePicture} alt="CLose friend's name"/>
            <FName>{user.username}</FName>
        </Friend>
    )
}

export default CloseFriend
