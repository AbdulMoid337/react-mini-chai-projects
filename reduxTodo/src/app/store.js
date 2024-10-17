import {configureStore} from "@reduxjs/toolkit"
import rr  from '../features/todo/todoSlice'     

export const store = configureStore({
    reducer :  rr
})
