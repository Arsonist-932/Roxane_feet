"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Send, Twitter } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ContactPage = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSucces, setIsSucces] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSucces(true);

    setTimeout(() => {
      setIsSucces(false);
      setIsPending(false);
      // router.push("/");
    }, 1000);
  };

  return (
    <>
      <main className="mx-auto flex h-screen flex-col items-center justify-center">
        <div className="space-y-4 px-5 pb-20 text-center">
          <h1 className="text-2xl">Me contacter</h1>

          <p>
            Une idée, une envie ou un projet ? Écris-moi, je suis toujours
            ouverte à de nouvelles collaborations créatives ✨
          </p>
        </div>

        {isSucces ? (
          <div className="p-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-green-700">
                  Votre message à bien été envoyé !!
                </CardTitle>
              </CardHeader>

              <CardContent>
                Merci pour votre message, je vous répondrais au plus vite !
                N'hésitez pas à consulter vos spams si vous n'avez pas de
                réponse sous 72h.
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card className="min-w-72">
            <CardHeader className="text-center">
              <CardTitle>Formulaire de contact</CardTitle>

              <CardDescription>
                Une demande ? Une question ? N&apos;hésitez pas à me contacter
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="" className="max-md:text-sm">
                    Nom et prénom
                  </Label>

                  <Input type="etxt" name="name" autoComplete="off" required />
                </div>

                <div>
                  <Label htmlFor="email" className="max-md:text-sm">
                    Email *
                  </Label>

                  <Input
                    type="email"
                    name="email"
                    autoComplete="off"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="max-md:text-sm">
                    Objet *
                  </Label>

                  <Input type="text" />
                </div>

                <div>
                  <Label htmlFor="message" className="max-md:text-sm">
                    Message *
                  </Label>

                  <Textarea name="Message" />
                </div>

                <Button type="submit">
                  <Send />
                  {isPending
                    ? "Envoi du message en cours"
                    : "Envoyer le message"}
                </Button>
              </form>
            </CardContent>

            <div className="flex justify-center gap-4 pb-4">
              <Link href={""}>
                <Instagram className="hover:text-red-500" />
              </Link>

              <Link href={""}>
                <Twitter className="hover:text-red-500" />
              </Link>
            </div>
          </Card>
        )}
      </main>
    </>
  );
};

export default ContactPage;
