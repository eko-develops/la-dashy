const StoneEngraving = () => {
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
        <form>
          <label>First Engraving</label>
          <select id="standard-select">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
            <option value="Option length">
              Option that has too long of a value to fit
            </option>
          </select>
          <label>Second Engraving</label>
        </form>
      </div>
    </>
  );
};

export default StoneEngraving;
