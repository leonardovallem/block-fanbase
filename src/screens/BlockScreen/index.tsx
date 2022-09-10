import {Component, onMount} from "solid-js"
import Stack from "@suid/material/Stack"
import {useParams} from "@solidjs/router"

const BlockScreen: Component = () => {
    const params = useParams()

    onMount(() => console.log(params))

    return <Stack height="100%"
                  justifyContent="center"
                  alignItems="center">
        {JSON.stringify(params)}
    </Stack>
}

export default BlockScreen