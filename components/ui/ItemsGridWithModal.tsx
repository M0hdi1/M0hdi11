"use client";
import React, { useState } from "react";
import { Modal } from "./Modal";
import { BentoGrid, BentoCard } from "./BentoGrid";
import Image from "next/image";

export type Item = {
  title: string;
  desc: string;
  icon?: string;
  content?: string;
};

export default function ItemsGridWithModal({ items }: { items: Item[] }) {
  const [active, setActive] = useState<Item | null>(null);

  return (
    <>
      <BentoGrid>
        {items.map((it, i) => (
          <button
            key={i}
            className="text-left"
            onClick={() => setActive(it)}
          >
            <BentoCard
              className="sm:col-span-3 lg:col-span-2"
              title={it.title}
              description={it.desc}
            >
              <div className="flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                {it.icon ? (
                  <Image
                    src={`/${it.icon}`}
                    alt=""
                    width={18}
                    height={18}
                    className="dark:invert"
                  />
                ) : null}
                Click for details
              </div>
            </BentoCard>
          </button>
        ))}
      </BentoGrid>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title}>
        <p>{active?.content ?? active?.desc}</p>
      </Modal>
    </>
  );
}

