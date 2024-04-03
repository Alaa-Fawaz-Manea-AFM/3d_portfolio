import { Loader_Icon } from "@/public/assets";
import Image from "next/image";

const LoaderCircle = () => (
  <span className="flex items-center justify-center w-full">
    <Image src={Loader_Icon} alt="" width={20} height={20} />
  </span>
);

export default LoaderCircle;
