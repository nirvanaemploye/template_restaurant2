import MapImg from "../../../assets/ContactPngImg/Map.png";

const Map = () => {
  return (
    <>
      <section>
        <div className="px-5 py-32 flex justify-center">
          <img 
            src={MapImg} 
            alt="Map showing our location" 
            className="" 
          />
        </div>
      </section>
    </>
  );
}

export default Map;
