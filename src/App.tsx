import { deIncrementFontSize, incrementFontSize } from "./redux/FontSize";
import { setDark } from "./redux/ThemeSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";

function App() {
  const dark = useAppSelector((state: RootState) => state.theme.dark);
  const fontSize = useAppSelector((state: RootState) => state.fontsize.fontSize);
  const dispatch = useAppDispatch();

  return (
    <div className={`p-[10px] ${dark ? "bg-black" : "bg-white"}`}>
      <span className={`${dark ? "text-white" : "text-black"}`}  style={{ fontSize: `${fontSize}px` }}>
        <button
          style={{ marginRight: "1rem" }}
          onClick={() => dispatch(setDark())}
        >
          {dark ? "Темная тема" : "Белая тема"}
        </button>
      </span>
      <div className="p-[10px] flex gap-[10px]">
      <button onClick={() => dispatch(deIncrementFontSize())} className={`${dark ? "text-white" : "text-black"}`}>минус</button>
      <button onClick={() => dispatch(incrementFontSize())} className={`${dark ? "text-white" : "text-black"}`}>Плюс</button>
      </div>
    </div>
  );
}

export default App;
