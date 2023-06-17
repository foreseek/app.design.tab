import { configureStore } from "@reduxjs/toolkit";
import rendererSlice from "./slices/renderer_slice";

const store = configureStore({
    reducer: {
        renderer: rendererSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;