import {Link} from "@inertiajs/inertia-react";
import t from "@/Hooks/useTranslate";

export default function Footer({lang}) {
    return (
        <footer className="footer min-h-max pt-8 pb-32">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center">
                    <Link href={route("homepage")}>
                            <span className="text-blue-500 hover:text-indigo-500 hover:underline">
                                  Home Page
                            </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
