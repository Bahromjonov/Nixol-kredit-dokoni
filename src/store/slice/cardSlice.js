import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
    card: [],
}

export const cardSlice = createSlice({
    name: 'card',
    initialState: initialStateValues,
    reducers: {
        addCard: (state, action) => {
            const { id } = action.payload
            const found = state.card.find(product => product.id === id)
            if(!found){
                state.card.push(action.payload);
            }else {
                alert("Bu oldindan mavjud")
            }
        },
        deleteCard: (state, action) => {
            const { id } = action.payload
            state.card = state.card.filter(product => product.id!== id)
            console.log(id);
        },
    },
})

export const { addCard , deleteCard } = cardSlice.actions

export default cardSlice.reducer