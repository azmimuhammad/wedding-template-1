import React from "react";
import HeaderComponent from "./components/header";
import Invitation from "./components/invitation"
import QuotesComponent from './components/qotes'
import EventComponent from './components/event'
import InviteToComponent from './components/InviteTo'
import FooterComopnent from './components/footer'

const HomePage = () => {
    return (
        <div style={{ padding: '80px 0px' }}>
            <HeaderComponent />
            <Invitation />
            <QuotesComponent />
            <EventComponent />
            <InviteToComponent />
            <FooterComopnent />
        </div>
    )
}

export default HomePage