import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkReactScroll } from 'react-scroll';
import { MenuBurger } from "./MenuBurger";

export const Navbar = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 26) {
        setShowBorder(true);
      } else {
        setShowBorder(false);
      }
    })
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <nav className={`w-full sticky top-0 mt-1 bg-brand-gray z-40 ${showBorder ? 'border-b border-gray-300' : ''}`}>
        <div className="relative flex flex-row items-center justify-between px-3 py-3 mx-auto lg:py-2 sm:px-4 lg:px-10">
          <div className="flex items-center">
            <div className="flex items-center md:hidden">
              <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed" }
              >
                <MenuBurger toggle={() => toggleOpen()}/>
              </motion.nav>
            </div>
            <div className="z-10 flex items-center pl-2.5 sm:pl-2">
              <Link
                to="/"
                onClick={scrollTop}
                className={`relative z-10 flex items-center w-auto text-sm sm:text-2xl font-extrabold leading-none text-brand-green-500 select-none tracking-wide ${showBorder ? '' : ''}`}
              >
                PsicologiaMia
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="top-0 left-0 z-0 flex flex-row items-center justify-center w-full h-full space-x-10 text-base font-semibold dark:font-medium">
              <li>
                <LinkReactScroll to="services" smooth={true} duration={500} className="font-medium leading-6 tracking-normal text-gray-600 transition duration-150 ease-out cursor-pointer focus:outline-none hover:text-gray-900">
                  Servicios
                </LinkReactScroll>
              </li>
              <li>
                <LinkReactScroll to="prices" smooth={true} duration={500} className="font-medium leading-6 tracking-normal text-gray-600 transition duration-150 ease-out cursor-pointer focus:outline-none hover:text-gray-900">
                  Precios
                </LinkReactScroll>
              </li>
              <li>
                <LinkReactScroll to="faqs" smooth={true} duration={500} className="font-medium leading-6 tracking-normal text-gray-600 transition duration-150 ease-out cursor-pointer focus:outline-none hover:text-gray-900">
                  Preguntas Frecuentes
                </LinkReactScroll>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center space-x-2 sm:space-x-3">
            <Link to="/signin/cliente" className={`inline-flex items-center justify-center w-20 sm:w-32 py-2 text-sm sm:text-base font-medium text-white bg-brand-brown-500 hover:bg-brand-brown-700 rounded-md focus:outline-none ${showBorder ? 'shadow-none' : 'shadow-md shadow-brand-brown-500/50'}`}>
              Inicia Sesión
            </Link>
            <span className="inline-flex">
              <Link to="/signup/cliente" className={`inline-flex items-center justify-center w-20 sm:w-32 py-2 text-sm sm:text-base font-medium text-white bg-brand-green-500 rounded-md hover:bg-brand-green-700 focus:outline-none ${showBorder ? 'shadow-none' : 'shadow-md shadow-brand-green-500/50'}`}>
                Registrarme
              </Link>
            </span>
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            initial={false}
            transition={{ type: "spring" }}
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { opacity: 0, display: 'none' },
              open: { opacity: 1, display: 'block' },
            }}
            exit={{ opacity: 0, display: 'none' }}
            className="absolute w-full font-medium text-gray-800 border-b border-gray-300 shadow-md bg-brand-gray md:hidden shadow-brand-gray/50"
          >
            <div className="px-2.5 sm:px-4 py-3 space-y-1.5">
              <LinkReactScroll
                onClick={() => toggleOpen()}
                to="services"
                smooth={true}
                duration={500}
                className="block cursor-pointer rounded-xl focus:bg-gray-300 dark:focus:bg-slate-900 tracking-wide px-3 py-1.5"
              >
                  Servicios
              </LinkReactScroll>
              <LinkReactScroll
                onClick={() => toggleOpen()}
                to="prices"
                smooth={true}
                duration={500}
                className="block cursor-pointer rounded-xl focus:bg-gray-300 dark:focus:bg-slate-900 tracking-wide px-3 py-1.5"
              >
                Precios
              </LinkReactScroll>
              <LinkReactScroll
                onClick={() => toggleOpen()}
                to="faqs"
                smooth={true}
                duration={500}
                className="block cursor-pointer rounded-xl focus:bg-gray-300 dark:focus:bg-slate-900 tracking-wide px-3 py-1.5"
              >
                Preguntas Frecuentes
              </LinkReactScroll>
            </div>
          </motion.div>
        </AnimatePresence>
      </nav>
    </>
  )
}
