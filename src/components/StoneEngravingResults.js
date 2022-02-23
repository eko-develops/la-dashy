const StoneEngravingResults = ({ userOptions }) => {
  console.log(userOptions);

  return (
    <div className="results-wrapper">
      <h3>Results</h3>
      <div className="results">
        <h4># Perfect Matches</h4>
        {userOptions.option1}
        <h4># Partial Matches</h4>
        {userOptions.option2}
      </div>
    </div>
  );
};

export default StoneEngravingResults;
