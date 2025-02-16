"use client";
import { Footer } from "@/components/footer";
import Navbar from "@/components/ui/navbar";
import { SubNav } from "@/components/ui/subnav";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductItem } from "@/components/ui/ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

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

      <section>
        <div className="pt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products &&
            products.map((product, index) => (
              <ProductItem key={index} product={product}></ProductItem>
            ))}
        </div>
      </section>
      <div className="  bottom-0 w-full">
        {" "}
        <Footer />
      </div>
    </div>
  );
}
