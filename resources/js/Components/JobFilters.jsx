import t from "@/Hooks/useTranslate";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function JobFilters({
    lang,
    departments,
    contractTypes,
    locations,
    queryFilters,
}) {
    const [keyword, setKeyword] = useState(queryFilters.keyword || "");
    const [department, setDepartment] = useState(queryFilters.department || "");
    const [contractType, setContractType] = useState(
        queryFilters.contractType || ""
    );
    const [location, setLocation] = useState(queryFilters.location || "");
    const [processing, setProcessing] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        Inertia.get(
            route("homepage"),
            { keyword, department, contractType, location },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
                onBefore: () => {
                    setProcessing(true);
                },
                onFinish: () => {
                    setProcessing(false);
                },
            }
        );
    };

    return (
        <div className="rounded-lg py-3 mb-10 md:mb-0">
            <form name="jobFilters" id="jobFilters" onSubmit={submit}>
                <div className="grid grid-cols-1 md:grid-cols-10 gap-4 justify-between">
                    <div className="col-span-2 flex items-center mb-4 uppercase utility-label">
                        {t("Filter By:", lang)}
                    </div>
                    <div className="col-span-2 md:col-span-2 mb-4">
                        <select
                            name="location"
                            id="location"
                            className="w-full bg-gray-200 border border-gray-300 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-blue-500"
                            defaultValue={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">{t("Locations", lang)}</option>
                            {locations.map((loc) => (
                                <option key={`loc-${loc.id}`} value={loc.id}>
                                    {loc.location_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-span-3 mb-4">
                        <select
                            name="department"
                            id="department"
                            className="w-full bg-gray-200 border border-gray-300 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-blue-500"
                            defaultValue={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        >
                            <option value="">
                                {t("Departments", lang)}
                            </option>
                            {departments.map((department) => (
                                <option
                                    key={`department-${department.id}`}
                                    value={department.id}
                                >
                                    {department.department_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-span-2 mb-4">
                        <select
                            name="contractType"
                            id="contractType"
                            className="w-full bg-gray-200 border border-gray-300 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-blue-500"
                            defaultValue={contractType}
                            onChange={(e) => setContractType(e.target.value)}
                        >
                            <option value="">{t("Job Types", lang)}</option>
                            {contractTypes.map((ct) => (
                                <option key={`ct-${ct.id}`} value={ct.id}>
                                    {ct.contract_type_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-span-1 mb-4">
                        <button
                            type="submit"
                            className="bg-blue-700 text-white font-semibold py-2 px-4 rounded min-w-full"
                            disabled={processing}
                        >
                            {t("Filter", lang)}
                        </button>
                    </div>
                </div>

                {processing && (
                    <div className="flex justify-center mt-3 mb-3">
                        {t("Searching...", lang)}
                    </div>
                )}
            </form>
        </div>
    );
}
