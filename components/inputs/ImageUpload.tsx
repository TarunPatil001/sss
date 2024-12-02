"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  // Check for Cloudinary in runtime for better safety
  var cloudinary: any;
}

type Props = {
  onChange: (value: string) => void;
  value: string;
};

function ImageUpload({ onChange, value }: Props) {
  const handleCallback = useCallback(
    (result: any) => {
      if (result?.event === "success") {
        onChange(result.info.secure_url);
      }
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleCallback}
      uploadPreset="fsgobyv4"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => (
        <div
          onClick={() => open?.()}
          role="button"
          aria-label="Upload an image"
          className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
        >
          <TbPhotoPlus size={50} />
          <div className="font-semibold text-lg">Click to upload</div>
          {value && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                alt="Uploaded image"
                src={value}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
}

export default ImageUpload;
