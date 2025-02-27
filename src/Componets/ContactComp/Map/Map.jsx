import MapImg from "../../../assets/ContactPngImg/Map.png";

const Map = () => {
  return (
    <>
      <section>
        <div className="container py-32 flex justify-center px-5">
          <img 
            src={MapImg} 
            alt="Map showing our location" 
            className="sm:h-full md:w-full max-w-screen-lg" 
          />
        </div>
      </section>
    </>
  );
}

export default Map;
