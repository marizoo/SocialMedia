import { MoreVert } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Users } from '../dummyData'


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

const Post = ({post}) => {

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }
   
    return (
        <Cont>
            <Wrapper>
                <Top>
                    <TopLeft>
                        <PostProfileImg 
                        src= {Users.filter(u=>u.id === post.userId)[0].profilePicture}
                        alt="profile photo"/>
                        <PostUserName>
                            {Users.filter(u=>u.id === post.userId)[0].username}
                        </PostUserName>
                        <PostDate>{post.date}</PostDate>
                    </TopLeft>
                    <TopRight>
                        <MoreVert/>
                    </TopRight>
                </Top>

                <Center>
                    <PostText>{post?.desc}</PostText>
                    <PostImg src={post.photo} alt={post?.desc}/>
                </Center>

                <Bottom>
                    <BottomLeft>
                        <BottomIcons src="./assets/like.png" onClick={likeHandler} alt="like icon"/>
                        <BottomIcons src="./assets/heart.png" onClick={likeHandler} alt="heart icon"/>
                        <LikeCounter>{like} likes</LikeCounter>
                    </BottomLeft>
                    <BottomRight>
                        <CommentText>{post.comment} comments</CommentText>
                    </BottomRight>
                </Bottom>

            </Wrapper>
        </Cont>
    )
}

export default Post
