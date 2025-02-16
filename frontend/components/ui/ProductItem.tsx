import Link from "next/link";
export type ProductItemsProps = {
  product: productItemInterface;
};
export type ratingType = {
  rate: number;
  count: number;
};
export interface productItemInterface {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: ratingType;
}
export const ProductItem = ({ product }: ProductItemsProps) => {
  return (
    <div className="card">
      <Link href={`product/${product.id}`}>
        <img
          src={product.image}
          alt={product.category}
          className="rounded shadow object-cover h-64 w-full"
        />
      </Link>
      <div className="flex gap-2 min-h-30 border flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg">
            {product.title.length > 60
              ? product.title.slice(1, 60)
              : product.title}
          </h2>
        </Link>
        <button
          className="primary-button font-medium max-sm:font-normal w-full py-1 bg-yellow-500 rounded-md"
          type="button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
