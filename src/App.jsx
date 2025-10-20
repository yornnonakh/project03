import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email);
  }
  return (
    <form>
      <h2>Submit Form</h2>
      <div>
        <label htmlFor="name">Full Name</label>
        <input value={name} onChange={handleName} id="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={handleEmail} id="email" type="email" />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submite
      </button>
    </form>
  );
};

export default App;
