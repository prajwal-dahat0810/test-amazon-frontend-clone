"use client";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/Hero";
import { Carousel } from "@/components/ui/carousel";
import Navbar from "@/components/ui/navbar";
import { SubNav } from "@/components/ui/subnav";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/carousel";
import Link from "next/link";
import { ProductItem } from "@/components/ui/ProductItem";

const data = [
  {
    category: "Home inventory",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "<DummyContent />",
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "<DummyContent />,",
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "<DummyContent />,",
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "<DummyContent />,",
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "<DummyContent />,",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "<DummyContent />,",
  },
];

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  if (products.length === 0) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        Loading...
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <section>
        <Navbar className="rounded-none" />
        <SubNav />
      </section>
      {/* <section>
        <div className="max-sm:sr-only">
          <Carousel items={cards} />
        </div>
      </section> */}
      <section>
        {/* <div className="w-full p-4 bg-slate-300  h-full">
          <div>Hot Release in this Day</div>
          <div className="w-full h-full grid grid-cols-5 grid-rows-5">
            <div className="border grid-cols-2 col-span-1 grid-flow-col">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt=""
              />
              <div className="px-2 ">Mens Casual Premium Slim Fit T-Shirts</div>
            </div>
          </div>
        </div> */}
        <div className="pt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products &&
            products.map((product) => (
              <ProductItem product={product}></ProductItem>
            ))}
        </div>
        {/* <div className="card">
          {" "}
          hi there
          <Link href={`/product/`}>
            <img
              src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
              alt={"product.name"}
              className="rounded shadow object-cover w-11 h-64 w-full"
            />
          </Link>
          <div className="flex flex-col items-center justify-center p-5">
            <Link href={`/product/`}>
              <h2 className="text-lg">{"product.name"}</h2>
            </Link>
            <p className="mb-2">{"product.brand"}</p>
            <p>${"product.price"}</p>
            <button
              className="primary-button"
              type="button"
              // onClick={() => addToCartHandler(product)}
            >
              Add to cart
            </button>
          </div>
        </div> */}
      </section>
      <div className="  bottom-0 w-full">
        {" "}
        <Footer />
      </div>
    </div>
  );
}
