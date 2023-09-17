import t from "@/Hooks/useTranslate";
import { useForm, usePage } from "@inertiajs/inertia-react";
import ProgressBar from "./ProgressBar";
import { useEffect } from "react";

export default function ApplyForm({ job, lang }) {
    const { csrfToken } = usePage().props;

    const { data, setData, post, processing, errors, progress } = useForm({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
        terms: false,
        resume: null,
    });

    const submit = async (e) => {
        e.preventDefault();

        post(route("storeJobApplication", { job: job.slug }), {
            preserveScroll: true,
            resetOnSuccess: false,
        });
    };

    useEffect(() => {
        const fileInput = document.getElementById('resume');
        const fileNameDisplay = document.getElementById('file-name');

        fileInput.addEventListener('change', (event) => {
            if (event.target.files.length > 0) {
                fileNameDisplay.textContent = event.target.files[0].name;
            } else {
                fileNameDisplay.textContent = '';
            }
        });
    });



    return (
        <div className="rounded">
            <h4 className="title text-base font-semibold mb-5 uppercase">
                {t("Submit your application", lang)}
            </h4>
            <form
                name="applyForm"
                id="applyForm"
                encType="multipart/form-data"
                action={route("storeJobApplication", { job: job.slug })}
                method="POST"
                onSubmit={submit}
            >
                <input type="hidden" name="_token" value={csrfToken} />
                <label htmlFor="resume" className="block font-medium text-md text-gray-700">
                    {t("Resume/CV", lang)} <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center mt-2">
                    <label htmlFor="resume"
                           className="px-4 py-2 bg-gray-400 text-white rounded-lg cursor-pointer hover:bg-gray-500 transition duration-300 ease-in-out uppercase">
                        {t("Attach Resume/CV", lang)}
                    </label>
                    <input type="file" id="resume" name="resume"  accept="application/pdf" className="hidden" onChange={(e) => setData("resume", e.target.files[0])} />
                    <span id="file-name" className="ml-3"></span>
                </div>

                {errors.resume && (
                    <div className="text-rose-700 font-semibold mb-3">
                        {errors.resume}
                    </div>
                )}
                <label htmlFor="name" className="block font-medium text-md text-gray-700 mt-3">
                    {t("Full Name", lang)} <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-200 outline-0 focus:ring-0 rounded-lg p-3"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                />
                {errors.name && (
                    <div className="text-rose-700 font-semibold mb-3">
                        {errors.name}
                    </div>
                )}
                <label htmlFor="email" className="block font-medium text-md text-gray-700 mt-3">
                    {t("Email", lang)} <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="w-full border border-gray-200 outline-0 focus:ring-0 rounded-lg p-3"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                />
                {errors.email && (
                    <div className="text-rose-700 font-semibold mb-3">
                        {errors.email}
                    </div>
                )}
                <label htmlFor="phone" className="block font-medium text-md text-gray-700 mt-3">
                    {t("Phone", lang)} <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="w-full border border-gray-200 outline-0 focus:ring-0 rounded-lg p-3 mt-3"
                    value={data.phone}
                    onChange={(e) => setData("phone", e.target.value)}
                />
                {errors.phone && (
                    <div className="text-rose-700 font-semibold mb-3">
                        {errors.phone}
                    </div>
                )}
                <h4 className="title text-base font-semibold mt-3 mb-5 uppercase">
                    {t("Additional information", lang)}
                </h4>
                <textarea
                    name="coverLetter"
                    id="coverLetter"
                    placeholder={t("Add a cover letter or anything else you want to share.", lang)}
                    rows="5"
                    className="w-full border border-gray-200 outline-0 focus:ring-0 rounded-lg p-3 mb-3"
                    value={data.coverLetter}
                    onChange={(e) => setData("coverLetter", e.target.value)}
                />

                <p className="mt-3 text-gray-500">
                    <input
                        type="checkbox"
                        name="terms"
                        onChange={(e) => setData("terms", e.target.checked)}
                    />{" "}
                    {t(
                        "I accept the terms and conditions & privacy policy",
                        lang
                    )}
                </p>
                {errors.terms && (
                    <div className="text-rose-700 font-semibold mb-3">
                        {errors.terms}
                    </div>
                )}

               <div className="flex mt-5">
                   <button
                       disabled={processing}
                       type="submit"
                       className="mx-auto rounded uppercase tracking-widest bg-blue-700 px-3.5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   >
                       {t("Submit Application", lang)}
                   </button>
               </div>
            </form>

            {progress && (
                <div className="mt-5">
                    {t("Uploading...", lang)}
                </div>
            )}
        </div>
    );
}
