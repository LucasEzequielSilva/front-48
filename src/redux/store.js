import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './reducers/inputReducer'
import mangaReducer from './reducers/mangaReducer'
export const store = configureStore ({
reducer: {
    input: inputReducer,
    mangas: mangaReducer
}
})