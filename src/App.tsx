import type {Component} from "solid-js"
import {Box} from "@suid/material/Box"
import {Route, Router, Routes} from "@solidjs/router"
import AuthenticationScreen from "./screens/AuthenticationScreen"
import BlockScreen from "./screens/BlockScreen"

const App: Component = () => {
    return <Box bgcolor="#212121" height="100vh">
        <Router>
            <Routes>
                <Route path="/" component={AuthenticationScreen} />
                <Route path="/callback?code=:code" component={BlockScreen} />
            </Routes>
        </Router>
    </Box>
}

export default App
