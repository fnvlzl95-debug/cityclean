"use client";

import Image from "@/components/BasePathImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import type { Service } from "@/lib/data";
import { servicePath } from "@/lib/data";

type ServiceMosaicProps = {
  services: Service[];
  compact?: boolean;
};

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export function ServiceMosaic({ services }: ServiceMosaicProps) {
  return (
    <motion.div
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      variants={container}
      viewport={{ once: true, amount: 0.1 }}
      whileInView="show"
    >
      {services.map((service) => (
        <motion.div key={`${service.category}-${service.slug}`} variants={item}>
          <Link className="group flex h-full flex-col" href={servicePath(service)}>
            <div className="relative aspect-[3/2] overflow-hidden bg-[var(--paper)]">
              <Image
                alt={service.imageAlt}
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                src={service.image}
              />
            </div>
            <div className="flex flex-1 flex-col pt-4">
              <p className="text-xs font-black text-[var(--accent)]">{service.eyebrow}</p>
              <h3 className="mt-2 text-xl font-black tracking-tight text-[var(--ink)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{service.summary}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-black text-[var(--accent)]">
                자세히 보기
                <ArrowUpRight
                  aria-hidden="true"
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  size={15}
                  weight="bold"
                />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
