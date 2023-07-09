import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import WalletConnect from './walletconnect'

export default function Home() {
  return (
    <>
      <div className="z-10 w-full items-center justify-between text-sm flex px-24">
        <p className="pb-6 pt-8">SOUSTA</p>
        <div className="bottom-0 left-0 flex">
          <nav className="flex">
            <a className="pr-2" href="">
              <FontAwesomeIcon
                style={{ height: 24, width: 24 }}
                icon={faInstagram}
              />
            </a>
            <a className="px-2" href="">
              <FontAwesomeIcon
                style={{ height: 24, width: 24 }}
                icon={faYoutube}
              />
            </a>
            <a className="px-2" href="">
              <FontAwesomeIcon
                style={{ height: 24, width: 24 }}
                icon={faTwitter}
              />
            </a>
            <a className="px-2" href="">
              <FontAwesomeIcon
                style={{ height: 24, width: 24 }}
                icon={faLinkedin}
              />
            </a>
            <a className="pl-2" href="">
              <FontAwesomeIcon
                style={{ height: 24, width: 24 }}
                icon={faGithub}
              />
            </a>
          </nav>
        </div>
      </div>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <h1 className="font-bold mb-4 text-9xl">
            SOUSTA
            <br />
            <span className="font-semibold italic text-8xl">
              Asset Tokenization
            </span>
          </h1>
          <h2 className="text-2xl">
            Solving the Bitcoin productivity problem.
          </h2>
        </div>
        <div>
          <WalletConnect />
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
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
