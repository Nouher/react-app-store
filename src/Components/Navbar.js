import React from 'react'
import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import {mobile} from '../responsive'


const Container = styled.div`
height: 60px;
${mobile({height:"50px",})};

`

const Wrapper=styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
${mobile({padding:"10px 0px",})};
`
const Left=styled.div`
display:flex;
align-items:center;
flex:1;

`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display:"none",})};
`
const SearchContainer = styled.div`
display:flex;
padding: 5px;
margin-left:25px;
border: 0.5px solid lightgray;
transition: all .15s ease;

&:hover {
    border: 0.5px solid teal;
}

`
const Input=styled.input`
border:none;
${mobile({width:"50px",})};

`

const Center=styled.div`
text-align:center;
flex:1;
`
const Logo=styled.h1`
font-weight:bold;
${mobile({fontSize:"24px",})};

`
const Right=styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
flex:1;
${mobile({flex:2,justifyContent:"center",})};

`
const MenuItem=styled.div`
margin-left:25px;
font-size: 14px;
cursor: pointer;
transition:all .1s ease;
&:hover{
    color:teal;
    transform:scale(1.1);
    font-weight:bold;
}
${mobile({fontSize:"12px",marginLeft:"10px"})};


`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer id="search">
                        <Input placeholder="Search"/>
                         <Search style={{color:"gray",fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Ghost.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SING IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={14} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
