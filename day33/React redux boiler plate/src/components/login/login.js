import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import * as authActions from '../../_actions';
import { connect } from 'react-redux';

function login() {
    const [redirect, setRedirect] = useState(false);

    
    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.getToken()
                .then(res => {
                    if (res) {
                        setRedirect(true);
                }
                })
                .catch(err => {
                    console.log(err);
            })

        }
    },[])


    const login = () => {
        const email = 'jjayalakshmi16@gmail.com';
        const password = 'abc123';
        props.authenticate(email, password)
            .then((res) => {
                console.log(res);
                setRedirect(true);
        })
   }


    const redirectme = () => {
        return <Redirect to = '/main' />
    }

    const loginme = () => {
        return (
            <>
            <input type="text" />
            <input type="text"/>
            <button>Sign in</button>
            </>
        )
    }
    
    return (
        <div>
            {redirect ? redirectme() : loginme()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth:state.auth
    }
}

const mapDispatchToAction = dispatch => {
    return {
        authenticate: (email, password) => dispatch(authActions.authenticate(email, password)),
        getToken: ()=> dispatch(authActions.getToken())
    }
}


export default connect(mapStateToProps,mapDispatchToAction)(login);
