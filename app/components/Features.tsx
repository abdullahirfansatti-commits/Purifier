"use client";

import { useState, useEffect } from "react";

type Feature = {
  _id: string; 
  title: string;
  IsActive : string;
};

export default function Features() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeatures();
  }, []);
  const fetchFeatures = async () => {
    try {
      const res = await fetch("/api/feature");
      const data: Feature[] = await res.json();
      setFeatures(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching features:", error);
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="f-body">
      <div className="relative">
        <div className="absolute1">
          <h1>Features:</h1>
          <ul>
            {features.slice(0,5).map((feature) => (
              <li key={feature._id}>
                {feature.title}
                {feature.IsActive}
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute2">
          <div className="g-weave1 c10">
            <span className="g-weave">Weave</span>
              <span className="g-weave">Weave</span>
                <span className="g-weave">Weave</span>
                  <span className="g-weave">Weave</span>
                    <span className="g-weave">Weave</span>
                      <span className="g-weave">Weave</span>
          </div>
        </div>
      </div>
      <div className="d-flex m-c8">
        <div className="c8">
         
        </div>
        
        <div className="w-size">
          <h1>Weave</h1>
        </div>
        <div className="c9 m-purifier">
            <img src="purifier.jpg" className="rotation" alt="purifier" />
        </div>
       
      </div>
    </div>
  );
}
