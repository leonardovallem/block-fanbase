import {Component} from "solid-js"
import Stack from "@suid/material/Stack"
import Button from "@suid/material/Button"
import TwitterLogo from "../../assets/twitter-logo.svg"

const AuthenticationScreen: Component = () => {
    return <Stack height="100%"
                  justifyContent="center"
                  alignItems="center">
        <Button variant="contained">
            Conectar com o Twitter
            <img src={TwitterLogo} style={{height: "1em", "margin-left": "10px"}} />
        </Button>
    </Stack>
}

export default AuthenticationScreen