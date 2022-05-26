import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function Dog() {
  const [dogs, setDogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  let count = currentIndex;

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
      <div className="flex justify-center">
        <div className="flex flex-col">
          <img
            className="h-64 w-64 rounded-full"
            src={dogs[currentIndex]?.image.url}
            alt="cachorrinhos"
          />
          <span className="text-1xl text-center font-serif mt-3 max-w-xs">
            {dogs[currentIndex]?.name}
          </span>

          <Link
            className="text-center m-3 font-serif underline text-green-800 hover:text-green-600 visited:text-purple-600"
            to={`/sobre/${currentIndex + 1}`}
          >
            Saber mais
          </Link>

          <div className="text-center">
            <button
              className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded m-2"
              onClick={handleOnPrevClick}
            >
              Anterior
            </button>
            <button
              className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded m-2"
              onClick={handleOnNextClick}
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
