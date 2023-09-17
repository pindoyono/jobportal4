import React from "react";
import {Link, Head} from "@inertiajs/inertia-react";
import Front from "@/Layouts/Front";
import JobFilters from "@/Components/JobFilters";
import HomepageDepartment from "@/Components/HomepageDepartment";

export default function Homepage({
                                     jobs,
                                     departments,
                                     contractTypes,
                                     locations,
                                     lang,
                                     queryFilters,
                                 }) {
    return (
        <Front>
            <Head title="Jobs"/>
            <div className="main-bg pb-4 pt-10 mt-10 min-h-full">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <JobFilters
                        lang={lang}
                        departments={departments}
                        contractTypes={contractTypes}
                        locations={locations}
                        queryFilters={queryFilters}
                    />
                </div>
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    {queryFilters.department ? (
                        departments.map((department) => (
                            department.id === parseInt(queryFilters.department) &&
                            <HomepageDepartment department={department} jobs={jobs} lang={lang}/>
                        ))
                    ) : (
                        departments.map((department) => (
                            <HomepageDepartment department={department} jobs={jobs} lang={lang}/>
                        ))
                    )}
                </div>

            </div>
        </Front>
    );
}
