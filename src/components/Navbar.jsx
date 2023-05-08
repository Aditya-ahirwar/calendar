import React from 'react'
import styled from 'styled-components'
import logo from '../logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Container = styled.div`
display : flex;
width : 100vw;
height : 56px;
flex-direction : row;
justify-content : space-between;
background-color : #1371c8;
`;
const Items = styled.div`
display : flex;
margin : 0px 24px;
height : 100%;
// background-color : red;
z-index : 100;
align-items : center;
gap : 15px;
`
const Logo = styled.img`
height : 25px;
`

const Search = styled.div`
display : flex;
height : 30px;
border-radius : 4px;
gap: 5px;
padding : 2px 5px;
align-items : center;
background-color : #0e5291;
`

const Input = styled.input`
border : none;
background-color : transparent;
outline : none;
border-radius : 4px;
color : #707085;
font-size : 14px;
`
const Income = styled.div`
height : 30px;
display : flex;
flex-direction : row; 
align-items : center;
font-size : 10px;
gap : 5px;
`
const IncomeText = styled.div`
display : flex;
flex-direction : column;
color : white;
`

const RightIcons = styled.div`
display : flex;
flex-direction : row;
align-items : center;
height : 30px;
gap : 5px;
font-size : 14px;
font-weight : bold;
color : white;
// background-color : red;
padding : 3px 6px;
border-radius : 4px;
align-text : center;
:hover{
    background-color : #0e5291;
}
`
const ActivatePlan = styled.div`
display : flex;
flex-direction : row;
height : 30px;
width : 100px;
background-color : #ff7a5c;
font-size : 14px;
font-weight : bold;
align-items: center;
justify-content : center;
color : white;
border-radius : 4px;
`
const Profile = styled.div`
display : flex;
flex-direction : row;
height : 30px;
width : 30px;
border-radius : 50%;
background-color : #ff7a5c;
font-size : 12px;
align-items: center;
justify-content : center;
`


const Navbar = () =>{
    return (
        
        <Container>
            <Items>
                <Logo src={logo}/>
                <Search>
                    <SearchIcon style = {{color : 'white'}}/>
                    <Input placeholder='Search clients'/>
                </Search>
                <Income>
                    <ShowChartIcon style={{color:"#30fc03"}}/>
                    <IncomeText>
                        <div  style={{color:"#30fc03"}}>May income</div>
                        <div style={{fontSize:'12px', fontWeight:'bold'}}>$1000</div>
                    </IncomeText>
                </Income>
            </Items>
            <Items>
                <RightIcons>
                    <AddIcon/>
                    <div>Create</div>
                </RightIcons>

                <RightIcons>
                    <CalendarMonthIcon/>
                    <div>Requests</div>
                </RightIcons>
            
                <RightIcons>
                    <ChatBubbleIcon/>
                    <div>Messages</div>
                </RightIcons>
                <ActivatePlan>
                    <div>Activate plan</div>
                </ActivatePlan>
                <Profile>
                    <div>
                        NP
                    </div>
                </Profile>
            </Items>
        </Container>
    )
}
export default Navbar;