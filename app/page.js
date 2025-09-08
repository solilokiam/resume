import Image from "next/image";

export const metadata = {
  title: "Miquel Company | CV",
  description:
    "Engineering Manager with expertise in web development, cloud, and high-performing team leadership.",
};

export default function Home() {
  return (
    <div>
      <div className="container mx-auto max-w-screen-xl">
        <main className="flex flex-col-reverse md:flex-row lg:m-12 lg:shadow-2xl print:shadow-none">
          <div className="w-full lg:max-w-sm p-8 bg-gradient-to-b from-gray-400 dark:from-gray-700 via-gray-300 dark:via-gray-400 to-white dark:to-background">
            <div className="px-2 mb-12 hidden md:block">
              <Image
                src="/miquelcompany.jpeg"
                alt="Profile Picture"
                className="rounded-full w-52 mx-auto mb-2"
                width="537"
                height="640"
              />
              <h1 className="text-center text-3xl font-semibold mb-2">
                Miquel Company Rodriguez
              </h1>
              <h2 className="text-center text-xl font-light">
                Engineering Manager
              </h2>
            </div>
            <div className="font-light text-lg px-2 mb-12 print:hidden">
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

            <div className="font-light text-lg px-2 mb-12 print:hidden">
              <h2 className="text-xl font-semibold mb-4">On the Web</h2>
              <div className="flex items-center my-3">
                <Image
                  src="/icons/gh.svg"
                  className="inline w-6 mr-4"
                  alt="GitHub Logo"
                  width="24"
                  height="24"
                />
                <a
                  href="https://www.github.com/solilokiam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center my-3">
                <Image
                  src="/icons/linkedin.svg"
                  className="inline w-6 mr-4"
                  alt="LinkedIn Logo"
                  width="24"
                  height="24"
                />
                <a
                  href="https://es.linkedin.com/in/miquel-company-rodriguez-53a40134"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <hr className="mt-8 mb-12 hidden print:block" />

            <div className="font-light text-lg px-2 mb-12">
              <h2 className="text-xl font-semibold mb-4 print:hidden">
                Education
              </h2>
              <h2 className="section-headline mb-4 hidden print:block">
                Education
              </h2>
              <h3 className="font-semibold">BSc Computer Science</h3>
              <p>2000 - 2008 Universitat Politécnica de Catalunya</p>
              <h3 className="font-semibold">Erasmus Grant</h3>
              <p>2005 Teknillinen korkeakoulu</p>
            </div>

            <hr className="mt-8 mb-12 hidden print:block" />

            <div className="font-light text-lg px-2 mb-12">
              <h2 className="text-xl font-semibold mb-4 print:hidden">
                Languages
              </h2>
              <h2 className="section-headline mb-4 hidden print:block">
                Languages
              </h2>
              <h3 className="font-semibold">Spanish</h3>
              <p>Native</p>
              <h3 className="font-semibold">Catalan</h3>
              <p>Native</p>
              <h3 className="font-semibold">English</h3>
              <p>Fluent</p>
            </div>

            <div className="font-light text-lg px-2 mb-12 print:hidden">
              <h2 className="text-xl font-semibold mb-4">Skills & Tools</h2>
              <ul className="list-none">
                <li>
                  <div>Frontend</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      React
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Next.js
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Redux
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Apollo
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Styled Components
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Scss
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Tailwindcss
                    </span>
                  </div>
                </li>
                <li>
                  <div>Backend</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Node
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Typescript
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Symfony
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      PHP
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Python
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      FastApi
                    </span>
                  </div>
                </li>
                <li>
                  <div>Testing</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Jest
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      PHPUnit
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Mockery
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Playwright
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Pytest
                    </span>
                  </div>
                </li>
                <li>
                  <div>Infrastructure</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      AWS
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      GCP
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Vercel
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Kubernetes
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Terraform
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      MongoDB
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      MySQL
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Clickhouse
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="content w-full p-12">
            <div className="prose">
              <h2 className="section-headline">Profile</h2>
              <p>
                I love building things—especially in the digital world. My
                journey began years ago with web development, and I still enjoy
                it just as much today. Over the years, I’ve worked across the
                full stack, from frontend development to system administration.
                What drives me most is learning new technologies and applying
                them to create better solutions.
              </p>
              <p>
                I believe that a good job is one done with care and excellence,
                and I bring that mindset to everything I do.
              </p>
            </div>
            <hr className="mt-8 mb-12" />
            <div className="prose">
              <h2 className="section-headline">Experience</h2>
              <div className="mt-6 mb-8">
                <h3 className="font-semibold">PyreneesChallenge</h3>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    May 2025 - Now
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    Jack of all trades
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Description:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    Planned and managed a large-scale motorcycle event in the
                    Pyrenees, coordinating website development,
                    progress-tracking tools, logistics, and participant
                    communication to ensure an efficient, well-organized, and
                    successful experience.
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 flex flex-wrap">
                    Tools:
                  </div>
                  <div className="flex flex-wrap gap-2 w-full">
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      React Native
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Jazz-Tools
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Nextjs
                    </span>
                  </div>
                </section>
              </div>
              <div className="mt-6 mb-8">
                <h3 className="font-semibold">Landbot</h3>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Oct 2022 - Now
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    Engineering Manager
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Description:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    Leading two teams simultaneously (Platform and Product),
                    driving collaboration and alignment by fostering a culture
                    of knowledge sharing, training, and continuous improvement.
                    Enhanced documentation standards and streamlined
                    decision-making processes. Designed and implemented new
                    CI/CD pipelines, transitioning from once-per-day deployments
                    to continuous deployment. Established and scaled a
                    company-wide observability culture, ensuring higher
                    reliability and faster feedback loops.
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 flex flex-wrap">
                    Tools:
                  </div>
                  <div className="flex flex-wrap gap-2 w-full">
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      React
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Python
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Fast Api
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      GCP
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Terraform
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Kubernetes
                    </span>
                  </div>
                </section>
              </div>
              <div className="mt-6 mb-8">
                <h3 className="font-semibold">Tinybird</h3>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Feb.&nbsp;2022 - Sep. 2022
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    Frontend Developer
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Description:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    Developed new features to optimize query and endpoint
                    performance through materialization. Enhanced the online
                    query editor by introducing intelligent hints and improved
                    error highlighting for better usability and debugging
                    efficiency.
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 flex flex-wrap">
                    Tools:
                  </div>
                  <div className="flex flex-wrap gap-2 w-full">
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      React
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Redux
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      ClickHouse
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Graphql
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Ansible
                    </span>
                  </div>
                </section>
              </div>
              <div className="mt-6 mb-8">
                <h3 className="font-semibold">Kodify</h3>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Oct.&nbsp;2015 - Feb. 2022
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
                    Led the migration of a high-traffic Symfony/jQuery website
                    (porntube.com) to a modern Node.js/React platform. Designed
                    and implemented a high-throughput event logging system
                    leveraging Node.js, AWS Kinesis, and Redshift to power
                    internal analytics and reporting. Directed the migration of
                    Blacked.com from a React SPA to an ISR-enabled Next.js
                    application with GraphQL, improving scalability and
                    performance.
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 flex flex-wrap">
                    Tools:
                  </div>
                  <div className="flex flex-wrap gap-2 w-full">
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      React
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Redux
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Next.js
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Graphql
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Kinesis
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Redshift
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Kubernetes
                    </span>
                  </div>
                </section>
              </div>
              <div className="mb-8">
                <h3 className="font-semibold">Chicplace</h3>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Apr.&nbsp;2014 - Oct.&nbsp;2015
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">CTO</div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Description:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    Led a team of 4 developers in refactoring and modernizing
                    the platform’s codebase. Improved system architecture by
                    introducing autoscaling capabilities and migrating services
                    to AWS. These enhancements significantly boosted platform
                    performance and enabled successful market expansion into
                    LATAM.
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 flex flex-wrap">
                    Tools:
                  </div>
                  <div className="flex flex-wrap gap-2 w-full">
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Symfony
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Vagrant
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Bootstrap
                    </span>
                  </div>
                </section>
              </div>
              <div className="mb-8">
                <h3 className="font-semibold">Ofertix</h3>
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
                    Developed both backend and frontend for all Ofertix.com
                    platforms (Ofertix.com, NiceAndCrazy.com, NiceAndCrazy.fr,
                    Primeriti.es). Additionally, built supporting projects,
                    including a custom deployment system inspired by Capistrano
                    and a Redis-based HTTP cache library for Symfony.
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 flex flex-wrap">
                    Tools:
                  </div>
                  <div className="flex flex-wrap gap-2 w-full">
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Symfony
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      RabbitMQ
                    </span>
                    <span className="rounded-xl bg-gray-300 dark:bg-gray-600 px-3">
                      Capistrano
                    </span>
                  </div>
                </section>
              </div>
            </div>
            <hr className="mt-8 mb-12" />
            <div className="prose">
              <h2 className="section-headline">Talks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3>DeSymfony 2015</h3>
                  <p>Assetic and Advanced Frontend</p>
                </div>
                <div>
                  <h3>Symfony BCN Meetup</h3>
                  <p>Advanced Messaging using RabbitMQ</p>
                </div>
                <div>
                  <h3>DeSymfony 2015</h3>
                  <p>Symfony, React and 7,5M users</p>
                </div>
                <div>
                  <h3>ReactiveConf 2017</h3>
                  <p>React and 7.4M Users</p>
                </div>
                <div>
                  <h3>React Alicante 2024</h3>
                  <p>Dude, where is my password?</p>
                </div>
                <div>
                  <h3>React Alicante 2025</h3>
                  <p>Local-First is the new Black</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:max-w-sm p-2 bg-gray-400 md:hidden">
            <div className="flex flex-col md:flex-row items-center p-4 bg-gray-400">
              <Image
                src="/miquelcompany.jpeg"
                alt="Profile Picture"
                className="rounded-full w-52 mx-auto mb-2"
                width="293"
                height="350"
              />
              <div className="px-4">
                <h1 className="text-center text-3xl font-semibold mb-2">
                  Miquel Company Rodriguez
                </h1>
                <h2 className="text-center text-xl font-light">
                  Engineering Manager
                </h2>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="mt-12 mb-12 text-center flex justify-center flex-col mx-12 p4 print:hidden">
        <a
          href="https://github.com/solilokiam/resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source
        </a>
      </footer>
    </div>
  );
}
