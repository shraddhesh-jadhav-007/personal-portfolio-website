import React from 'react';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = ({ strings }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed: 20,
      // backSpeed: 30,
      loop: false,
      showCursor: false,
    });

    return () => typed.destroy();
  }, [strings]);

  return (
    <div id='TypingTxt' className="max-[420px]:hidden || mt-[3.73rem] sm:mt-[4.0rem] md:mt-[4.0rem lg:mt-[4.25rem] || p-1 border-b-2 border-t-2 mask-t-from-100% mask-b-from-99% border-gray-800 flex justify-center shadow-2xl bg-gray-600 text-white ">
      <h1 className="flex items-center justify-center text-base font-semibold">
        <span  ref={el}></span>
      </h1>
    </div>
  );
};

export default TypedText;
