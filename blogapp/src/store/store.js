import {confgureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice"

const store=confgureStore({
    redcer:{
        auth:authSlice,
    }
})

export default store