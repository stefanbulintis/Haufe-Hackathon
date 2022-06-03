import React, { useEffect, useState } from 'react';

function DeleteMe() {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const imageUrl = "https://thumbs.dreamstime.com/b/collection-recycling-bins-garbage-organic-paper-glass-metal-plastic-waste-containers-segregation-trash-management-vector-186918636.jpg";
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };
  
  useEffect(() => {
    fetchImage();
  }, []);

  return (
      <img 
      src={img}
      alt="garbage" 
      style={{ width: "100%", height: "40vh"}}
      />
  );
}

export default DeleteMe;