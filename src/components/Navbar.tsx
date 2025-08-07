"use client";

import {
  Github,
  Linkedin,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu } from "@headlessui/react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed flex flex-row top-0 left-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-black/30 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-7xl mx-auto flex flex-row justify-between items-center px-6 py-4">
        {/* Lado esquerdo - Links de navegação */}
        <div className="flex flex-row items-center gap-6">
          <span className="font-semibold text-lg tracking-tight">
            &lt;/ GabrielCaixeta &gt;
          </span>

          <ul className="hidden md:flex gap-5 text-sm text-neutral-600 dark:text-neutral-300">
            <li>
              <button
                onClick={() => scrollToSection("sobre")}
                className="hover:text-black dark:hover:text-white transition"
              >
                Sobre mim
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projetos")}
                className="hover:text-black dark:hover:text-white transition"
              >
                Projetos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("conhecimentos")}
                className="hover:text-black dark:hover:text-white transition"
              >
                Conhecimentos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contato")}
                className="hover:text-black dark:hover:text-white transition"
              >
                Contato
              </button>
            </li>
          </ul>
        </div>

        {/* Lado direito - Ícones e ações */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/gabrielcaixeta01"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 hover:scale-110 transition" />
          </a>

          <a
            href="https://linkedin.com/in/gabrielcaixetahomero"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 hover:scale-110 transition" />
          </a>

          {/* Dropdown de idioma */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center focus:outline-none">
              <Image
                src="/br.svg"
                alt="Português"
                width={24}
                height={24}
                className="rounded"
              />
              <ChevronDown className="w-4 h-4 ml-1 text-neutral-600 dark:text-neutral-300" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-24 bg-white dark:bg-neutral-800 rounded-md shadow-md z-50 ring-1 ring-black/5">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => alert("Switch to English")}
                    className={`flex items-center w-full px-3 py-2 text-sm gap-2 ${
                      active
                        ? "bg-neutral-100 dark:bg-neutral-700"
                        : ""
                    }`}
                  >
                    <Image
                      src="/us.svg"
                      alt="English"
                      width={20}
                      height={20}
                      className="rounded"
                    />
                    EN
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>

          {/* Switch de tema */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="transition hover:scale-110"
              aria-label="Trocar tema"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}