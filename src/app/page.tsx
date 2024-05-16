import Link from "next/link";
import { mock } from "node:test";

const mockUrls = [
  "https://utfs.io/f/4f9a2cf6-9266-48f5-83bc-b33b0826bae2-dtbnmr.jpg",
  "https://utfs.io/f/072e29be-3866-410e-959b-9baf8e94daf9-2tpczn.jpg",
  "https://utfs.io/f/61567628-af00-4083-b2c1-e4431cd50012-mdii9v.jpg",
  "https://utfs.io/f/431b5436-87c1-4ce8-bf5d-a9401c95e522-1d.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
