import React from 'react'
import { useEffect, useState } from "react";

const Service = () => {
      const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    
    <div>
      <h1 className="text-2xl font-bold mb-4">Home Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map(s => (
          <div key={s.id} className="border p-3 rounded shadow">
            <h2>{s.name}</h2>
            <p>Category: {s.category}</p>
            <p>Price: {s.price}</p>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Service
