import Front from "@/Layouts/Front";
import {Head} from "@inertiajs/inertia-react";
import t from "@/Hooks/useTranslate";

export default function JobApplicationReceived({job, lang}) {
    return (
        <Front>
            <Head title={`Application Received ${job.job_title}`}/>
            <div className="main-bg pb-4 pt-24 mt-10">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <h1 className="jobTitle font-semibold text-5xl text-blue-800">
                        {t("Application Received", lang)}
                    </h1>
                    <div className="flex items-center text-2xl mt-3 text-zinc-700">
                        {t("Thank you for applying to:", lang)} {job.job_title}
                        <br/>
                        {t("We will be in touch soon.", lang)}
                    </div>
                </div>
            </div>
        </Front>
    );
}
