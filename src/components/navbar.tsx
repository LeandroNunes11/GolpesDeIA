'use client'

import React, { useCallback, useEffect, useState } from "react"
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid"

interface NavItemProps {
  children: React.ReactNode
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

function NavItem({ children, href, onClick }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href && href.startsWith("http") ? "_blank" : "_self"}
        variant="small"
        className="font-medium cursor-pointer"
        onClick={onClick}
      >
        {children}
      </Typography>
    </li>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  const handleOpen = () => setOpen((cur) => !cur)

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpen(false)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = useCallback((targetId: string) => {
    const elem = document.getElementById(targetId)
    if (elem) {
      const offset = 80
      const elementPosition = elem.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    setOpen(false)
    // Use requestAnimationFrame for smoother transition
    requestAnimationFrame(() => {
      scrollToSection(targetId)
    })
  }, [scrollToSection])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        scrollToSection(hash)
      }
    }

    handleHashChange() // Call once on mount
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [scrollToSection])

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography variant="h6" color={isScrolling ? "blue-gray" : "white"}>
          GOLPES COM IA
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem href="#home" onClick={(e) => handleNavClick(e, "#home")}>
            Home
          </NavItem>
          <NavItem href="#sobre" onClick={(e) => handleNavClick(e, "#sobre")}>
            Sobre
          </NavItem>
          <NavItem href="mailto:sacblogseguranca@gmail.com">Ajuda</NavItem>
        </ul>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href="#home" onClick={(e) => handleNavClick(e, "#home")}>
              Home
            </NavItem>
            <NavItem href="#sobre" onClick={(e) => handleNavClick(e, "#sobre")}>
              Sobre
            </NavItem>
            <NavItem href="mailto:sacblogseguranca@gmail.com">Ajuda</NavItem>
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  )
}

export default Navbar