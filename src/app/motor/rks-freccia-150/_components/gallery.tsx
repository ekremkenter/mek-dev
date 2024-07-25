"use client";

import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Gallery() {
  const images = React.useMemo(() => {
    const images = Array.from({ length: 7 }).map((_, index) => index + 1);

    // randomize the images
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <section className="pb-12">
      <Carousel
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-1">
          {images.map((image) => (
            <CarouselItem
              key={image}
              className="pl-1 basis-1/2 sm:basis-1/4 lg:basis-1/6"
            >
              <div className="p-1">
                <Image
                  alt="Product"
                  className="object-cover w-full h-[300px] rounded-lg sm:h-30"
                  width={300}
                  height={200}
                  src={`/assets/motor/rks-freccia-150/${image}.jpg`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
