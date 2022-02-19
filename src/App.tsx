import { Helmet } from "react-helmet";
import "./App.css";
import Header from "./components/header/Header";
import Students from "./components/students";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CBUK Coding Challenge UI</title>
        <link rel="canonical" href="" />
        <script
          src="https://kit.fontawesome.com/96c8bf03d5.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <Header />
      <Students />
    </div>
  );
}

export default App;
