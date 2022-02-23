import { useState } from "react";
import engravingsList from "../data/engravingsList";
import StoneEngravingResults from "./StoneEngravingResults";

const StoneEngraving = () => {
  const [userOptions, setUserOptions] = useState({
    option1: null,
    option2: null,
  });

  const selectEngravings = (
    <select>
      <option hidden disabled selected value>
        -- Select an engraving --
      </option>
      {engravingsList.map((engraving, i) => (
        <option key={i} value={engraving}>
          {engraving}
        </option>
      ))}
    </select>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const option1 = e.target[0].value;
    const option2 = e.target[1].value;

    setUserOptions((prevState) => ({
      ...prevState,
      option1,
      option2,
    }));
  };

  return (
    <>
      <h2>Stone Engravings</h2>
      <div className="page-description">
        <p>Check the engravings on your stones.</p>
        <div className="how-it-works-section">
          <h3>How It Works</h3>
          <ul>
            <li>
              <p>Enter the engravings on your stone in the form.</p>
            </li>
            <li>
              <p>
                Any stone that has a perfect match is worth selling on the
                market for gold, including T1 stones.
              </p>
            </li>
            <li>
              <p>
                A stone that has a partial match is worth keeping for an alt or
                you can dismantle it.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="stone-engraving-form-wrapper">
        <form onSubmit={handleSubmit}>
          <label>First Engraving</label>
          {selectEngravings}
          <label>Second Engraving</label>
          {selectEngravings}
          <button type="submit">Check</button>
        </form>
        <div className="stone-engraving-results">
          <StoneEngravingResults userOptions={userOptions} />
        </div>
      </div>
    </>
  );
};

export default StoneEngraving;
