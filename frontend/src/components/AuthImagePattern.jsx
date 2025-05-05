import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

const AuthImagePattern = ({ title, subtitle }) => {
  const pattern = [
    { type: "shape", color: "bg-cyan-400", rounded: "rounded-tl-full" },
    { type: "img", src: img1, bg: "bg-orange-400", rounded: "rounded-t-full" },
    { type: "shape", color: "bg-green-400", rounded: "rounded-full" },
    { type: "img", src: img2, bg: "bg-purple-400", rounded: "rounded-tr-full" },

    { type: "img", src: img3, bg: "bg-yellow-200", rounded: "rounded-bl-full" },
    { type: "shape", color: "bg-purple-400", rounded: "rounded-l-full" },
    { type: "img", src: img4, bg: "bg-pink-300", rounded: "rounded-full" },
    { type: "shape", color: "bg-orange-400", rounded: "rounded-r-full" },

    { type: "shape", color: "bg-pink-300", rounded: "rounded-br-full" },
    { type: "img", src: img5, bg: "bg-green-400", rounded: "rounded-full" },
    { type: "shape", color: "bg-yellow-300", rounded: "rounded-bl-full" },
    { type: "img", src: img6, bg: "bg-cyan-400", rounded: "rounded-br-full" },
  ];

  return (
    <div className="hidden lg:flex items-center justify-center p-12">
      <div className="text-center">
        <div className="grid grid-cols-4 gap-4 mb-8">
          {pattern.map((item, idx) => (
            <div key={idx} className="w-[8.5vw] h-[19vh] overflow-hidden relative">
              {item.type === "shape" ? (
                <div className={`w-full h-full ${item.color} ${item.rounded}`} />
              ) : (
                <div className={`w-full h-full ${item.bg} ${item.rounded}`}>
                  <img
                    src={item.src}
                    alt={`img-${idx}`}
                    className={`w-full h-full object-cover ${item.rounded}`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold  mb-2">{title}</h2>
        <p className="text-base /70">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
