import React, { useState, useEffect, useRef } from "react";

const Branding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const data = [
    {
      id: "500",
      heading: "Available Cars",
      desc:
        "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "900",
      heading: "Happy Clients",
      desc:
        "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "1500",
      heading: "Team Workers",
      desc:
        "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "2000",
      heading: "New Feature",
      desc:
        "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "2500",
      heading: "Quality Assurance",
      desc:
        "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "3000",
      heading: "Customer Support",
      desc:
        "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "3500",
      heading: "New Arrival",
      desc:
        "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "4000",
      heading: "Special Offer",
      desc:
        "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "4500",
      heading: "Test Drive",
      desc:
        "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "5000",
      heading: "Luxury Cars",
      desc:
        "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [data.length]);

  useEffect(() => {
    const sliderContainer = sliderRef.current;
    sliderContainer.scrollTo({
      left: sliderContainer.clientWidth * currentSlide,
      behavior: "smooth",
    });
  }, [currentSlide]);

  return (
    <>
      <section className="Slider">
        <div className="slider-container" ref={sliderRef}>
          {data.map((value, index) => (
            <div
              key={index}
              className={`slider-item ${index === currentSlide ? "active" : ""}`}
            >
              <img src={`/assets/image${index + 1}.jpg`} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ... */}
    </>
  );
};

export default Branding;
