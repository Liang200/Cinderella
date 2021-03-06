import React from 'react'
import {Header} from './Header'
import {Footer} from './Footer'
import ConfirmMachine from './ConfirmMachine'
import ConfirmText from './ConfirmText'


export class Confirm extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <section className="confirm-holder">
                    <ConfirmMachine/>
                    <ConfirmText/>
                </section>
                <Footer/>
            </div>
        )
    }
}
