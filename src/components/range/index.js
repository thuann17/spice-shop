import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import nouislider from "nouislider";
import "nouislider/dist/nouislider.css";
import "./style.css";

const RangeSlider = () => {
  const [minValue, setMinValue] = useState(250);
  const [maxValue, setMaxValue] = useState(750);

  const sliderRef = useRef(null);
  const minInputRef = useRef(null);
  const maxInputRef = useRef(null);

  useEffect(() => {
    const sliderInstance = nouislider.create(sliderRef.current, {
      start: [minValue, maxValue],
      range: {
        min: 0,
        max: 1000,
      },
      connect: true,
      tooltips: true,
      format: {
        to: (value) => Math.round(value),
        from: (value) => parseInt(value, 10),
      },
    });

    sliderInstance.on("update", (values) => {
      setMinValue(Math.round(values[0]));
      setMaxValue(Math.round(values[1]));
    });

    const updateSlider = () => {
      sliderInstance.set([minValue, maxValue]);
    };

    if (minInputRef.current && maxInputRef.current) {
      minInputRef.current.addEventListener(
        "input",
        _.debounce(() => {
          setMinValue(parseInt(minInputRef.current.value, 10));
          updateSlider();
        }, 200)
      );

      maxInputRef.current.addEventListener(
        "input",
        _.debounce(() => {
          setMaxValue(parseInt(maxInputRef.current.value, 10));
          updateSlider();
        }, 200)
      );
    }

    return () => {
      sliderInstance.destroy();
    };
  }, [minValue, maxValue]);

  return (
    <>
      <div
        id="hs-pass-values-to-inputs"
        ref={sliderRef}
        className="w-full h-2 bg-border rounded-md"
      />

      {/* Price Inputs */}
      <div className="flex justify-between mt-5">
        <div className="w-full mr-2">
          <label
            htmlFor="min-price"
            className="block text-sm font-medium text-textMain mb-2"
          >
            Min price: {minValue}
          </label>
        </div>
        <div className="w-full ml-2">
          <label
            htmlFor="max-price"
            className="block text-sm font-medium text-textMain mb-2"
          >
            Max price: {maxValue}
          </label>
        </div>
      </div>
    </>
  );
};

export default RangeSlider;
