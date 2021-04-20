import React, { useState, useEffect } from "react";

const Menu = () => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:59783/api/galleries")
      .then((res) => res.json())
      .then((gallery) => setGalleries(gallery));
  }, []);

  return (
    <div>
      <select>
        {galleries.map((gallery) => (
          <option key={gallery.Id} value={gallery.Id}>
            {gallery.Name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Menu;
