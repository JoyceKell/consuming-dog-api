import Dog from "../../components/Dog";

export default function Main() {
  return (
    <>
      <div className="flex justify-center m-20">
        <span className="text-4xl font-mono transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
          Aprenda mais sobre as raças dos doguinhos!
        </span>
      </div>
      <Dog />
    </>
  );
}
