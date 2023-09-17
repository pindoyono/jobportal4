import {Link} from "@inertiajs/inertia-react";
import t from "@/Hooks/useTranslate";

export default function JobCard({lang, job}) {
    return (
        <div className="min-w-full mt-2.5">
            <div className="flex items-baseline justify-between align-middle">
                <div>
                    <Link
                        href={route("jobDetails", {
                            slug: job.slug,
                        })}
                        className="text-2xl hover:text-blue-400 hover:cursor-pointer transition duration-200"
                    >
                        {job.job_title}
                    </Link>
                    <div
                        className="small-category-label mt-5 text-xs uppercase md:flex-row md:items-center md:space-x-5">
                        <span>{job.location.location_name}</span> <span className="ml-1">{job.department.department_name}</span> <span className="ml-1">{job.contract_type.contract_type_name}</span> {job.salary &&
                        <span className="ml-1"> {job.salary}</span>}
                    </div>
                </div>
                <div className="mt-5 uppercase">
                    <Link
                        href={route("jobDetails", {
                            slug: job.slug,
                        })}
                        className="rounded tracking-widest bg-blue-700 px-7 py-1.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        {t("Apply", lang)}
                    </Link>
                </div>
            </div>
        </div>
    );
}
