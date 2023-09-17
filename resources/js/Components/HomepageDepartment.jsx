import JobCard from "@/Components/JobCard";
import t from "@/Hooks/useTranslate";

export default function HomepageDepartment({department, jobs, lang}) {
    return (
        <div className="min-w-full my-10">
            <h1 className="department-header uppercase">{department.department_name}</h1>
            <hr className="h-px horizontal-line my-5 bg-gray-200 border-0 dark:bg-gray-200" />
            <div className="flex flex-wrap">
                {jobs?.data.length > 0
                    ? jobs.data.map((job) => (job.department_id === department.id) && (
                        <JobCard key={job.id} job={job} lang={lang} />
                    ))
                    : t("No open positions", lang)}
            </div>
        </div>

    );
}
