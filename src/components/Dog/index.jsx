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
      <div>
        <img src={dogs[currentIndex]?.image.url} alt="" />
        <span>{dogs[currentIndex]?.name}</span>
      </div>
      <button onClick={handleOnPrevClick}>Previous</button>
      <button onClick={handleOnNextClick}>Next</button>
    </>
  );
}
