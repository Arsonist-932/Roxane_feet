import { DefaultLayout } from "@/components/layout/DefaultLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <DefaultLayout>
        <main className="min-h-screen bg-background text-foreground">
          {/* Section About Me */}
          <section className="mx-auto max-w-4xl px-4 py-20">
            <div className="flex gap-4 max-md:flex-col">
              <div className="w-full overflow-hidden rounded-full">
                <Image
                  src="/images/image13.webp"
                  alt={"image"}
                  width={1200}
                  height={600}
                  className="h-72 w-full object-cover"
                  priority
                />
              </div>

              <div className="space-y-4 text-center">
                <h1 className="text-3xl font-bold">À propos de moi</h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  Je m&apos;appelle <strong>Roxane</strong>, j&apos;ai 23 ans et
                  je suis une créatrice de contenu française. Passionnée par
                  l&apos;art et l&apos;expression corporelle, je partage mes
                  inspirations à travers divers formats : photos, vidéos,
                  podcasts et plus encore.
                </p>
              </div>
            </div>
          </section>

          {/* Section Photos */}
          <section className="mx-auto max-w-4xl px-4 py-10">
            <div className="flex flex-row-reverse items-center gap-2 max-md:flex-col">
              <div className="w-full overflow-hidden rounded-lg bg-card shadow-md">
                <Image
                  src="/images/image3.jpg"
                  alt={"image"}
                  width={1200}
                  height={600}
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="space-y-4 p-6">
                <h2 className="bg-gradient-to-br from-pink-500 via-pink-300 to-white bg-clip-text text-2xl font-semibold text-transparent">
                  Galerie Photo
                </h2>

                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Parce que chaque moment mérite d’être immortalisé avec
                    justesse avec des images naturelles et élégantes. Qualité,
                    émotion et discrétion au service de votre histoire.
                  </p>

                  <p>
                    Bienvenue dans ma galerie, là où vos instants prennent vie.
                  </p>
                </div>

                <Button asChild className="w-full">
                  <Link
                    href={""}
                    className="font-medium text-primary hover:underline"
                  >
                    Accéder aux photos
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Section Vidéos */}
          <section className="mx-auto max-w-4xl px-4 py-10">
            <div className="flex items-center gap-2 max-md:flex-col">
              <div className="w-full overflow-hidden rounded-lg bg-card shadow-md">
                <Image
                  width={1200}
                  height={600}
                  src="/images/image4.jpg"
                  alt="Logo Roxane"
                  className="h-64 w-full object-cover"
                  priority
                />
              </div>

              <div className="space-y-2 p-6">
                <h2 className="bg-gradient-to-br from-pink-500 via-pink-300 to-white bg-clip-text text-2xl font-semibold text-transparent">
                  Mes Vidéos
                </h2>

                <div className="mp-4 space-y-2 text-muted-foreground">
                  <p>Cette section est dédié à mes vidéos.</p>

                  <p>
                    Vous y trouverez des contenus exclusifs et variés. Univers,
                    ambiance, thèmes, tout est fait pour vous offir une
                    expérience unique.
                  </p>

                  <p>
                    Du contenu personnalisé est également possible,
                    n&apos;hésitez pas à me contacter pour en discuter !
                  </p>
                </div>

                <Button asChild className="mt-12 w-full">
                  <Link
                    href="/videos"
                    className="font-medium text-primary hover:underline"
                  >
                    Accéder aux vidéos
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Section Contenu personnalisé */}
          <section className="mx-auto max-w-4xl px-4 py-10">
            <div className="flex flex-row-reverse gap-2 max-md:flex-col">
              <div className="w-full overflow-hidden rounded-lg bg-card shadow-md">
                <Image
                  src="/images/feet.jpg"
                  alt="Image de Roxane French Feet"
                  width={1200}
                  height={600}
                  className="h-64 w-full object-cover"
                  priority
                />
              </div>

              <div className="space-y-6 p-6">
                <h2 className="bg-gradient-to-r from-pink-500 via-pink-300 to-white bg-clip-text text-2xl font-semibold text-transparent">
                  Contenu Personnalisé
                </h2>

                <p className="text-muted-foreground">
                  Le contenu proposé vuos plait, mais vous avez envie d&apos;une
                  petite touche en plus, d&apos;une attention particlulière ?
                  N&apos;hésitez pas à me contacter pour que nous puissions en
                  discuter !
                </p>

                <Button asChild className="w-full">
                  <Link href="/contact">Me contacter</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
      </DefaultLayout>
    </>
  );
};

export default HomePage;
