"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "about", current: false },
  { name: "Projects", href: "projects", current: false },
  { name: "Contact", href: "contact", current: false },
];

const Navbar = () => {
  const logo = "/SK.svg";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.3,
        ease: [0.22, 0, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const linkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  return (
    <div
      className={`bg-transparent flex justify-center items-center z-10 w-full`}
    >
      <div className={`xl:max-w-[1280px] w-full`}>
        <header className="text-white py-3">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="flex sm:flex-1">
              <Link href="/" className="">
                <span className="sr-only">Semil Khedawala</span>
                <Image height={70} width={70} src={logo} alt="SK logo" />
              </Link>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden md:flex sm:gap-x-12 font-cinzelD">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-semibold leading-6 `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                variants={menuVars}
                key="mobile-menu"
                initial="initial"
                animate="animate"
                exit="exit"
                // initial={{ opacity: 0, scale: 0.8 }}
                // animate={{ opacity: 1, scale: 1 }}
                // exit={{ opacity: 0, scale: 0.8 }}
                // transition={{ duration: 0.3, ease: "easeInOut" }}

                className="origin-top fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-purple md:px-16 px-6 py-3  md:max-w-sm sm:ring-1 md:ring-gray-900/10 flex flex-col"
              >
                <div className="z-1 flex-none flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Semil Khedawala</span>
                    <Image height={70} width={70} src={logo} alt="SK logo" />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="z-[-1] absolute top-0 left-0 h-full w-full flex items-center justify-center">
                  <div className="flex-1 -my-6 divide-y divide-gray-500/10">
                    <motion.div
                      className="space-y-2 py-6 flex items-center justify-center flex-col gap-3 h-full"
                      variants={containerVars}
                      initial="initial"
                      exit="initial"
                      animate="open"
                    >
                      {navigation.map((item) => (
                        <div className="overflow-hidden" key={item.name}>
                          <motion.div variants={linkVars}>
                            <Link
                              href={item.href}
                              className="-mx-3  rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-800 font-cinzelD flex items-center justify-center"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
