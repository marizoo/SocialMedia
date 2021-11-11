import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'

const Cont = styled.div`
color: ${({theme}) => theme.colors.primary}
`

const Home = () => {
    return (
        <Cont>
                   <Topbar />
        </Cont>
    )
}

export default Home
