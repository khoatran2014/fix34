import './App.css';

function App() {
  const arrNums = [1, 3, 1, 4];
  const fix34 = (nums) => {
    let tmp = 0;
    for (let i = 0; i < nums.length; i++)
      for (let j = 0; j < nums.length; j++)
        if (nums[i] === 4 && nums[j] === 3) {
          tmp = nums[j + 1];
          nums[j + 1] = nums[i];
          nums[i] = tmp;
        }
    return nums;
  };
  return (
    <div className="App">
      {fix34(arrNums)}
    </div>
  );
}

export default App;
