import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {paidService} from "../services/paid-services";


const initialState={
    paid:[],
    search:[],

};

const getAll = createAsyncThunk(
    'paid/getAll',
    async ({page,name,email,age,course,status,course_format,course_type,order})=>{
            const {data} = await paidService.getAll(page,name,email,age,course,status,course_format,course_type,order)
            return data
    }
);


const paidSlice = createSlice({
    name:'paid',
    initialState,
    reducers:{},
    extraReducers:(builder )=>{
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                state.paid = action.payload;
            })
    }

}
);
const {reducer:paidReducer,actions} = paidSlice

const paidActions = {
    getAll
}
export {
    paidActions,
    paidReducer
}