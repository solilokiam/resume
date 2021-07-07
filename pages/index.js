import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Miquel Company | CV</title>
        <meta name="description" content="Best All Around Dev you can find" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-screen-xl">
      <main
        className="flex flex-col-reverse sm:flex-row sm:m-12 shadow-2xl"
      >
        <div
          className="w-full sm:max-w-sm p-8 bg-gradient-to-b from-gray-400 via-gray-300 to-white"
        >
          <div className="px-2 mb-12">
            <Image
              src="/miquelcompany.jpeg"
              alt="Profile Picture"
              className="rounded-full w-52 mx-auto mb-2"
              width="537"
              height="640"
            />
            <h1 className="text-center text-3xl font-semibold mb-2">Miquel Company Rodriguez</h1>
            <h2 className="text-center text-xl font-light">Fullstack Developer</h2>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            {/* <div className="flex items-center my-3">
              <Image
                src="/icons/at.svg"
                className="inline w-6 mr-4"
                alt="Mail icon"
                width="24"
                height="24"
              />
              <a href="mailto:">miquel@solilokiam.com</a>
            </div>
            <div className="flex items-center my-3">
              <Image
                src="/icons/phone.svg"
                className="inline w-6 mr-4"
                alt="Phone icon"
                width="24"
                height="24"
              />
              <a href="tel:">+34 645 994 691</a>
            </div> */}
            <div className="flex items-center my-3">
              <Image
                src="/icons/home.svg"
                className="inline w-6 pb-1 mr-4"
                alt="House icon"
                width="24"
                height="24"
              />
              <div>
                <p>Barcelona</p>
              </div>
            </div>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">Personal</h2>
            <div className="flex items-center my-3">
              <Image
                src="/icons/cake.svg"
                className="inline w-6 mr-4"
                alt="Cake Icon"
                width="24"
                height="24"
              />
              <span>Feb 1982</span>
            </div>
            <div className="flex items-center my-3">
              <Image
                src="/icons/parent.svg"
                className="inline w-6 mr-4"
                alt="Parent Icon"
                width="24"
                height="24"
              />
              <span>One wife, two kids and one dog</span>
            </div>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">On the Web</h2>
            <div className="flex items-center my-3">
              <Image
                src="/icons/gh.svg"
                className="inline w-6 mr-4"
                alt="GitHub Logo"
                width="24"
                height="24"
              />
              <a href="https://www.github.com/solilokiam" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="flex items-center my-3">
              <Image
                src="/icons/linkedin.svg"
                className="inline w-6 mr-4"
                alt="LinkedIn Logo"
                width="24"
                height="24"
              />
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">Languages</h2>
            <h3 className="font-semibold">Spanish</h3>
            <p>Native</p>
            <h3 className="font-semibold">Catalan</h3>
            <p>Native</p>
            <h3 className="font-semibold">English</h3>
            <p>Fluent</p>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">Skills & Tools</h2>
            <ul className="list-none">
              <li>
                <div>Frontend</div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-xl bg-gray-300 px-3">React</span>
                  <span className="rounded-xl bg-gray-300 px-3">Next.js</span>
                  <span className="rounded-xl bg-gray-300 px-3">Redux</span>
                  <span className="rounded-xl bg-gray-300 px-3">Apollo</span>
                  <span className="rounded-xl bg-gray-300 px-3">Styled Components</span>
                  <span className="rounded-xl bg-gray-300 px-3">Scss</span>
                  <span className="rounded-xl bg-gray-300 px-3">Tailwindcss</span>
                </div>
              </li>
              <li>
                <div>Backend</div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-xl bg-gray-300 px-3">Node</span>
                  <span className="rounded-xl bg-gray-300 px-3">Typescript</span>
                  <span className="rounded-xl bg-gray-300 px-3">Symfony</span>
                  <span className="rounded-xl bg-gray-300 px-3">PHP</span>
                  <span className="rounded-xl bg-gray-300 px-3">Prisma</span>
                  <span className="rounded-xl bg-gray-300 px-3">Apollo</span>
                </div>
              </li>
              <li>
                <div>Testing</div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-xl bg-gray-300 px-3">Jest</span>
                  <span className="rounded-xl bg-gray-300 px-3">PHPUnit</span>
                  <span className="rounded-xl bg-gray-300 px-3">Mockery</span>
                  <span className="rounded-xl bg-gray-300 px-3">Percy</span>
                  <span className="rounded-xl bg-gray-300 px-3">Behat</span>
                  <span className="rounded-xl bg-gray-300 px-3">Selenium</span>
                </div>
              </li>
              <li>
                <div>Infrastructure</div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-xl bg-gray-300 px-3">AWS</span>
                  <span className="rounded-xl bg-gray-300 px-3">Vercel</span>
                  <span className="rounded-xl bg-gray-300 px-3">Kubernetes</span>
                  <span className="rounded-xl bg-gray-300 px-3">Docker</span>
                  <span className="rounded-xl bg-gray-300 px-3">DynamoDB</span>
                  <span className="rounded-xl bg-gray-300 px-3">MongoDB</span>
                  <span className="rounded-xl bg-gray-300 px-3">MySQL</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <h3 className="font-semibold">BSc Computer Science</h3>
            <p>2000 - 2008 Universitat Politécnica de Catalunya</p>
            <h3 className="font-semibold">Erasmus Grant</h3>
            <p>2005 Teknillinen korkeakoulu</p>
          </div>
        </div>
        <div className="content w-full p-12">
          <div className="prose">
            <h2 className="section-headline">Profile</h2>
            <p>
            I love creating things, mainly virtual ones. I started lots of years ago developing websites and still loving it. I  have  done  nearly  everything  in  web
            development,  from  front  end  developer to  system  administrating.  My  greatest passion  is  learn  new  things  and  apply them to my job.
            </p>
            <p>
            I always say that a good job is a job well done and I apply this to everything I do
            </p>
          </div>
          <hr className="mt-8 mb-12" />
          <div className="prose">
            <h2 className="section-headline">Experience</h2>
            <div>
              <h3>Kodify</h3>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Oct.&nbsp;2015 - Current
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  Fullstack Developer
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Description:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                Leading the migration from a high traffic Symfony/JQuery website
                (porntube.com) to a NodeJS/React platform. Also created a high
                throughput event logging platform using Node, Kinesis, Redshift
                that is used for internal stats recollection.
                Also leading the migration of Blacked.com from a React SPA to a ISR Next.js app using GraphQL.
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 flex flex-wrap">
                  Tools:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  <span className="rounded-xl bg-gray-300 px-3">React</span>
                  <span className="rounded-xl bg-gray-300 px-3">Redux</span>
                  <span className="rounded-xl bg-gray-300 px-3">Next.js</span>
                  <span className="rounded-xl bg-gray-300 px-3">Graphql</span>
                  <span className="rounded-xl bg-gray-300 px-3">Kinesis</span>
                  <span className="rounded-xl bg-gray-300 px-3">Redshift</span>
                  <span className="rounded-xl bg-gray-300 px-3">Kubernetes</span>
                </div>
              </section>
            </div>
            <div>
              <h3>Chicplace</h3>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Apr.&nbsp;2014 - Oct.&nbsp;2015
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  CTO
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Description:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                Lead a team of 4 developers while we cleaned the platform’s code.
                Also improved the system’s architecture by adding autoscalling
                capabilities and adapted it to AWS services. In the time we
                improved the platform performance and opened a market in Latam.
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 flex flex-wrap">
                  Tools:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  <span className="rounded-xl bg-gray-300 px-3">Symfony</span>
                  <span className="rounded-xl bg-gray-300 px-3">Vagrant</span>
                  <span className="rounded-xl bg-gray-300 px-3">Bootstrap</span>
                </div>
              </section>
            </div>
            <div>
              <h3>Ofertix</h3>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Jun.&nbsp;2010 - Apr. 2014
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  Tech Lead
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Description:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  Developed back end and front end of all Ofertix.com sites
                  (Ofertix.com, NiceAnd- Crazy.com, NiceAndCrazy.fr,Primeriti.es).
                  Also developed other side projects like deploy system inspired in
                  Capistrano and a custom redis http cache library for symfony.
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 flex flex-wrap">
                  Tools:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  <span className="rounded-xl bg-gray-300 px-3">Symfony</span>
                  <span className="rounded-xl bg-gray-300 px-3">RabbitMQ</span>
                  <span className="rounded-xl bg-gray-300 px-3">Capistrano</span>
                </div>
              </section>
            </div>
            <div>
              <h3>Freelance Web Developer</h3>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Mar.&nbsp;2009 - Jun.&nbsp;2010
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  Freelance Web Developer
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Description:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                Worked in several projects using Symfony 1.4, Magento, Diem
Cms. Also created an online marketing tool for MpSystems that
sent bulk SMS and E-mail campaigns.
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 flex flex-wrap">
                  Tools:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  <span className="rounded-xl bg-gray-300 px-3">Symfony</span>
                  <span className="rounded-xl bg-gray-300 px-3">Magento</span>
                  <span className="rounded-xl bg-gray-300 px-3">Worpress</span>
                  <span className="rounded-xl bg-gray-300 px-3">Diem</span>
                </div>
              </section>
            </div>
          </div>
          <hr className="mt-8 mb-12" />
          <div className="prose">
            <h2 className="section-headline">Side Projects</h2>
            <div className="mb-16">
              <h3>Todoestamal.com</h3>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Description:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  Podcast I hosted with some friends talking about personal implications
                  of working in the tech industry.
                </div>
              </section>
            </div>
            <div className="mb-16">
              <h3>Scrollympics.fun</h3>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Description:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  Small and fun project that I created for the
                  <a href="https://www.gatsbyjs.com/blog/2020-silly-site-top-20/" target="_blank" rel="noopener noreferrer">
                    2020 Gatsby.js&apos;s Silly Site Challenge
                  </a>. It was selected by the judges as an honorable mention.

                </div>
              </section>
            </div>
          </div>
          <hr className="mt-8 mb-12" />
          <div className="prose">
            <h2 className="section-headline">Talks</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3>
                  DeSymfony 2015
                </h3>
                <p>Assetic and Advanced Frontend</p>
              </div>
              <div>
                <h3>
                  Symfony BCN Meetup
                </h3>
                <p>Advanced Messaging using RabbitMQ</p>
              </div>
              <div>
                <h3>
                  DeSymfony 2015
                </h3>
                <p>Symfony, React and 7,5M users</p>
              </div>
              <div>
                <h3>
                  ReactiveConf 2017
                </h3>
                <p>React and 7.4M Users</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <footer
      className="mt-12 text-center flex justify-center flex-col md:flex-row mx-12"
    >

    </footer>
    </div>
  )
}
