import React from 'react'
import styled from 'styled-components'
import {Link } from 'react-router-dom'

import EventIcon from '@mui/icons-material/Event';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Container = styled.div`
display : flex;
flex = 1;
flex-direction : column;
// gap : 2px;
margin-top : 12px;
margin-left : 12px;
// border : 2px solid red;
height : 100%;

justify-content : space-between;
`

const Items = styled.div`
display : flex;
flex = 1;
flex-direction : column;
gap : 2px;
// border : 2px solid red;
`

const Item = styled.div`
display : flex;
width : 200px;
flex-direction : row;
align-items : center;
padding : 5px;
justify-content : flex-start;
border-radius : 4px;
gap : 15px;
font-size : 14px; 
color : #707070;
cursor : pointer;
:hover{
    background-color : #f2f2f2;
}
`
const Others = styled.div`
display : flex;
flex-direction : column;
justify-content : space-between;
border-top : 1px solid #707070;
height : 250px;
`
const Download = styled.div`
display : flex;
width : 200px;
flex-direction : row;
align-items : center;
padding : 5px;
justify-content : flex-start;
border-radius : 4px;
gap : 15px;
font-size : 15px; 
height : 40px;
border : 1px solid #707070;
color :  #707070aa;
`

const Left = () =>{
    return (
        <Container>
            <Items>
            <Link  to= '/' style={{textDecoration : 'none', color : "inherit"}}>
                <Item>
                    <EventIcon/>
                    <div>Calendar</div>
                </Item>
            </Link>
             <Item>
                    <PeopleAltIcon/>
                    <div>Clients</div>
                </Item>

             <Item>
                    <CreditCardIcon/>
                    <div>Meetings</div>
                </Item>

                <Item>
                    <VerifiedUserIcon/>
                    <div>Billing</div>
                </Item>

                <Item>
                    <InsertChartIcon/>
                    <div>Insurance</div>
                </Item>

                <Item>
                    <MenuIcon/>
                    <div>Analytics</div>
                </Item>

                <Item>
                    <NotificationsIcon/>
                    <div>Acount Activity</div>
                </Item>
                <Item>
                    <SettingsIcon/>
                    <div>Setting</div>
                </Item>
            </Items>

            <Others>
                <div>
                <Item>
                    <VisibilityIcon/>
                    <div>Recently Viewed</div>
                    <KeyboardArrowRightIcon/>
                </Item>
                </div>
                <div>
                <Download>
                    <SmartphoneIcon/>
                    <div>Download Free App</div>
                </Download>

                <Item>
                    <LockOpenIcon/>
                    <div>Privacy Off</div>
                </Item>
                </div>
            </Others>

        </Container>
    )
}
export default Left;