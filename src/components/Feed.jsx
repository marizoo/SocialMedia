import React from 'react'
import styled from 'styled-components'
import Share from './Share'

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
            </Wrapper>
        </Cont>
    )
}

export default Feed
