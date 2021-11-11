import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
width: 100%;
height: 170px;
border-radius: 10px;
box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
-webkit-box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
`

const Wrapper = styled.div`
padding: 10px;
`

const Top = styled.div`
display: flex;
align-items: center;
`

const ProfileImg = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
margin-right: 10px;
`

const ShareInput = styled.input`
border: none;
width: 80%;

&:focus {
    outline: none;
}
`

const ShareHr = styled.hr`
margin: 20px;
`

const Bottom = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const OptionsCont = styled.div`
display: flex;
margin-left: 20px;
`

const Option = styled.div`
display: flex;
align-items: center;
margin-right: 15px;
cursor: pointer;
`

const OptionText = styled.span`
margin-left: 3px;
font-size: 14px;
font-weight: 500;
`

const ShareButton = styled.button`
border: none;
padding: 7px;
border-radius: 5px;
background-color: green;
font-weight: 500;
margin-right: 20px;
cursor: pointer;
color: white;
`

const Share = () => {
    return (
        <Cont>
            <Wrapper>
                <Top>
                    <ProfileImg src="./assets/person/1.jpeg" alt="friend's photo"/>
                    <ShareInput placeholder="What's on your gay mind?"/>
                </Top>
                <ShareHr />
                <Bottom>
                    <OptionsCont>
                        <Option>
                            <PermMedia htmlColor="tomato" style={{fontSize:"18px"}}/>
                            <OptionText> Photo or Video</OptionText>
                        </Option>
                        <Option>
                            <Label htmlColor="blue" style={{fontSize:"18px"}}/>
                            <OptionText>Tag</OptionText>
                        </Option>
                        <Option>
                            <Room htmlColor="green" style={{fontSize:"18px"}}/>
                            <OptionText>Location</OptionText>
                        </Option>
                        <Option>
                            <EmojiEmotions htmlColor="goldenrod" style={{fontSize:"18px"}}/>
                            <OptionText>Feelings</OptionText>
                        </Option>
                    </OptionsCont>
                    <ShareButton>Share</ShareButton>
                </Bottom>
            </Wrapper>
        </Cont>
    )
}

export default Share
