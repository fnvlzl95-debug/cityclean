// 시안 6 (프리미엄 기업형) 전용 이미지 파이프라인.
// 실제 현장 사진을 히어로 작업자/배경 에셋으로 가공한다.
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceRoot = path.join(root, "사진");
const targetRoot = path.join(root, "public", "images", "generated");

const assets = [
  {
    // 사다리 위에서 통유리를 스퀴지로 닦는 작업자 — 히어로 우측 인물.
    // 원본(720x1600)에서 작업자 + 닦고 있는 유리 영역만 잘라내 인물이
    // 히어로에서 충분히 크게 보이도록 한다.
    out: "pro-hero-worker.webp",
    src: ["종합청소", "유리창청소", "작업중", "2.jpg"],
    extract: { left: 330, top: 690, width: 390, height: 700 },
    width: 760,
    quality: 88,
  },
];

await fs.mkdir(targetRoot, { recursive: true });

for (const asset of assets) {
  const input = path.join(sourceRoot, ...asset.src);
  const output = path.join(targetRoot, asset.out);

  let pipeline = sharp(input).rotate();
  if (asset.extract) pipeline = pipeline.extract(asset.extract);
  pipeline = pipeline.resize({ width: asset.width });

  await pipeline.webp({ quality: asset.quality, effort: 5 }).toFile(output);

  console.log(`created ${path.relative(root, output)}`);
}
