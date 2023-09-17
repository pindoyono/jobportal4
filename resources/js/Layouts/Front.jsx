import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import {useScroll} from "@/Hooks/useScroll";

export default function Front({lang, children}) {
    const scroll = useScroll();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar lang={lang} scroll={scroll} />
            <div className="main-content main-bg flex-grow min-h-full">{children}</div>
            <Footer lang={lang}/>
        </div>
    );
}
