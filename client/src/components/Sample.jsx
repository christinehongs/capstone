import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {sampleAction} from '../redux/actions/templateActions'
import { Button } from '@chakra-ui/react'

function Sample() {

    const count = useSelector(state => state.templateReducer.count)
    const dispatch = useDispatch()

    //componentDidMount if dependency list is empty
    useEffect(() => {

        //component did unmount used as a cleanup function
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <>
            <h1>Template function</h1>
            <br />
            <h1>{count}</h1>
            <Button onClick={()=>dispatch(sampleAction(3))}>Click to increment/change global state</Button>
        </>
    )
}

export default Sample
