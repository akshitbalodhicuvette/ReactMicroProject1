import "./App.css";
import CardForm from "./components/CardForm";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [validSubmit, setValidSubmit] = useState(false);

  return (
    <div className="App">
      <div className="flex">
        <div className="design">
          <CardBack cvc={formData.cvc} />
          <CardFront {...formData} />
        </div>
        <div className="container">
          {!validSubmit ? (
            <CardForm
              {...formData}
              setFormData={setFormData}
              setValidSubmit={setValidSubmit}
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
