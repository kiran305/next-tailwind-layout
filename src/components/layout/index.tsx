'use client'
import { Inter } from 'next/font/google';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';
import React, { useState } from "react";
import classNames from "classnames";
const inter = Inter({ subsets: ['latin'] });
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const toggleSideBar = () => {
    console.log('---sidebarOpen---', sidebarOpen);
    setOpen(!open);
    console.log('---open---', open);
    if(!sidebarOpen && !open) setSidebarOpen(true);

  }

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <div className="grid min-h-screen">
          <div className={classNames({
            "grid grid-rows-header fixed w-full md:w-header md:ml-header bg-white shadow-white": true,
            "border-b border-b-black-600": true
          })}>
            <Header />
            <div className="flex justify-end items-center p-2" >
              <button className="md:hidden" onClick={() => toggleSideBar()}>
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>

          </div>
          <div className="grid md:grid-cols-sidebar grid-cols-top truncate">
            <Sidebar open={sidebarOpen} setOpen={(open) => setSidebarOpen(open)} />
            <div className="max-h-content overflow-y-auto mt-16">
              {children}
              <Footer/>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}