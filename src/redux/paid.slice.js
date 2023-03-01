import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {paidService} from "../services/paid-services";


const initialState={
    paid:[],
    adminUsers:[],
    userForUpdate:null

};

const getAll = createAsyncThunk(
    'paid/getAll',
    async ({page,name,email,age,course,status,course_format,course_type,order})=>{
            const {data} = await paidService.getAll(page,name,email,age,course,status,course_format,course_type,order)
            return data
    }
);

const updateById = createAsyncThunk(
    'paid/updateById',
    async ({id,user}) =>{
        const {data} = await paidService.updateById(id,user);
        return data

    }
);

const getAdminUsers = createAsyncThunk(
    'paid/getAdminUsers',
    async () =>{
        const {data} = await paidService.getAdminUsers();
        return data

    }
);
const createUser = createAsyncThunk(
    'admin/create',
    async ({user})=>{
        const {data} = await paidService.createUser(user)
        return data
    }
)


const paidSlice = createSlice({
    name:'paid',
    initialState,
    reducers: {
        setUserForUpdate: (state, action) => {
            state.userForUpdate = action.payload;
        }
    },
    extraReducers:(builder )=>{
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                state.paid = action.payload;
            })
            .addCase(updateById.fulfilled, (state, action) => {
                const currnetUser =state.paid.find(value=> value.id===action.payload.id);
                console.log(currnetUser);
                Object.assign(currnetUser,action.payload);
                state.userForUpdate = null
            })
            .addCase(getAdminUsers.fulfilled,(state, action) => {
                state.adminUsers = action.payload;
            })
            .addCase(createUser.fulfilled,(state, action) => {
                state.adminUsers.push(action.payload)
            })
    }

}
);
const {reducer:paidReducer,actions:{setUserForUpdate}} = paidSlice

const paidActions = {
    getAll,
    updateById,
    getAdminUsers,
    setUserForUpdate,
    createUser
}
export {
    paidActions,
    paidReducer
}