"use client";
import { Footer } from "@/components/footer";
import { Loading } from "@/components/Loading";
import Navbar from "@/components/ui/navbar";
import { productItemInterface } from "@/components/ui/ProductItem";
import axios from "axios";

import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
export default function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<productItemInterface>({
    id: "",
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id[1]}`)
      .then((res) => {
        console.log(res.data);
        setProduct({
          id: res.data.id,
          title: res.data.title,
          price: res.data.price,
          description: res.data.description,
          category: res.data.category,
          image: res.data.image,
          rating: {
            count: res.data.rating.count,
            rate: res.data.rating.rate,
          },
        });
        console.log("setted  a product", product);
      });
    console.log(product);
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <>
        <Navbar />
        <div className="pt-10 px-4 grid grid-rows-2 border md:grid-col-2 md:grid-cols-10  gap-5">
          <div className=" px-3 py-2 border  sm:col-start-1 sm:col-span-3 col-span-3   md:col-start-2 ">
            <img
              alt=""
              src={product.image}
              width={740}
              className="h-[500px] max-sm:h-36"
            />
          </div>
          <div className="md:col-start-5 md:col-span-3 ">
            <ul>
              <li>
                <h1 className="text-lg">{product.title}</h1>
                <div className="border-b h-1 "></div>
              </li>
              <li className="py-2">
                <span className="text-amber-600">Category:</span>{" "}
                {product.category}
              </li>
              <li>
                <div className="flex pb-2 flex-row">
                  {product.rating && product.rating.rate} of{" "}
                  {product.rating && product.rating.count} reviews
                </div>
              </li>
              <li>
                <div>
                  <div className="font-bold md:text-lg max-sm:text-base">
                    About this item:{" "}
                  </div>
                  <div className="font-base">{product.description}</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="border md:col-start-8 md:col-span-2 ">
            <div className="card p-5">
              <div className="pl-2 font-bold md:text-xl max-sm:text-base">
                ${product.price}
              </div>
              <div className="py-2">
                Free delivery.<span className="text-teal-500"> Details</span>
              </div>

              <div className="mb-2  flex  justify-between">
                <div>
                  {Math.random() < 0.5 ? (
                    <div className="text-lg max-md:text-base text-green-700">
                      In Stocks
                    </div>
                  ) : (
                    <div className="text-lg max-md:text-base text-red-500">
                      Unavailable
                    </div>
                  )}
                </div>
              </div>
              <div
                className=" font-bold text-slate-500 border rounded-xl p-2 mb-5 bg-slate-200 w-full"
                // onClick={addToCartHandler}
              >
                Quantity: 1
              </div>
              <div className="flex flex-col gap-3">
                <button
                  className="primary-button rounded-3xl text-slate-900 text-bold bg-yellow-400 py-2 w-full"
                  // onClick={addToCartHandler}
                >
                  Add to cart
                </button>
                <button
                  className="primary-button rounded-3xl text-slate-900 text-bold bg-yellow-600 py-2 w-full"
                  // onClick={addToCartHandler}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </Suspense>
  );
}
