import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface RendererState {
    value: number
}

const initialState: RendererState = {
    value: 0,
}

export const rendererSlice = createSlice({
    name: 'renderer',
    initialState,
    reducers: {
        inc: state => { state.value++ }
    }
})

export const { inc } = rendererSlice.actions;
export const selectValue = (state: RootState) => state.renderer.value;
export default rendererSlice.reducer;