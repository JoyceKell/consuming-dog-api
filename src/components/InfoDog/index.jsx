import { useEffect, useState } from "react";
import api from "../../services/api";

export default function InfoDog({ id }) {
  const [dog, setDog] = useState({});
  const [imageDog, setImageDog] = useState("");

  function loadDog() {
    api
      .get(`/v1/breeds/${id}`)
      .then((response) => {
        api
          .get(`/v1/images/${response.data.reference_image_id}`)
          .then((res) => {
            setImageDog(res.data);
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
        setDog(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  useEffect(() => {
    loadDog();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div></div>
        <div className="flex flex-col">
          <div>{dog?.name}</div>
          <div>infos</div>aaa
          <img src={imageDog.url} />
        </div>
      </div>
    </>
  );
}
