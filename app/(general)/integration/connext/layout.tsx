'use client'
import { ReactNode } from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/config/design'
import { turboIntegrations } from '@/data/turbo-integrations'

export default function ConnextTogetherLayout({ children }: { children: ReactNode }) {
  const classes = 'bg-gradient-dark flex flex-col pb-10 lg:pb-12'
  return (
    <>
      <div className={classes}>
        <div className="relative flex flex-1">
          <div className="flex-center flex h-full flex-1 flex-col items-center justify-center text-center">
            <motion.div
              animate="show"
              className="max-w-3xl px-5 xl:px-0"
              initial="hidden"
              viewport={{ once: true }}
              whileInView="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}>
              <Image alt="Connext Icon" className="mx-auto mb-5" height={100} src={turboIntegrations.connext.imgDark} width={100} />
              <motion.h1
                className="text-gradient-pooltogether pb-5 text-center text-2xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-8xl md:leading-[6rem]"
                variants={FADE_DOWN_ANIMATION_VARIANTS}>
                Connext
              </motion.h1>
              <motion.p className="mt-6 text-center text-gray-500 dark:text-gray-200 md:text-xl" variants={FADE_DOWN_ANIMATION_VARIANTS}>
                <Balancer className="text-xl font-semibold">Bridge assets directly from your app</Balancer>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
      <main className="w-full">{children}</main>
    </>
  )
}
