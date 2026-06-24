import NextImage, { type ImageProps } from "next/image";
import { withBasePath } from "@/lib/paths";

export default function BasePathImage(props: ImageProps) {
  const src = typeof props.src === "string" ? withBasePath(props.src) : props.src;

  return <NextImage {...props} src={src} />;
}
