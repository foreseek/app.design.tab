import { useAppDispatch, useAppSelector } from "./app/hooks";
import { inc } from "./app/slices/renderer_slice";

const App = () => {
  const renderer = useAppSelector((state) => state.renderer.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <p>{renderer}</p>
      <button onClick={() => dispatch(inc())}>inc</button>
    </>
  );
};

export default App;
