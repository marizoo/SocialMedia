import React from 'react'
import styled from 'styled-components'
import Share from './Share'
import Post from './Post'

const Cont = styled.div`
flex: 5.5;
`

const Wrapper = styled.div`
padding: 20px;
`

const Feed = () => {
    return (
        <Cont>
            <Wrapper>
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
            </Wrapper>
        </Cont>
    )
}

export default Feed
