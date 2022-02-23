import engravingsList from "../data/engravingsList";

const StoneEngraving = () => {
  const selectEngravings = (
    <select>
      {engravingsList.map((engraving, i) => (
        <option key={i} value={engraving}>
          {engraving}
        </option>
      ))}
    </select>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstSelect = e.target[0].value;
    const secondSelect = e.target[1].value;
    console.log({ firstSelect, secondSelect });
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
          <h3>Results</h3>
        </div>
      </div>
    </>
  );
};

export default StoneEngraving;
