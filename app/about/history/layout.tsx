"use client";

import "../../../styles/globals.css";
import { ReactNode } from "react";
import '../../../styles/tailwind.css';
import '../../../styles/tooltip.css';
import { MetaHTMLAttributes } from "react";
import InfoBar from "../../../components/InfoBar";
import Navigation from "../../../components/navigation/Navigation";



interface IProps {
  children: ReactNode;
}



interface Props {
  children: React.ReactNode;
  params: { locale: string };
}
300
export default function Layout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <InfoBar />
        {children}
      </body>
    </html>
  );
}

function hydrateRoot(arg0: HTMLElement, arg1: JSX.Element) {
  throw new Error("Function not implemented.");
}
