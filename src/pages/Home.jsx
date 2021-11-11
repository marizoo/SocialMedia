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

const Home = () => {
    return (
        <>
            <Topbar />
            <Wrapper>
                <Sidebar />
                <Feed />
                <Rightbar />
            </Wrapper>
        </>
    )
}

export default Home
