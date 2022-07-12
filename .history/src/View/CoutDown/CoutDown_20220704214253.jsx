import { useEffect, useState } from "react";
const CoutDown = () => {
  const [coutDown, setCoutDown] = useState(10);
  useEffect(() => {
    if (coutDown === 0) return;
    let timer = setInterval(() => {
      setCoutDown(coutDown - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [coutDown]);

  return (
    <>
      <div> Hook {coutDown}</div>
    </>
  );
};
export default CoutDown;
