import { DefaultLayout } from "@/components/layout/DefaultLayout";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <DefaultLayout>
        <section className="py-20">
          <div className="flex">
            <div>
              <Image
                width={300}
                height={300}
                src="/images/548868260_17851741194542920_8041822006589926016_n.jpg"
                alt="Logo Roxane"
              />
            </div>

            <div className="px-3 font-[Roboto]">
              <h2 className="pb-2 text-2xl">A propos de moi</h2>

              <p className="">
                Moi c&apos;est Roxane, jeune créatrice de contenu française de
                23 ans, passionné par l&apos;art et l&apos;expression créative
              </p>

              <p>
                À travers mes projets, je cherche à capturer l’émotion,
                l&apos;instant et l’authenticité. Je vous souhaite la bienvenue
                dans mon univers.
              </p>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

export default HomePage;
