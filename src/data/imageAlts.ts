export const imageAlts: Record<number, string> = {
  7534282: "Modern bathroom with marble walls and glass walk-in shower",
  6899351: "White bathtub with overhead shower on gray tiled walls",
  6957081: "White bathtub with floral tile decor and wooden vanity",
  5502253: "Black and white double-sink vanity with round mirrors",
  8583810: "White tiled walk-in shower with mosaic floor",
  5825561: "Minimalist bathroom with white shower curtain and tiled floor",
  9252956: "Freestanding bathtub with mosaic accent wall",
  7031840: "Bathroom with glass partition and sleek tub",
  4300078: "Tiled shower with wall-mounted shelf and showerhead",
  7005279: "Chrome faucet against marble tile in a contemporary bathroom",
  6890406: "Bright modern bathroom with sink and mirror",
  7005476: "Modern bathroom with glass shower enclosure and textured walls",
  6835174: "Bathroom with glass shower, gold trim, and marble countertop",
  6653889: "White bathroom with gold faucet and ceramic sink",
  5502260: "Walk-in shower with glass door, bench, and herringbone tile",
  7031719: "Minimalist bathroom with ceramic sink and toilet",
  8925979: "Chrome faucet and ceramic tiling in a sunlit bathroom",
  8134805: "Gray and white tiled bathroom with sleek bathtub",
};

export function imageAlt(id: number, fallback: string) {
  return imageAlts[id] ?? fallback;
}
