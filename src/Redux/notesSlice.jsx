import {createSlice} from "@reduxjs/toolkit";



const notesSlice = createSlice({
name:"notes",
initialState:[
   
    {  id:0,
        title:'Feedbacks',
       
       notes:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum unde at. Deleniti ducimus, vitae quidem eius sapiente fuga, eligendi itaque rem quisquam inventore odio obcaecati eum tempore! Minus, illo?',



    },
    
    {
        id:1,
      title:'Weekly Task',
   
      notes:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum unde at. Deleniti ducimus, vitae quidem eius sapiente fuga, eligendi itaque rem quisquam inventore odio obcaecati eum tempore! Minus, illo?'

     
    },
    {
        id:2,
      title:'Lyrics',
     
      notes:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum unde at. Deleniti ducimus, vitae quidem eius sapiente fuga, eligendi itaque rem quisquam inventore odio obcaecati eum tempore! Minus, illo?'
    }

]    ,


reducers:{
    setData:(state,action)=>{
        state = action.payload;
    },

add:(state,action)=>{
    state.push(action.payload)
},


remove:(state,action)=>{
    state.splice(action.payload,1)

},


edit:(state,action)=>{
    state.splice(action.payload.params, 1, action.payload.values)
},


},

})



export const {add,remove,edit,setData} = notesSlice.actions
export default notesSlice.reducer