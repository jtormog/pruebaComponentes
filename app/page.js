import {
  CalendarIcon,
  HomeIcon,
  GlobeIcon,
  VideoIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: HomeIcon,
    name: "Inicio",
    description: "Sección de inicio",
    href: "/",
    cta: "Ir al inicio",
    background: <img src="https://static.vecteezy.com/system/resources/previews/035/952/532/non_2x/house-single-line-continuous-outline-art-drawing-and-simple-one-line-home-minimalist-design-vector.jpg" className=""/>,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-2",
  },
  {
    Icon: GlobeIcon,
    name: "3",
    description: "Bento card 3",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: CalendarIcon,
    name: "4",
    description: "Bento card 4",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-1 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: VideoIcon,
    name: "Rick roll",
    description:
      "Never gonna give you up",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    cta: "Never gonna let you down",
    background: <img src="rick_astley.jpg" className=" block mx-auto" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3 ",
  },
];

export default function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-2">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
