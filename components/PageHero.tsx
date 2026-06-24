"use client";

import Image from "@/components/BasePathImage";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function PageHero({ eyebrow, title, description, image, imageAlt, children }: PageHeroProps) {
  return (
    <section className={image ? "page-hero" : "page-hero page-hero--text"}>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="page-hero__copy"
        initial={{ opacity: 0, y: 22 }}
        transition={{ duration: 0.7, ease }}
      >
        <p className="page-hero__eyebrow">{eyebrow}</p>
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__desc">{description}</p>
        {children ? <div className="page-hero__cta">{children}</div> : null}
      </motion.div>

      {image ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="page-hero__media"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          <Image alt={imageAlt ?? ""} fill priority sizes="(max-width: 1024px) 100vw, 46vw" src={image} />
        </motion.div>
      ) : null}
    </section>
  );
}
