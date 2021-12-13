import React from 'react'
import styled from 'styled-components'


const Foot = styled.div`
flex:1;
display:flex;
justify-content:center;
background-color:aliceblue;
margin:10px;
;`

function Footer() {
    return (
        <div className="footer">
            <Foot>Copyright 2014-2021 DigiCollect - All Rights Reserved.</Foot>
        </div>
    )
}

export default Footer
