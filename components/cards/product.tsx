import Link from "next/link";
import Image from "next/image";

type Props = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
};
const Product = (props: Props) => {
  return (
    <Link href={`/products/${props.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg  max-w-sm">
        <div className="relative min-h-44 w-full">
          <Image
            fill
            src={props.thumbnail}
            className="w-full object-contain"
            alt={props.title}
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{props.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{props.description}</p>
          <div className="flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900 pr-1">
                ${props.discountPercentage}
              </span>
              <span className="text-sm text-slate-900 line-through">
                ${props.price}
              </span>
            </p>{" "}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
