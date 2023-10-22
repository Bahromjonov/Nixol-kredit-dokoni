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
            if (!found) {
                let product = { ...action.payload, count: 1 }
                state.card.push(product)
            } else {
                alert("Bu oldindan mavjud")
            }
        },
        deleteCard: (state, action) => {
            const { id } = action.payload
            state.card = state.card.filter(product => product.id !== id)
            console.log(id);
        },
        plusCount: (state, action) => {
            state.card.forEach(i => {
                if (i.id === action.payload) {
                    i.count++
                }
            })
        },
        minusCount: (state, action) => {
            state.card.forEach(i => {
                if (i.id === action.payload) {
                    i.count--
                }
            })
        },
        
    },
})

export const { addCard , deleteCard,plusCount,minusCount } = cardSlice.actions

export default cardSlice.reducer