import React from "react";
import {Head} from "@inertiajs/inertia-react";
import Front from "@/Layouts/Front";
import t from "@/Hooks/useTranslate";
import ApplyForm from "@/Components/ApplyForm";

export default function JobDetails({job, lang}) {
    return (
        <Front>
            <Head title={job.job_title}/>

            <div className="bg-white mt-12 pb-12 pt-4">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {job.isExpired && (
                        <div
                            className="mt-10 bg-red-100 mb-3 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            {t("This job is expired and only you can see it while being logged in ", lang)}
                        </div>
                    )}
                    <div className="w-2/3">
                        <h1 className="mt-10 text-4xl font-normal text-zinc-600">{job.job_title}</h1>
                        <div className="mt-5 text-sm font-bold uppercase tracking-widest text-zinc-500 md:flex-row md:items-center md:space-x-5">
                            {job.location.location_name} - {job.department.department_name} - {job.contract_type.contract_type_name} {job.salary &&
                            <span>- {job.salary}</span>}
                        </div>
                    </div>
                    <div className="mt-5 uppercase tracking-widest">
                        <a href="#apply-form" className={`rounded bg-blue-700 px-3.5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>{t("Apply for this job", lang)}</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="main-bg pb-4 pt-4 mt-10">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div dangerouslySetInnerHTML={{
                        __html: job.job_description,
                    }}></div>
                    {job.key_responsibilities && (
                        <>
                            <h3 className="title text-xl font-semibold mt-3 mb-3">
                                {t("Your Main Responsibilities\n", lang)}
                            </h3>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: job.key_responsibilities,
                                }}
                            ></div>
                        </>
                    )}
                    {job.skills_and_experience && (
                        <>
                            <h3 className="title text-xl font-semibold mt-3 mb-3">
                                {t("Qualities We Are Looking For", lang)}
                            </h3>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: job.skills_and_experience,
                                }}
                            ></div>
                        </>
                    )}
                    <div className="mt-12 mb-12" id="apply-form">
                        <ApplyForm job={job} lang={lang}/>
                    </div>
                </div>
            </div>
        </Front>
    );
}
