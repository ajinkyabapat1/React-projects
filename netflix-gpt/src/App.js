import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import {Provider} from "react-redux"
import appStore from "./state-management/appStore";
function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
