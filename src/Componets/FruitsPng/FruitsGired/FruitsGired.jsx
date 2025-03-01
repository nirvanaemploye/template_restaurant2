import Mango from "../../../assets/FruitsPngImg/Png/Mango.png";
import Banana from "../../../assets/FruitsPngImg/Png/Bannaa.png";
import Apple from "../../../assets/FruitsPngImg/Png/Apple.png";
import Kiwi from "../../../assets/FruitsPngImg/Png/Kiwi.png";
import Pagination from "../../Shared/Pagination";

const products = [
  {
    id: 1,
    name: "Fresh Mango",
    price: 50,
    discount: null,
    text: "Lorem Ipsum is simply dummy text of the printing",
    image: Mango,
  },
  {
    id: 2,
    name: "Fresh Banana",
    price: 45,
    discount: 50,
    text: "Lorem Ipsum is simply dummy text of the printing",

    image: Banana,
    offer: true,
  },
  {
    id: 3,
    name: "Fresh Apple",
    price: 50,
    discount: null,
    text: "Lorem Ipsum is simply dummy text of the printing",

    image: Apple,
  },
  {
    id: 4,
    name: "Fresh Kiwi",
    price: 45,
    discount: 50,
    text: "Lorem Ipsum is simply dummy text of the printing",

    image: Kiwi,
    offer: true,
  },
  {
    id: 1,
    name: "Fresh Mango",
    price: 50,
    discount: null,
    text: "Lorem Ipsum is simply dummy text of the printing",
    image: Mango,
  },
  {
    id: 2,
    name: "Fresh Banana",
    price: 45,
    discount: 50,
    text: "Lorem Ipsum is simply dummy text of the printing",

    image: Banana,
    offer: true,
  },
  {
    id: 3,
    name: "Fresh Apple",
    price: 50,
    discount: null,
    text: "Lorem Ipsum is simply dummy text of the printing",

    image: Apple,
  },
  {
    id: 4,
    name: "Fresh Kiwi",
    price: 45,
    discount: 50,
    text: "Lorem Ipsum is simply dummy text of the printing",

    image: Kiwi,
    offer: true,
  },
];

const FruitsGired = () => {
  return (
    <>
      <section>
        <div className="container py-20 ">
          <div className="border-b p-3">
            <p className="text-sm ">Showing 1-8 of 20 Result </p>
          </div>
        </div>

        
          <div className="container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-14 pb-10 " >
            {products.map((product) => (
              <div
                key={product.id}
                className="shadow-md bg-white relative text-center flex flex-col space-y-6 items-center py-6 hover:border-primary duration-300 border-[1px] group"
              >
                <div className="object-cover bg-gray-100 rounded-md">

                <img
                  src={product.image}
                  alt={product.name}
                  className="group-hover:scale-125 duration-700 p-12"
                  />
                  </div>
                <h3 className="text-2xl font-semibold mt-3">{product.name}</h3>
                <div className="flex items-center space-x-3">
                  {product.discount && (
                    <p className="text-gray-400 line-through text-xl ">
                      ${product.discount}
                    </p>
                  )}
                  <p className=" text-green-600 font-bold text-2xl group-hover:text-secondary">
                    ${product.price}
                  </p>
                </div>
                <p className="text-lg  text-gray-500 px-7">{product.text}</p>
                {product.offer && (
                  <span className="absolute -top-10 h-20 w-20 flex items-center justify-center bg-primary/80 text-gray-900 group-hover:text-white text-xs rounded-full border-4 group-hover:border-dashed shadow-sm border-white p-2 group-hover:scale-110 duration-500 group-hover:bg-secondary group-hover:border-white group-hover:font-bold">
                    Special Offer
                  </span>
                )}
              </div>
            ))}
          </div>
         
        

        <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      </section>
    </>
  );
};

export default FruitsGired;
