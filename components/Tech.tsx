import { technologies } from "@/constant";
import { Ball } from ".";

const Tech = () => (
  <div className="sm:px-16 px-6 sm:py-16 py-10 flex items-center justify-center flex-wrap gap-10">
    {technologies.map(({ src }) => (
      <div className="w-28 h-28" key={src}>
        <Ball src={src} />
      </div>
    ))}
  </div>
);

export default Tech;
