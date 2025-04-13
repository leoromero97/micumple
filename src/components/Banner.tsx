import Image, { ImageProps } from "next/image";
import React from "react";

export type BannerPropTypes = {
  title?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  } & ImageProps;
  link?: {
    href: string;
    text?: string;
  };
};

export default function Banner({
  description,
  image,
  title,
  link,
}: Readonly<BannerPropTypes>) {
  return (
    <div className="flex flex-col gap-3">
      {!!image && (
        <picture className="overflow-hidden rounded-sm max-w-xl">
          <Image
          {...image}
            alt={image.alt}
            src={image.src}
            width={300}
            height={500}
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
            className={`w-full h-[400px] md:h-[500px] object-cover ${image.className}`}

          />
        </picture>
      )}
      {(!!title || !!description) && (
        <div>
          {title ? (
            <span className="text-neutral-50 font-semibold text-base">
              {title}
            </span>
          ) : null}
          {description ? (
            <p className="text-xs text-neutral-200 font-normal">
              {description}
            </p>
          ) : null}
          {link ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-xs font-semibold flex flex-row gap-1 items-center w-fit p-1"
            >
              <Image
                src="/link.svg"
                alt="Icono de link"
                height={24}
                width={24}
              />
              {link.text}
            </a>
          ) : null}
        </div>
      )}
    </div>
  );
}
