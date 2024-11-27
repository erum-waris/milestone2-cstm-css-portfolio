"use client";

import Image from 'next/image';

const images = [
    { path: "/images/ts.png", name: "TypeScript Logo "},
    { path: "/images/bootstrap.png", name: "Bootstrape Logo "},
    { path: "/images/js.png", name: "JavaScript Logo "},
    { path: "/images/tailwind.png", name: "Tailwind Logo"},
    { path: "/images/nextjs.png", name: "Nextjs Logo "},
  { path: "/images/html.png", name: "HTML Logo"},
    { path: "/images/css.png", name: "CSS Logo"},
    { path: "/images/reactjs.png", name: "CSS Logo"},
];

 const ImageSlider: React.FC = () => {
  return (
    

  <div className="container grid">
    {images.map((image, index) => (
      <div key={index} className="grid-box">
      
           
                <Image
                src={image.path}
                alt={image.name}
                width={300}
                height={300}
                
                object-fit="contain"
               
/>
       </div>
    ))}
  </div>
  

      
      
  )       
};



export default ImageSlider;