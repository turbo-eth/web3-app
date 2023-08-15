'use client'
import { ReactNode } from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

import { IsDarkTheme } from '@/components/shared/is-dark-theme'
import { IsLightTheme } from '@/components/shared/is-light-theme'
import { LinkComponent } from '@/components/shared/link-component'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/config/design'
import { turboIntegrations } from '@/data/turbo-integrations'
import { cn } from '@/lib/utils'

const integrationData = turboIntegrations.allo
const registryPath = '/integration/allo/registry'
const alloPath = '/integration/allo/allo'

export default function LayoutIntegration({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <div className="flex-center flex-col items-center justify-center text-center">
        <motion.div
          animate="show"
          className="max-w-3xl px-5 text-center xl:px-0"
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
          <IsLightTheme>
            <Image alt="Starter logo" className="mx-auto" height={100} src={integrationData.imgDark} width={100} />
          </IsLightTheme>
          <IsDarkTheme>
            <Image alt="Starter logo" className="mx-auto" height={100} src={integrationData.imgLight} width={100} />
          </IsDarkTheme>
          <motion.h1
            className="text-gradient-sand my-8 text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-8xl md:leading-[6rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}>
            {integrationData.name}
          </motion.h1>
          <motion.p className="my-4 text-xl" variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <Balancer>{integrationData.description}</Balancer>
          </motion.p>
          <motion.div className="my-4 text-xl" variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <LinkComponent className="btn btn-primary" href={integrationData.url}>
              Documentation
            </LinkComponent>
            <motion.div className="mt-8 flex flex-col justify-center gap-x-14 text-2xl sm:flex-row" variants={FADE_DOWN_ANIMATION_VARIANTS}>
              <LinkComponent href={registryPath}>
                <button className={cn('btn hover:opacity-75', pathname === alloPath && 'opacity-50')}>Project Registry</button>
              </LinkComponent>
              <LinkComponent href={alloPath}>
                <button className={cn('btn hover:opacity-75', pathname === registryPath && 'opacity-50')}>Allo</button>
              </LinkComponent>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {children}
    </>
  )
}
