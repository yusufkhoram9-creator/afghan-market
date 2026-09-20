import { Diamond } from "lucide-react";

const ITEMS = [
  "Afghan Market",
  "Fresh Naan Daily",
  "775 High Rd, North Finchley",
  "Halal Asian Grocery",
  "Tandoor Oven Hot",
  "Grab It, Bag It, Go",
];

export default function Ribbon() {
  const row = (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="font-display italic text-xl sm:text-3xl px-6 sm:px-10 whitespace-nowrap">{item}</span>
          <Diamond size={12} className="text-[#e39832] shrink-0" fill="currentColor" />
        </span>
      ))}
    </div>
  );

  return (
    <div data-testid="editorial-ribbon" className="overflow-hidden bg-[#1a533e] text-[#faf7f2] py-5 sm:py-7 border-y border-[#e39832]/30">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
