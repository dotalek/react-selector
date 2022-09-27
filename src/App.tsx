import { useState } from "react";
import { SelectOption, Select } from "./Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function App() {
  const [singleValue, setSingleValue] = useState<SelectOption | undefined>(
    options[0],
  );
  const [multipleValue, setMultipleValue] = useState<SelectOption[]>([
    options[0],
  ]);

  return (
    <div className="App">
      <Select
        options={options}
        value={singleValue}
        onChange={(o) => setSingleValue(o)}
      />
      <br />
      <Select
        multiple
        options={options}
        value={multipleValue}
        onChange={(o) => setMultipleValue(o)}
      />
    </div>
  );
}

export default App;
