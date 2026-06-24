import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceRoot = path.join(root, "사진");
const targetRoot = path.join(root, "public", "images", "cases");

const assets = [
  {
    out: "hero-office.webp",
    src: ["정기청소", "사무실", "8.jpg"],
    width: 2400,
    height: 1500,
    position: "right",
  },
  {
    out: "og-cityclean.webp",
    src: ["정기청소", "사무실", "8.jpg"],
    width: 1200,
    height: 630,
    position: "right",
  },
  {
    out: "regular-office.webp",
    src: ["정기청소", "사무실", "1.jpg"],
    width: 1500,
    height: 950,
    position: "center",
  },
  {
    out: "regular-stairs.webp",
    src: ["정기청소", "계단", "17.jpg"],
    width: 1200,
    height: 1500,
    position: "top",
  },
  {
    out: "regular-restroom.webp",
    src: ["정기청소", "화장실", "10.jpg"],
    width: 1200,
    height: 1300,
    position: "center",
  },
  {
    out: "regular-church.webp",
    src: ["정기청소", "교회", "5.jpg"],
    width: 1300,
    height: 1000,
    position: "center",
  },
  {
    out: "regular-building.webp",
    src: ["정기청소", "건물", "2.jpg"],
    width: 1200,
    height: 1300,
    position: "center",
  },
  {
    out: "regular-stairs-before.webp",
    src: ["정기청소", "계단", "작업전후", "1작업전.jpg"],
    width: 900,
    height: 900,
    position: "center",
  },
  {
    out: "regular-stairs-after.webp",
    src: ["정기청소", "계단", "작업전후", "1작업후.jpg"],
    width: 900,
    height: 900,
    position: "center",
  },
  {
    out: "regular-restroom-before.webp",
    src: ["정기청소", "화장실", "작업전후", "1작업전.jpg"],
    width: 900,
    height: 900,
    position: "center",
  },
  {
    out: "regular-restroom-after.webp",
    src: ["정기청소", "화장실", "작업전후", "1작업후.jpg"],
    width: 900,
    height: 900,
    position: "center",
  },
  {
    out: "total-window.webp",
    src: ["종합청소", "유리창청소", "20.jpg"],
    width: 1200,
    height: 1350,
    position: "top",
  },
  {
    out: "total-parking.webp",
    src: ["종합청소", "주차장청소", "작업전후", "1작업후.jpg"],
    width: 1300,
    height: 950,
    position: "center",
  },
  {
    out: "total-deep-clean.webp",
    src: ["종합청소", "대청소", "KakaoTalk_20260622_010559785.jpg"],
    width: 1200,
    height: 1300,
    position: "center",
  },
  {
    out: "total-exterior-after.webp",
    src: ["종합청소", "외벽청소", "작업전후", "1작업후.jpg"],
    width: 1200,
    height: 1300,
    position: "center",
  },
  {
    out: "total-floor-after.webp",
    src: ["종합청소", "바닥왁스코팅", "작업전후", "1작업후.jpg"],
    width: 1200,
    height: 900,
    position: "center",
  },
  {
    out: "home-move.webp",
    src: ["홈클리닝", "이사청소", "KakaoTalk_20260622_004444689_07.jpg"],
    width: 1300,
    height: 1000,
    position: "center",
  },
  {
    out: "home-move-in.webp",
    src: ["홈클리닝", "입주청소", "KakaoTalk_20260622_003603736_09.jpg"],
    width: 1300,
    height: 1000,
    position: "center",
  },
  {
    out: "home-aircon-before.webp",
    src: ["홈클리닝", "에어컨청소", "작업전후", "1작업전.jpg"],
    width: 900,
    height: 900,
    position: "left",
  },
  {
    out: "home-aircon-after.webp",
    src: ["홈클리닝", "에어컨청소", "작업전후", "1작업후.jpg"],
    width: 900,
    height: 900,
    position: "left",
  },
  {
    out: "team-office.webp",
    src: ["정기청소", "사무실", "작업중", "KakaoTalk_20260425_223236676_06.jpg"],
    width: 1000,
    height: 760,
    position: "center",
  },
  {
    out: "team-home.webp",
    src: ["홈클리닝", "입주청소", "작업중", "KakaoTalk_20260622_011503296.jpg"],
    width: 1000,
    height: 760,
    position: "center",
  },
  {
    out: "team-window.webp",
    src: ["종합청소", "유리창청소", "작업중", "1.jpg"],
    width: 1000,
    height: 760,
    position: "center",
  },
];

await fs.mkdir(targetRoot, { recursive: true });

for (const asset of assets) {
  const input = path.join(sourceRoot, ...asset.src);
  const output = path.join(targetRoot, asset.out);

  await sharp(input)
    .rotate()
    .resize(asset.width, asset.height, {
      fit: "cover",
      position: asset.position,
    })
    .webp({ quality: 82, effort: 5 })
    .toFile(output);

  console.log(`created ${path.relative(root, output)}`);
}
