import { useEffect, useState } from "react";
const CoutDown = () => {
  const [coutDown, setCoutDown] = useState(10);
  return (
    <>
      <div> Hook {coutDown}</div>
    </>
  );
};
export default CoutDown;
