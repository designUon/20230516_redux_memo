import { createSlice } from '@reduxjs/toolkit'

export const memoSlice = createSlice({


    name : "memo",
    
    initialState : [
        {
            id : 1,
            text : "메모입니다",
            date : "2023-05-15"
        }
    ],

    reducers : {

        addMemoToolkit : (state, action) => {
            const newMemo = {
                ...action.payload,
                id : id
            }
            id++;
            state.push(newMemo)
        },

        delMemoRedux : (state, action) => {
            const newMemoList = state.filter((m)=>(m.id !== action.payload))
            return newMemoList
        },

    }

})

let id = 2;

export const { addMemoToolkit, delMemoRedux } = memoSlice.actions
export default memoSlice.reducer