"use client";

import { useState, useEffect } from "react";

type Product = {
  _id: string;
  name: string;
  image: string;
  price: number;
  discountPrice: number;
  saleOffer: string;
};

export default function Gallery() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data: Product[] = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="gallery">
      <div className="contacts d-flex padding-c justify txt-color">
        <div>
          <h1>WEAVE</h1>
        </div>
        <div>+923485580418</div>
        <div>+923456778954</div>
      </div>
      {Array.from({ length: Math.ceil(products.length / 3) }).map(
        (_, rowIndex) => (
          <div className="d-flex card-m justify txt-color" key={rowIndex}>
            {products
              .slice(rowIndex * 3, rowIndex * 3 + 3)
              .map((product) => (
                <div className="card" key={product._id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-image"
                  />

                  <h3>{product.name}</h3>

                  <p className="sale-offer txt-color">{product.saleOffer}</p>

                  <p className="price txt-color">
                    ₹{product.price}{" "}
                    <span className="discount txt-color">
                      ₹{product.discountPrice}
                    </span>
                  </p>
                  <button className="btn-buy">Buy</button>
                </div>
              ))}
          </div>
        )
      )}
    </div>
  );
}
