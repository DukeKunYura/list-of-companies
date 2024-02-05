import { Provider } from "react-redux";
import "./App.css";
import { Header } from "./components/header/Header";
import { store } from "./redux/store";
import { Main } from "./components/main/Main";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
