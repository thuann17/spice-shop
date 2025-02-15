import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />
      
      {/* Body */}
      <Body />
    </div>
   


  );
}

export default App;