import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import NavigationBar from '../component/navigationBar'
import {
    Button,
    FormControl,
    InputGroup,
} from 'react-bootstrap'

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            save1: true,
        }
    }

    onSave = () => {

    }
    render() {
        return (
            <div style={{ backgroundColor: '#FFCDDD'}}>
                <NavigationBar />
                <div style={styles.contbody}>
                    <div style={styles.contleft}>
                    </div>
                    <div style={styles.contright}>
                        <div style={styles.icontact}>
                        <h1>Complete Your Profile </h1>
                            <label>Name : </label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">
                                        <i className="fas fa-user-circle"></i>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Input Here"
                                    onChange={(e) => this.userValid(e)}
                                    ref="username"
                                />
                            </InputGroup>
                            <label>Address : </label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">
                                        <i className="fas fa-user-circle"></i>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Input Here"
                                    onChange={(e) => this.userValid(e)}
                                    ref="username"
                                />
                            </InputGroup>
                            <label>Phone Number : </label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">
                                        <i className="fas fa-user-circle"></i>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Input Here"
                                    onChange={(e) => this.userValid(e)}
                                    ref="username"
                                />
                            </InputGroup>
                            <label>Email : </label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">
                                        <i className="fas fa-user-circle"></i>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Input Here"
                                    onChange={(e) => this.userValid(e)}
                                    ref="username"
                                />
                            </InputGroup>

                            <label>Credit Card Number : </label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">
                                        <i className="fas fa-user-circle"></i>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Input Here"
                                    onChange={(e) => this.userValid(e)}
                                    ref="username"
                                />
                            </InputGroup>
                            <div>
                                <Button variant="primary" style={styles.button} onClick={this.onRegister}> 
                                 <i className="fas fa-user-plus" style={{marginRight: '10px'}}></i>
                                 Save
                                </Button>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

const styles = {
    icontact: {
        padding: '100px',
        alignItems: 'center',
    },
    contbody:{
        display: 'flex'
    },
    contleft:{
        flexBasis: '50%',
        height: '100vh',
        backgroundColor: 'salmon',
        background: "url(https://images.unsplash.com/photo-1601740289404-6d0dca1bc904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFuZGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60) no-repeat center",
        backgroundSize: 'cover'
    },
    contright: {
        height: '100vh',
        backgroundColor: '#ECDBBA',
        flexBasis: '50%',
    },
    button: {
        backgroundColor: '#303f9f',
        border: 'none',
        marginTop: '30px',
    }
}


export default ProfilePage