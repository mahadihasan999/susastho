import React, { useState } from "react";

const CalorieCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [calories, setCalories] = useState(0);

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleActivityLevelChange = (e) => {
    setActivityLevel(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let calculatedCalories = 0;

    if (gender === "male") {
      calculatedCalories = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      calculatedCalories = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    switch (activityLevel) {
      case "sedentary":
        calculatedCalories *= 1.2;
        break;
      case "lightlyActive":
        calculatedCalories *= 1.375;
        break;
      case "moderatelyActive":
        calculatedCalories *= 1.55;
        break;
      // Add more cases for other activity levels if needed
      default:
        break;
    }

    setCalories(calculatedCalories.toFixed(2));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Calorie Calculator</h1>
      <div className="flex lg:flex-row md:flex-row flex-col gap-5 justify-center items-center">
        <div className="lg:w-3/5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="weight">
                Weight (in kg):
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="number"
                id="weight"
                value={weight}
                onChange={handleWeightChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="height">
                Height (in cm):
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="number"
                id="height"
                value={height}
                onChange={handleHeightChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="age">
                Age:
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="number"
                id="age"
                value={age}
                onChange={handleAgeChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="gender">
                Gender:
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                id="gender"
                value={gender}
                onChange={handleGenderChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="activityLevel">
                Activity Level:
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                id="activityLevel"
                value={activityLevel}
                onChange={handleActivityLevelChange}
              >
                <option value="sedentary">Sedentary</option>
                <option value="lightlyActive">Lightly Active</option>
                <option value="moderatelyActive">Moderately Active</option>
                {/* Add more activity level options if needed */}
              </select>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Calculate
            </button>
          </form>

          <div className="mt-4">
            <p>Your daily calorie needs: {calories}</p>
          </div>
        </div>
        <div className="lg:w-2/5">
          <h1 className="text-2xl">
            <span className="primary-color text-3xl">ক্যালোরি ক্যালকুলেটর</span>{" "}
            আপনাকে আপনার উচ্চতা, ওজন এবং শারীরিক ক্রিয়াকলাপের উপর নির্ভর করে
            আপনার দেহের দৈনিক যে পরিমাণ শক্তি প্রয়োজন তা গণনা করতে দেয় allows
            এছাড়াও, ক্যালোরি ক্যালকুলেটরের এই সংস্করণ, গণনার ফলাফল হিসাবে, ওজন
            হ্রাস, ওজন বৃদ্ধি, ওজন রক্ষণাবেক্ষণ, পাশাপাশি দ্রুত ওজন হ্রাস এবং
            চরম ওজন হ্রাসের জন্য প্রয়োজনীয় ক্যালোরির সংখ্যা প্রদান করবে।
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculator;
