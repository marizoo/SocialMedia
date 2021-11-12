import React from 'react'
import styled from 'styled-components'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const Wrapper = styled.div`
display: flex;
width: 100%;
`

const ProfileRight = styled.div`
flex: 9;
`

const RightTop = styled.div``
const ProfileCover = styled.div`
height: 320px;
position: relative;
display: flex;
`

const ProfileInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Name = styled.h4`
font-size: 24px;
`

const Desc = styled.span`
font-weight: 300;
`

const CoverImg = styled.img`
width: 100%;
height: 250px;
object-fit: cover;
`

const UserImg = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
object-fit: cover;
position: absolute;
left: 0;
right: 0;
margin: auto;
top: 150px;
border: 3px solid white;
`

const RightBottom = styled.div`
display: flex;
`

const Profile = () => {
    return (
        <>
            <Topbar />
            <Wrapper>
                <Sidebar />
                <ProfileRight>
                    <RightTop>
                        <ProfileCover>
                            <CoverImg src="./assets/post/3.jpeg" alt="cover image"></CoverImg>
                            <UserImg src="./assets/person/7.jpeg" alt="user image"></UserImg>
                        </ProfileCover>
                        <ProfileInfo>
                            <Name>Fox Muldor</Name>
                            <Desc>Sexy agent at your service.</Desc>
                        </ProfileInfo>
                    </RightTop>
                    <RightBottom>
                        <Feed />
                        <Rightbar profile/>
                    </RightBottom>
                </ProfileRight>
            </Wrapper>
        </>
    )
}

export default Profile
