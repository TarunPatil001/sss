'use client';

import Image from "next/image";
import React from "react";

type Props = {
  src: string | null | undefined;
  userName?: string | null | undefined;
};

function Avatar({ src, userName }: Props) {
  return (
    <div>
      {src ? (
        <Image
          className="rounded-full"
          height={30}
          width={30}
          alt="hasImage"
          src={src}
        />
      ) : userName ? (
        <Image
          className="rounded-full"
          height={30}
          width={30}
          alt="nameImage"
          src={`https://ui-avatars.com/api/?name=${userName}`}
          unoptimized // This is necessary for external URLs not managed by Next.js
        />
      ) : (
        <Image
          className="rounded-full"
          height={30}
          width={30}
          alt="noUser"
          src="/assets/placeholder.svg"
        />
      )}
    </div>
  );
}

export default Avatar;


// 'use client';
// import Image from "next/image";
// const Avatar = () => {
//     return (
//         <Image 
//             className="rounded-full"
//             height="30"
//             width="30"
//             alt="Avatar"
//             src="/images/placeholder.jpg"
//         />
//      );
// }
 
// export default Avatar;


// 'use client';
// import Image from "next/image";

// type AvatarProps = {
//   src?: string | null;
//   userName?: string | null;
// };

// const Avatar = ({ src, userName }: AvatarProps) => {
//   const defaultSrc = "/images/placeholder.jpg"; // Default image path

//   return (
//     <div>
//       {src ? (
//         <Image
//           className="rounded-full"
//           height={30}
//           width={30}
//           alt="Avatar"
//           src={src}
//         />
//       ) : userName ? (
//         <Image
//           className="rounded-full"
//           height={30}
//           width={30}
//           alt="User Avatar"
//           src={`https://ui-avatars.com/api/?name=${userName}`}
//         />
//       ) : (
//         <Image
//           className="rounded-full"
//           height={30}
//           width={30}
//           alt="Default Avatar"
//           src={defaultSrc}
//         />
//       )}
//     </div>
//   );
// };

// export default Avatar;
