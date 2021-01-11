import { Button, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    wrapper: {},
    blueBlock: {},
}))

const SignIn = () => {
    const classes = useStyles()
    return (
        <div>
            Sign In
            <Button color='secondary'>Hello</Button>
        </div>
    )
}

export default SignIn
