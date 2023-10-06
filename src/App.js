import "./App.css";
import Item from "./components/Item";
import Cart from "./components/Cart";

function App() {
  return (
    <div className=" App App-header">
      <Item name="MacBook Pro" price={1000000} />
      <Item name="Pendrive" price={3000} />
      <Item name="Mobile" price={100000} />
      <Cart />
    </div>
  );
}

export default App;
