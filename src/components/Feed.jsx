import React from 'react'
import styled from 'styled-components'
import Share from './Share'
import Post from './Post'
import {Posts} from '../dummyData'

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
                {Posts.map(p => (
                <Post post={p} key={p.id}/>
                ))}
            </Wrapper>
        </Cont>
    )
}

export default Feed
