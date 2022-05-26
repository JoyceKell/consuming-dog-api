import { useParams } from "react-router-dom";
import InfoDog from "../../components/InfoDog";

export default function About() {
  let { id } = useParams();

  return (
    <>
      <InfoDog id={id} />
      <div>voltar</div>
    </>
  );
}
