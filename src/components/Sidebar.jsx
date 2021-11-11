import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
flex: 3;
height: calc(100vh - 50px);
overflow-y: scroll;

&::-webkit-scrollbar {
    width: 5px;
}
&::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}
&::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
}
`

const Wrapper = styled.div`
padding: 20px;
`

const FeedList = styled.ul`
padding: 0;
margin: 0;
list-style: none;
`

const ListItem = styled.li`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const ListText = styled.span`
margin-left: 15px;
`

const Button = styled.button`
width: 150px;
border: none;
padding: 10px;
border-radius: 5px;
font-weight: 500;
`

const HLine = styled.hr`
margin: 20px 0;
`

const FriendList = styled.ul`
padding: 0;
margin: 0;
list-style: none;
`
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


const Sidebar = () => {
    return (
        <Cont>
            <Wrapper>
                <FeedList>
                    <ListItem>
                        <RssFeed/>
                        <ListText>Feed</ListText>
                    </ListItem>
                    <ListItem>
                        <Chat/>
                        <ListText>Chat</ListText>
                    </ListItem>
                    <ListItem>
                        <PlayCircleFilledOutlined/>
                        <ListText>Videos</ListText>
                    </ListItem>
                    <ListItem>
                        <Group/>
                        <ListText>Groups</ListText>
                    </ListItem>
                    <ListItem>
                        <Bookmark/>
                        <ListText>Bookmarks</ListText>
                    </ListItem>
                    <ListItem>
                        <HelpOutline/>
                        <ListText>Questions</ListText>
                    </ListItem>
                    <ListItem>
                        <WorkOutline/>
                        <ListText>Jobs</ListText>
                    </ListItem>
                    <ListItem>
                        <Event/>
                        <ListText>Events</ListText>
                    </ListItem>
                    <ListItem>
                        <School/>
                        <ListText>Courses</ListText>
                    </ListItem>
                </FeedList>
                <Button>Show More</Button>
                <HLine/>
                <FriendList>
                    <Friend>
                        <FImg src="./assets/person/2.jpeg" alt="Friend's name"/>
                        <FName>John Lane</FName>
                    </Friend>
                    <Friend>
                        <FImg src="./assets/person/2.jpeg" alt="Friend's name"/>
                        <FName>John Lane</FName>
                    </Friend>
                    <Friend>
                        <FImg src="./assets/person/2.jpeg" alt="Friend's name"/>
                        <FName>John Lane</FName>
                    </Friend>
                    <Friend>
                        <FImg src="./assets/person/2.jpeg" alt="Friend's name"/>
                        <FName>John Lane</FName>
                    </Friend>
                    <Friend>
                        <FImg src="./assets/person/2.jpeg" alt="Friend's name"/>
                        <FName>John Lane</FName>
                    </Friend>
                    <Friend>
                        <FImg src="./assets/person/2.jpeg" alt="Friend's name"/>
                        <FName>John Lane</FName>
                    </Friend>
                    <Friend>
                        <FImg src="./assets/person/2.jpeg" alt="Friend's name"/>
                        <FName>John Lane</FName>
                    </Friend>
                   
                </FriendList>
            </Wrapper>
        </Cont>
    )
}

export default Sidebar
