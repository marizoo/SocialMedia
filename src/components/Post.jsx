import { MoreVert } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
width: 100%;
border-radius: 10px;
box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
-webkit-box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
margin: 30px 0;
`

const Wrapper = styled.div`
padding: 10px;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`


const TopLeft = styled.div`
display: flex;
align-items: center;
`

const PostProfileImg = styled.img`
height: 32px;
width: 32px;
border-radius: 50%;
object-fit: cover;
`

const PostUserName = styled.span`
font-size: 15px;
font-weight: 500;
margin: 0 10px;
`

const PostDate = styled.span`
font-size: 12px;
`
const Center = styled.div`
margin: 20px 0;
`

const PostText = styled.span``

const PostImg = styled.img`
margin-top: 20px;
width: 100%;
max-height: 500px;
object-fit: contain;
`

const TopRight = styled.div``

const Bottom = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const BottomLeft = styled.div`
display: flex;
align-items: center;
`

const BottomIcons = styled.img`
width: 24px;
height: 24px;
margin-right: 5px;
cursor: pointer;
`

const LikeCounter = styled.span`
font-size: 15px;
`

const BottomRight = styled.div``

const CommentText = styled.span`
cursor: pointer;
border-bottom: 1px dashed gray;
font-size: 15px;
`

const Post = () => {
    return (
        <Cont>
            <Wrapper>
                <Top>
                    <TopLeft>
                        <PostProfileImg src="./assets/person/1.jpeg" alt="profile photo"/>
                        <PostUserName>Fox Muldor</PostUserName>
                        <PostDate>5 mins ago</PostDate>
                    </TopLeft>
                    <TopRight>
                        <MoreVert/>
                    </TopRight>
                </Top>

                <Center>
                    <PostText>Hey! Its my first post! :-)</PostText>
                    <PostImg src="./assets/post/1.jpeg" alt="post image"/>
                </Center>

                <Bottom>
                    <BottomLeft>
                        <BottomIcons src="./assets/like.png" alt="like icon"/>
                        <BottomIcons src="./assets/heart.png" alt="heart icon"/>
                        <LikeCounter>32 likes</LikeCounter>
                    </BottomLeft>
                    <BottomRight>
                        <CommentText>9 comments</CommentText>
                    </BottomRight>
                </Bottom>

            </Wrapper>
        </Cont>
    )
}

export default Post
