import { createSlice } from '@reduxjs/toolkit'

export const noteSlice = createSlice({
    name : "note",
    initialState : [{
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis debitis aspernatur doloribus nostrum vitae quia consequatur asperiores ipsa et maxime laudantium velit odit facilis ipsum totam quae, minus ex? Ipsum.",
        title: "feedback"
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis debitis aspernatur doloribus nostrum vitae quia consequatur asperiores ipsa et maxime laudantium velit odit facilis ipsum totam quae, minus ex? Ipsum.",
        title: "feedback"
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis debitis aspernatur doloribus nostrum vitae quia consequatur asperiores ipsa et maxime laudantium velit odit facilis ipsum totam quae, minus ex? Ipsum.",
        title: "feedback"
      }],
     reducers : {

      add:(state,action)=>{
       state = state.unshift(action.payload)
      },

      remove:(state,action)=>{
        state = state.splice(action.payload,1)
      },
      edit:(state,action)=>{
        state = state.splice(action.payload,1)
      },
      update : (state,action) =>{
        state = state.unshift(action.payload)
      }
     }
 
        
    
})

export const {add,remove,edit,update} = noteSlice.actions

export default noteSlice.reducer