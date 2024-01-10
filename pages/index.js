/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const eagerMode = router.query.eagerMode === "1";

  return (
    <div>
      <Head>
        <title>Pilar Gracia Murillo | CV</title>
        <meta
          name="Descripción"
          content="La mejor auxiliar de farmacia que puedes encontrar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-screen-xl">
        <main className="flex flex-col-reverse lg:flex-row lg:m-12 lg:shadow-2xl print:shadow-none">
          <div className="w-full lg:max-w-sm p-8 bg-gradient-to-b from-gray-200 via-gray-100 to-white">
            <div className="px-2 mb-12 hidden lg:block">
              <Image
                src="/pilargracia.jpg"
                alt="Profile Picture"
                className="rounded-full w-52 mx-auto mb-2"
                width="537"
                height="640"
                loading={eagerMode ? "eager" : "lazy"}
              />
              <h1 className="text-center text-3xl font-semibold mb-2">
                Pilar Gracia Murillo
              </h1>
              <h2 className="text-center text-xl font-light">
                Auxiliar de Farmacia
              </h2>
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
                  loading={eagerMode ? "eager" : "lazy"}
                />
                <span>Oct 1982</span>
              </div>
              <div className="flex items-center my-3">
                <Image
                  src="/icons/home.svg"
                  className="inline w-6 pb-1 mr-4"
                  alt="House icon"
                  width="24"
                  height="24"
                  loading={eagerMode ? "eager" : "lazy"}
                />
                <div>
                  <p>El Prat de Llobregat</p>
                </div>
              </div>
            </div>

            <div className="font-light text-lg px-2 mb-12">
              <h2 className="text-xl font-semibold mb-4">
                Información de Contacto
              </h2>
              <div className="flex items-center my-3">
                <Image
                  src="/icons/phone.svg"
                  className="inline w-6 mr-4"
                  alt="GitHub Logo"
                  width="24"
                  height="24"
                  loading={eagerMode ? "eager" : "lazy"}
                />
                <a
                  href="tel:+34645902234"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +34 645 902 234
                </a>
              </div>
              <div className="flex items-center my-3">
                <Image
                  src="/icons/at.svg"
                  className="inline w-6 mr-4"
                  alt="LinkedIn Logo"
                  width="24"
                  height="24"
                  loading={eagerMode ? "eager" : "lazy"}
                />
                <a
                  href="mailto:nightangel22@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  nightangel22@gmail.com
                </a>
              </div>
            </div>

            <div className="font-light text-lg px-2 mb-12">
              <h2 className="text-xl font-semibold mb-4">Idiomas</h2>
              <h3 className="font-semibold">Spanish</h3>
              <p>Nativo</p>
              <h3 className="font-semibold">Catalan</h3>
              <p>Nativo</p>
              <h3 className="font-semibold">English</h3>
              <p>Correcto</p>
            </div>

            <div className="font-light text-lg px-2 mb-12">
              <h2 className="text-xl font-semibold mb-4">Educación</h2>
              <h3 className="font-semibold">BSc Computer Science</h3>
              <p>2000 - 2008 Universitat Politécnica de Catalunya</p>
              <h3 className="font-semibold">Erasmus Grant</h3>
              <p>2005 Teknillinen korkeakoulu</p>
            </div>

            <div className="font-light text-lg px-2 mb-12">
              <h2 className="text-xl font-semibold mb-4">Cursos</h2>
              <h3 className="font-semibold">BSc Computer Science</h3>
              <p>2000 - 2008 Universitat Politécnica de Catalunya</p>
              <h3 className="font-semibold">Erasmus Grant</h3>
              <p>2005 Teknillinen korkeakoulu</p>
            </div>

            {/* <div className="font-light text-lg px-2 mb-12">
              <h2 className="text-xl font-semibold mb-4">Skills & Tools</h2>
              <ul className="list-none">
                <li>
                  <div>Frontend</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-xl bg-gray-300 px-3">React</span>
                    <span className="rounded-xl bg-gray-300 px-3">Next.js</span>
                    <span className="rounded-xl bg-gray-300 px-3">Redux</span>
                    <span className="rounded-xl bg-gray-300 px-3">Apollo</span>
                    <span className="rounded-xl bg-gray-300 px-3">
                      Styled Components
                    </span>
                    <span className="rounded-xl bg-gray-300 px-3">Scss</span>
                    <span className="rounded-xl bg-gray-300 px-3">
                      Tailwindcss
                    </span>
                  </div>
                </li>
                <li>
                  <div>Backend</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-xl bg-gray-300 px-3">Node</span>
                    <span className="rounded-xl bg-gray-300 px-3">
                      Typescript
                    </span>
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
                    <span className="rounded-xl bg-gray-300 px-3">
                      Selenium
                    </span>
                  </div>
                </li>
                <li>
                  <div>Infrastructure</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-xl bg-gray-300 px-3">AWS</span>
                    <span className="rounded-xl bg-gray-300 px-3">Vercel</span>
                    <span className="rounded-xl bg-gray-300 px-3">
                      Kubernetes
                    </span>
                    <span className="rounded-xl bg-gray-300 px-3">Docker</span>
                    <span className="rounded-xl bg-gray-300 px-3">
                      DynamoDB
                    </span>
                    <span className="rounded-xl bg-gray-300 px-3">MongoDB</span>
                    <span className="rounded-xl bg-gray-300 px-3">MySQL</span>
                    <span className="rounded-xl bg-gray-300 px-3">
                      Clickhouse
                    </span>
                  </div>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="content w-full p-12">
            <div className="prose">
              <h2 className="section-headline">Perfíl</h2>
              <p>
                Como auxiliar farmacéutica, mi experiencia abarca la atención al
                cliente con amabilidad y eficiencia, así como la gestión
                organizada del área de venta. He demostrado habilidades para
                asistir en la dispensación de medicamentos bajo supervisión,
                mantener el inventario actualizado y garantizar el cumplimiento
                de las normativas de almacenamiento.
              </p>
              <p>
                Mi enfoque proactivo en la atención al cliente, junto con la
                capacidad para trabajar en equipo, me ha permitido contribuir al
                ambiente positivo y eficiente de la farmacia.
              </p>
              <p>
                Estoy comprometida con el servicio de calidad y estoy dispuesta
                a aprender y crecer en este entorno dinámico
              </p>
            </div>
            <hr className="mt-8 mb-12" />
            <div className="prose">
              <h2 className="section-headline">Experiencia</h2>
              <div className="mt-6 mb-8">
                <h3 className="font-semibold">Farmacia Central Prat</h3>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Ene.&nbsp;2021 - Actualidad
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Descripción:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    Creating new features focused on improving query and
                    endpoint performance via materialization. Improving online
                    query editor by adding hints and improving error
                    highlighting.
                  </div>
                </section>
                {/* <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 flex flex-wrap">
                    Tools:
                  </div>
                  <div className="flex flex-wrap gap-2 w-full">
                    <span className="rounded-xl bg-gray-300 px-3">React</span>
                    <span className="rounded-xl bg-gray-300 px-3">Redux</span>
                    <span className="rounded-xl bg-gray-300 px-3">
                      ClickHouse
                    </span>
                    <span className="rounded-xl bg-gray-300 px-3">Graphql</span>
                    <span className="rounded-xl bg-gray-300 px-3">Ansible</span>
                  </div>
                </section> */}
              </div>
              <div className="mt-6 mb-8">
                <h3 className="font-semibold">Farmacia Albasanz Olaortua</h3>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Abr.&nbsp;2013 - Ene. 2020
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Descripción:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    Leading the migration from a high traffic Symfony/JQuery
                    website (porntube.com) to a NodeJS/React platform. Also
                    created a high throughput event logging platform using Node,
                    Kinesis, Redshift that is used for internal stats
                    recollection. Also leading the migration of Blacked.com from
                    a React SPA to a ISR Next.js app using GraphQL.
                  </div>
                </section>
              </div>
              <div className="mb-8">
                <h3 className="font-semibold">Farmacia Cristina Galindo</h3>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Mar.&nbsp;2012 - Sep.&nbsp;2012
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Descripción:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    Lead a team of 4 developers while we cleaned the platform’s
                    code. Also improved the system’s architecture by adding
                    autoscalling capabilities and adapted it to AWS services. In
                    the time we improved the platform performance and opened a
                    market in Latam.
                  </div>
                </section>
              </div>
              <div className="mb-8">
                <h3 className="font-semibold">Farmacia Faura</h3>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Ene.&nbsp;2010 - Mar. 2012
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Descripción:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    Developed back end and front end of all Ofertix.com sites
                    (Ofertix.com, NiceAnd- Crazy.com,
                    NiceAndCrazy.fr,Primeriti.es). Also developed other side
                    projects like deploy system inspired in Capistrano and a
                    custom redis http cache library for symfony.
                  </div>
                </section>
              </div>
              <div className="mb-8">
                <h3 className="font-semibold">Farmacia Saltó</h3>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    May.&nbsp;2005 - Ene. 2010
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Descripción:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    Developed back end and front end of all Ofertix.com sites
                    (Ofertix.com, NiceAnd- Crazy.com,
                    NiceAndCrazy.fr,Primeriti.es). Also developed other side
                    projects like deploy system inspired in Capistrano and a
                    custom redis http cache library for symfony.
                  </div>
                </section>
              </div>
              <div className="mb-8">
                <h3 className="font-semibold">Farmacia Buixò</h3>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Ago.&nbsp;2003 - May. 2005
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Descripción:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    Developed back end and front end of all Ofertix.com sites
                    (Ofertix.com, NiceAnd- Crazy.com,
                    NiceAndCrazy.fr,Primeriti.es). Also developed other side
                    projects like deploy system inspired in Capistrano and a
                    custom redis http cache library for symfony.
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="w-full lg:max-w-sm p-2 bg-gray-400 lg:hidden">
            <div className="flex flex-col md:flex-row items-center p-4 bg-gray-400">
              <Image
                src="/pilargracia.jpg"
                alt="Profile Picture"
                className="rounded-full w-52 mx-auto mb-2"
                width="293"
                height="350"
                loading={eagerMode ? "eager" : "lazy"}
              />
              <div className="px-4">
                <h1 className="text-center text-3xl font-semibold mb-2">
                  Pilar Gracia Murillo
                </h1>
                <h2 className="text-center text-xl font-light">
                  Auxiliar de Farmacia
                </h2>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="mt-12 mb-12 text-center flex justify-center flex-col mx-12 p4 print:hidden">
        <a href="/api/pdf" target="_blank" rel="noopener noreferrer">
          Download PDF version
        </a>
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
