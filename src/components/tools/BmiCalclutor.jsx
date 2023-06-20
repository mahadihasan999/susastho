import { useState } from "react";

const BmiCalclutor = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState("");

  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = (weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);
    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 25) return "Healthy";
    else if (bmi >= 25 && bmi < 30) return "Overweight";
    else return "obese";
  }

  return (
    <div className="BmiCalclutor container mx-auto p-4 items-center">
      <div className="r">
        <form className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="height">
              Height(cm)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="height"
              type="number"
              placeholder="e.g., 169"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="weight">
              Weight(kg)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              type="number"
              placeholder="e.g., 68"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={calculateBMI}
            >
              Calculate
            </button>
          </div>
          {bmiResult > 15 && (
            <div className="mt-5 text-center text-blue-800">
              <p>
                Your BMI is <span className="strong">{bmiResult}</span>.
              </p>
              <p>
                You are <span className="strong">{status}</span>.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BmiCalclutor;
