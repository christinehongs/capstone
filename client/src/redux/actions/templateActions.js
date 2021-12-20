
// Multiple actions in this file
// This is not a named export
import { INCREMENT } from './types'
// import axios from 'axios'

export const sampleAction = (sampleData) => {
    return{
        type: INCREMENT,
        data: sampleData
    }
}
