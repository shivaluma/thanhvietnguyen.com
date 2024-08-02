import { siteConfigs } from "@/config";

export default function Home() {
  const { author, role, description } = siteConfigs;

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/">{author}</a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            {role}
          </h2>
          <p className="mt-4 max-w-xs leading-normal">{description}</p>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              <li>
                <a
                  className="group flex items-center py-3 active"
                  href="#about"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3 " href="#experience">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Experience
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3 " href="#projects">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Projects
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="content" className="pt-12 lg:w-1/2 lg:py-24">
        <section
          id="about"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          aria-label="About me"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              About
            </h2>
          </div>
          <div>
            <p className="mb-4">
              Back in 2013, I decided to try my hand at creating a simple web
              page for game listing on xtgem. Fast-forward to today, and I’ve
              had the privilege of building software for an{" "}
              <a
                className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                href="https://kobiton.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="kobiton (opens in a new tab)"
              >
                mobile testing platform
              </a>
              , and a{" "}
              <a
                className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                href="https://be.com.vn"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="ride hailing company (opens in a new tab)"
              >
                ride hailing company
              </a>
              .
            </p>
            <p className="mb-4">
              My main focus these days is building accessible user interfaces
              for our customers at{" "}
              <a
                className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                href="https://www.be.com.vn/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Klaviyo (opens in a new tab)"
              >
                Be
              </a>
              . I thrive at the intersection of design and engineering, where I
              craft software that is both visually appealing and technically
              sound.
            </p>
            <p>
              When I step away from the computer, you'll typically find me
              coffeeing, reading, hanging out with my friends, or running around
              The Lands Between searching for{" "}
              <span className="group/korok inline-flex lg:font-medium lg:text-slate-200">
                <span>Golden seeds</span>
              </span>{" "}
              and{" "}
              <span className="group/korok inline-flex lg:font-medium lg:text-slate-200">
                <span>Scadutree Fragments</span>
              </span>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
