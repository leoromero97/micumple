"use client";
import Header from "@/components/Header";
import NavBar from "@/components/Navbar";
import Image from "next/image";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { useBreakpoint } from "@/hooks/useBreakpoints";
import { balloons } from "balloons-js";

export default function Home() {
  const [open, setOpen] = useState(false);
  const { breakpoint } = useBreakpoint();
  console.log(breakpoint.toString());

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    balloons();
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex flex-col min-h-screen p-4 gap-16 md:gap-32 sm:p-20 w-full bg-neutral-900 text-neutral-50">
        <main className="flex flex-col gap-8 max-w-5xl">
          <NavBar />
          <picture className="overflow-hidden rounded-sm max-w-xl">
            <Image
              src="/leo.jpeg"
              alt="Foto Leo"
              width={300}
              height={500}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-[400px] md:h-[500px] object-cover object-top"
            />
          </picture>
          <Header />
          <h2 className="text-2xl font-semibold">Tour</h2>
          <Banner
            image={{ src: "/lanuevadepompeya.jpg", alt: "Imagen" }}
            title="1er parada: Unas hambugesitas o ke?"
            description="La idea es estar desde las 20:30 h hasta las 23 h para compartir hamburguesas y lo que quieran tomar en La Nueva de Pompeya. PD: Hay torta xd 🍔"
            link={{
              href: "https://www.instagram.com/nuevadepompeya_/",
              text: "Ver Instagram",
            }}
          />
          <Banner
            image={{ src: "/pch.jpeg", alt: "Imagen pch" }}
            title="2da parada: Previa en Pch"
            description="La idea es estar desde las 23:30 o 00 h para previar con unos fernecitos y vodka 🍾"
            link={{
              href: "https://www.google.com/maps/place/Parque+Chacabuco,+Curapalig%C3%BCe+1525,+C1406+DBC,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6394019,-58.4448873,17z",
              text: "Ver ubicación",
            }}
          />
          <Banner
            image={{ src: "/bellakeo.jpeg", alt: "Imagen bellakeo", className: 'object-bottom' }}
            title="3ra parada: Nos fuimos al baile"
            description="La idea es salir para Bellakeo (almagro) tipo 1:30 h, sacar 1 mesa con VIP y bailar hasta el amanecerrr 🕺"
            link={{
              href: "https://www.instagram.com/bellakeooficial/",
              text: "Ver Instagram",
            }}
          />
        </main>
        <footer className="flex flex-col w-full fixed bottom-0 pb-3 md:pb-6 items-center justify-center px-4">
          <Button
            text="Confirmar asistencia"
            variant="primary"
            onClick={handleOpen}
            className="w-full max-w-md"
          />
        </footer>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <div className="flex flex-col items-center justify-center absolute h-full w-full bg-transparent">
            <dialog
              className={`
              bg-neutral-900 
              flex 
              flex-col
              relative
              px-4
              pt-2
              pb-6
              rounded-sm
              text-neutral-50
              overflow-scroll
              max-h-[450px]
              min-w-[300px]
              `}
            >
              <div className="w-full flex items-end justify-end">
                <button
                  className="rounded-full p-1 items-center justify-center hover:bg-neutral-700 cursor-pointer"
                  onClick={handleClose}
                >
                  <Image
                    src="/close.svg"
                    alt="icono de cierre"
                    height={32}
                    width={32}
                  />
                </button>
              </div>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSc6JVfHLlJ9WOB2-SxYjbZoJQeH22xjLtZcpY9I8QSrJ1ITVg/viewform?embedded=true"
                width={breakpoint === "xs" ? "300" : "600"}
                height="500"
                title="Formulario para recopilar info de la asistencia"
              >
                Cargando…
              </iframe>
            </dialog>
          </div>
        </Modal>
      </div>
    </LocalizationProvider>
  );
}
