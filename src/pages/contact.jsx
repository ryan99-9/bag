import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import NavigationBar from '../component/navigationBar'
import {
    Carousel,
    Button,
    FormControl
} from 'react-bootstrap'

class ContactPage extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: '#FFCDDD', paddingTop: '10vh'}}>
                <NavigationBar />
                <div>
                    <h1>Contact Us Page</h1>
                </div>
            </div>
        )
        
    }
}



export default ContactPage