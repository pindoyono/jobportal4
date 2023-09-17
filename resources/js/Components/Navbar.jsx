import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";
import t from "@/Hooks/useTranslate";

export default function Navbar({ lang, scroll }) {
    return (
        <>
            <nav
                className={
                    scroll
                        ? "bg-white shadow-md fixed inset-x-0 z-20"
                        : "bg-white fixed inset-x-0 z-20"
                }
            >
                <div className="max-w-screen-xl mx-auto md:px-72">
                    <div className="flex justify-start items-center">
                        <div className="flex items-center py-1">
                            <Link href={route("homepage")}>
                                <ApplicationLogo />
                            </Link>
                            <Link href={route("homepage")}>
                                <span className="ml-2 font-bold hover:text-blue-800 text-2xl text-neutral-800">
                                    Leverage Jobs
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}
