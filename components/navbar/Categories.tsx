import { useState, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

type Props = {};

function Categories({}: Props) {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  // Handle scroll state to dynamically add/remove the class
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    let timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 200); // Reset after 200ms
    };

    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        ref={scrollContainerRef}
        className={`overflow-x-auto ${isScrolling ? "scroll-active" : ""} custom-scrollbar`}
      >
        <div className="pt-4 flex flex-row items-center space-x-4">
          {categories.map((items) => (
            <CategoryBox
              key={items.label}
              icon={items.icon}
              label={items.label}
              selected={category === items.label}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Categories;






// import { usePathname, useSearchParams } from "next/navigation";
// import { BsArrowRightCircle, BsSnow } from "react-icons/bs";
// import { FaSkiing } from "react-icons/fa";
// import {
//   GiBarn,
//   GiBoatFishing,
//   GiCactus,
//   GiCastle,
//   GiCaveEntrance,
//   GiForestCamp,
//   GiIsland,
//   GiWindmill,
// } from "react-icons/gi";
// import { IoDiamond } from "react-icons/io5";
// import { MdOutlineVilla } from "react-icons/md";
// import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
// import CategoryBox from "../CategoryBox";
// import Container from "../Container";

// export const categories = [
//   { label: "Beach", icon: TbBeach, description: "This property is close to the beach!" },
//   { label: "Windmills", icon: GiWindmill, description: "This property has windmills!" },
//   { label: "Modern", icon: MdOutlineVilla, description: "This property is modern!" },
//   { label: "Countryside", icon: TbMountain, description: "This property is in the countryside!" },
//   { label: "Pools", icon: TbPool, description: "This property has a beautiful pool!" },
//   { label: "Islands", icon: GiIsland, description: "This property is on an island!" },
//   { label: "Lake", icon: GiBoatFishing, description: "This property is near a lake!" },
//   { label: "Skiing", icon: FaSkiing, description: "This property has skiing activities!" },
//   { label: "Castles", icon: GiCastle, description: "This property is an ancient castle!" },
//   { label: "Caves", icon: GiCaveEntrance, description: "This property is in a spooky cave!" },
//   { label: "Camping", icon: GiForestCamp, description: "This property offers camping activities!" },
//   { label: "Arctic", icon: BsSnow, description: "This property is in an arctic environment!" },
//   { label: "Desert", icon: GiCactus, description: "This property is in the desert!" },
//   { label: "Barns", icon: GiBarn, description: "This property is in a barn!" },
//   { label: "Lux", icon: IoDiamond, description: "This property is brand new and luxurious!" },
//   { label: "Lux", icon: IoDiamond, description: "This property is brand new and luxurious!" },
//   { label: "Lux", icon: IoDiamond, description: "This property is brand new and luxurious!" },
//   { label: "Lux", icon: IoDiamond, description: "This property is brand new and luxurious!" },
//   { label: "Lux", icon: IoDiamond, description: "This property is brand new and luxurious!" },
//   { label: "Lux", icon: IoDiamond, description: "This property is brand new and luxurious!" },
//   { label: "Lux", icon: IoDiamond, description: "This property is brand new and luxurious!" },
// ];

// type Props = {};

// function Categories({}: Props) {
//   const params = useSearchParams();
//   const category = params?.get("category");
//   const pathname = usePathname();

//   const isMainPage = pathname === "/";

//   if (!isMainPage) {
//     return null;
//   }

//   // Scroll left and right logic
//   const scrollContainer = (direction: "left" | "right") => {
//     const container = document.getElementById("category-container");
//     if (container) {
//       const scrollAmount = direction === "right" ? 200 : -200; // Change 200 to control scroll speed
//       container.scrollBy({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <Container>
//       <div className="relative pt-4 flex items-center justify-between">
//         {/* Left Arrow */}
//         <button
//           onClick={() => scrollContainer("left")}
//           className="absolute left-0 p-2 w-10 h-10 text-gray-600 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
//         >
//           <BsArrowRightCircle />
//         </button>

//         {/* Category Menu */}
//         <div
//           id="category-container"
//           className="flex flex-row items-center justify-between overflow-x-auto space-x-4 py-2"
//         >
//           {categories.map((item) => (
//             <CategoryBox
//               key={item.label}
//               icon={item.icon}
//               label={item.label}
//               selected={category === item.label}
//             />
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={() => scrollContainer("right")}
//           className="absolute right-0 w-10 h-10 flex items-center justify-center text-gray-600 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
//         >
//           <BsArrowRightCircle className="w-7 h-7" />
//         </button>
//       </div>
//     </Container>
//   );
// }

// export default Categories;



// import { useState, useEffect, useRef } from "react";
// import { usePathname, useSearchParams } from "next/navigation";
// import { BsArrowLeftCircle, BsArrowRightCircle, BsSnow } from "react-icons/bs";
// import { FaSkiing } from "react-icons/fa";
// import {
//   GiBarn,
//   GiBoatFishing,
//   GiCactus,
//   GiCastle,
//   GiCaveEntrance,
//   GiForestCamp,
//   GiIsland,
//   GiWindmill,
// } from "react-icons/gi";
// import { IoDiamond } from "react-icons/io5";
// import { MdOutlineVilla } from "react-icons/md";
// import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
// import CategoryBox from "../CategoryBox";
// import Container from "../Container";

// export const categories = [
//   { label: "Beach", icon: TbBeach, description: "This property is close to the beach!" },
//   { label: "Windmills", icon: GiWindmill, description: "This property has windmills!" },
//   { label: "Modern", icon: MdOutlineVilla, description: "This property is modern!" },
//   { label: "Countryside", icon: TbMountain, description: "This property is in the countryside!" },
//   { label: "Pools", icon: TbPool, description: "This property has a beautiful pool!" },
//   { label: "Islands", icon: GiIsland, description: "This property is on an island!" },
//   { label: "Lake", icon: GiBoatFishing, description: "This property is near a lake!" },
//   { label: "Skiing", icon: FaSkiing, description: "This property has skiing activities!" },
//   { label: "Castles", icon: GiCastle, description: "This property is an ancient castle!" },
//   { label: "Caves", icon: GiCaveEntrance, description: "This property is in a spooky cave!" },
//   { label: "Camping", icon: GiForestCamp, description: "This property offers camping activities!" },
//   { label: "Arctic", icon: BsSnow, description: "This property is in an arctic environment!" },
//   { label: "Desert", icon: GiCactus, description: "This property is in the desert!" },
//   { label: "Barns", icon: GiBarn, description: "This property is in a barn!" },
//   { label: "Lux", icon: IoDiamond, description: "This property is brand new and luxurious!" },
//   { label: "Camping", icon: GiForestCamp, description: "This property offers camping activities!" },
//   { label: "Arctic", icon: BsSnow, description: "This property is in an arctic environment!" },
//   { label: "Desert", icon: GiCactus, description: "This property is in the desert!" },
//   { label: "Barns", icon: GiBarn, description: "This property is in a barn!" },
//   { label: "Lux", icon: IoDiamond, description: "This property is brand new and luxurious!" },
// ];

// type Props = {};

// function Categories({}: Props) {
//   const params = useSearchParams();
//   const category = params?.get("category");
//   const pathname = usePathname();

//   const isMainPage = pathname === "/";

//   // Reference to the container element
//   const scrollContainerRef = useRef<HTMLDivElement | null>(null);
//   const [isAtStart, setIsAtStart] = useState(true);
//   const [isAtEnd, setIsAtEnd] = useState(false);

//   // Scroll left and right logic
//   const scrollContainer = (direction: "left" | "right") => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = direction === "right" ? 200 : -200; // Change 200 to control scroll speed
//       scrollContainerRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   // Update scroll position status
//   const handleScroll = () => {
//     if (scrollContainerRef.current) {
//       const scrollLeft = scrollContainerRef.current.scrollLeft;
//       const scrollWidth = scrollContainerRef.current.scrollWidth;
//       const clientWidth = scrollContainerRef.current.clientWidth;

//       setIsAtStart(scrollLeft === 0);
//       setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // Allow for minor rounding errors
//     }
//   };

//   // Listen for scroll events to update arrow states
//   useEffect(() => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.addEventListener("scroll", handleScroll);
//     }
//     return () => {
//       if (scrollContainerRef.current) {
//         scrollContainerRef.current.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   if (!isMainPage) {
//     return null;
//   }

//   return (
//     <Container>
//       <div className="relative pt-4 flex items-center justify-between">
//         {/* Left Arrow */}
//         <button
//           onClick={() => scrollContainer("left")}
//           disabled={isAtStart}
//           className={`absolute left-0 p-2 w-10 h-10 flex items-center justify-center text-gray-600 rounded-full shadow-md hover:bg-gray-100 transition ${isAtStart ? "hidden cursor-not-allowed opacity-50" : ""}`}
//         >
//           <BsArrowLeftCircle className={`w-7 h-7 ${isAtStart ? "hidden" : ""}`} />
//         </button>

//         <div className="scrollbar-hide overflow-x-auto">

//           {/* Category Menu */}
//           <div
//             ref={scrollContainerRef}
//             id="category-container"
//             className="flex flex-row items-center justify-between mx-10 overflow-x-auto space-x-4 py-2 no-scrollbar"
//             >
//             {categories.map((item) => (
//               <CategoryBox
//               key={item.label}
//               icon={item.icon}
//               label={item.label}
//               selected={category === item.label}
//               />
//             ))}
//           </div>
//           </div>

//         {/* Right Arrow */}
//         <button
//           onClick={() => scrollContainer("right")}
//           disabled={isAtEnd}
//           className={`absolute right-0 p-2 w-10 h-10 flex items-center justify-center text-gray-600 bg-white rounded-full shadow-md hover:bg-gray-100 transition ${isAtEnd ? "hidden cursor-not-allowed opacity-50" : ""}`}
//         >
//           <BsArrowRightCircle className={`w-7 h-7 ${isAtEnd ? "hidden" : ""}`} />
//         </button>
//       </div>
//     </Container>
//   );
// }

// export default Categories;
