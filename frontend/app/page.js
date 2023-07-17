'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AssetCard from './assetcard'
import Image from 'next/image'
import Link from 'next/link'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from '@material-tailwind/react'
import {
  faArrowRight,
  faCoins,
  faHandSparkles,
  faHouseLock,
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import routes from './routes'
import Nav from './nav'

export default function Home() {
  const opportunities = [
    {
      href: routes.home,
      title: 'Carried Interest',
      description:
        'Invest in the carried interest portion of various Private Equity (PE) General Partnerships.',
      type: 'Fund of Funds',
      min: '400 Tokens',
      expectedYield: '3-4%',
      src: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80',
    },
    {
      href: routes.home,
      title: 'Whiskey',
      description: 'Invest in rare, limited edition bottles of Whiskey.',
      type: 'Fund of Funds',
      min: '400 Tokens',
      expectedYield: '3-4%',
      src: 'https://images.unsplash.com/photo-1615780324244-29b71ae12f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    },
    {
      href: routes.home,
      title: 'Aymoré Hotel — Rio',
      description:
        'Invest in The historic Aymoré Hotel, built in 1910, that has this name because the founder, Antonio Mendes Campos, had an admiration for Aimorés, an indigenous ethnicity.',
      type: 'Property Fund',
      min: '400 Tokens',
      expectedYield: '3-4%',
      src: 'https://images.unsplash.com/photo-1678839042013-9d82d24b1d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80',
    },
    {
      href: routes.home,
      title: 'The Meadows — Richmond, VA',
      description:
        'Invest in The Meadows Investment Properties Portfolio, part of a 19 property portfolio of single family rental portfolio of Section 8 properties.',
      type: 'Property Fund',
      min: '400 Tokens',
      expectedYield: '3-4%',
      src: 'https://images.unsplash.com/photo-1629777161042-4edc28f957ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80',
    },
  ]

  return (
    <>
      <Nav />

      <main className="flex min-h-screen flex-col items-center justify-between py-24">
        <div className="grid grid-cols-2 relative pb-24 px-24">
          <div>
            <h1 className="font-bold leading-tight mb-4 text-5xl text-blue-900">
              Bridging the gap between real-world assets and blockchain
              technology
            </h1>
            <h2 className="text-lg text-blue-700">
              We're not tech people. We're real estate people. We have
              real-world experience with every asset we offer. And we know how
              to properly set, and manage expectations for investors.
            </h2>
          </div>
        </div>

        <section className="bg-blue-900 px-24 py-20">
          <ul className="grid grid-cols-3 gap-6">
            <li>
              <Card
                color="transparent"
                shadow={false}
                className="items-center text-center"
              >
                <FontAwesomeIcon
                  className="text-blue-50"
                  style={{ height: 60, width: 60 }}
                  icon={faHouseLock}
                />
                <CardBody>
                  <Typography className="font-semibold mb-2 text-blue-50 text-2xl uppercase">
                    Asset Tokenization
                  </Typography>
                  <Typography className="text-blue-100">
                    The place is close to Barceloneta Beach and bus stop just 2
                    min by walk and near to &quot;Naviglio&quot; where you can
                    enjoy the main night life in Barcelona.
                  </Typography>
                </CardBody>
              </Card>
            </li>
            <li>
              <Card
                color="transparent"
                shadow={false}
                className="items-center text-center"
              >
                <FontAwesomeIcon
                  className="text-blue-50"
                  style={{ height: 60, width: 60 }}
                  icon={faCoins}
                />
                <CardBody>
                  <Typography className="font-semibold mb-2 text-blue-50 text-2xl uppercase">
                    Fund Tokenization
                  </Typography>
                  <Typography className="text-blue-100">
                    The place is close to Barceloneta Beach and bus stop just 2
                    min by walk and near to &quot;Naviglio&quot; where you can
                    enjoy the main night life in Barcelona.
                  </Typography>
                </CardBody>
              </Card>
            </li>
            <li>
              <Card
                color="transparent"
                shadow={false}
                className="items-center text-center"
              >
                <FontAwesomeIcon
                  className="text-blue-50"
                  style={{ height: 60, width: 60 }}
                  icon={faHandSparkles}
                />
                <CardBody>
                  <Typography className="font-semibold mb-2 text-blue-50 text-2xl uppercase">
                    Third-Party Tokenization
                  </Typography>
                  <Typography className="text-blue-100">
                    The place is close to Barceloneta Beach and bus stop just 2
                    min by walk and near to &quot;Naviglio&quot; where you can
                    enjoy the main night life in Barcelona.
                  </Typography>
                </CardBody>
              </Card>
            </li>
          </ul>
        </section>

        <section className="px-24 py-20">
          <div className="mb-14">
            <h2 className="mb-4 text-blue-700 text-sm uppercase">
              Investment Opportunities
            </h2>
            <h3 className="font-semibold text-blue-900 text-5xl">
              Featured Opportunities
            </h3>
          </div>
          <ul className="grid grid-cols-2 gap-16">
            {opportunities.map((opportunity) => {
              return (
                <li>
                  <AssetCard
                    description={opportunity.description}
                    href={opportunity.href}
                    title={opportunity.title}
                    expectedYield={opportunity.expectedYield}
                    min={opportunity.min}
                    src={opportunity.src}
                    type={opportunity.type}
                  />
                </li>
              )
            })}
          </ul>
        </section>

        <div className="mb-32 grid text-center px-24 lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              FAQ{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Get answers to frequently asked questions.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn how SOUSTA works.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Governance{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about how SOUSTA is governed.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
