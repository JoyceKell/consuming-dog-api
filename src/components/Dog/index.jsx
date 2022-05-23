import { useState, useEffect } from "react";
import api from "../../services/api";

let count = 0;

export default function Dog() {
  const [dogs, setDogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    count = (count + 1) % dogs.length;
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const productsLength = dogs.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  useEffect(() => {
    api
      .get("/v1/breeds")
      .then((response) => {
        setDogs(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center place-items-center ">
        <div className="flex flex-col">
          <img
            className="object-fill h-64 w-64 rounded-full"
            src={dogs[currentIndex]?.image.url}
            alt="cachorrinhos"
          />
          <span className="text-center font-serif m-5">
            {dogs[currentIndex]?.name}
          </span>
          <div className="text-center">
            <button
              className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded m-2"
              onClick={handleOnPrevClick}
            >
              Previous
            </button>
            <button
              className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded m-2"
              onClick={handleOnNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
