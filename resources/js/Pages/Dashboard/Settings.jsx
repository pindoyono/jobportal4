import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import TableHead from "@/Components/TableHead";
import TableTd from "@/Components/TableTd";
import axios from "axios";
import {toast} from "react-toastify";

export default function Settings(props) {
    const settings = props.settings;
    console.log(settings);

    const [settingValue, setSettingValue] = useState("");

    const editsetting = (e, settingID) => {
        e.preventDefault();
        axios
            .get(route("settings.show", { setting: settingID }))
            .then((response) => {
                setSettingValue(response.data.value);
            })
            .catch((Error) => toast.error(Error.response.data.message));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Settings Overview
                </h2>
            }
        >
            <Head title="Settings Overview" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <table className="w-full table-auto">
                            <TableHead
                                headings={[
                                    "ID",
                                    "Name",
                                    "Value",
                                    "Actions",
                                ]}
                            />
                            <tbody>
                            {settings.map((setting) => (
                                <tr key={setting.id}>
                                    <TableTd field="ID">{setting.id}</TableTd>
                                    <TableTd field="Name">
                                        {setting.name}
                                    </TableTd>
                                    <TableTd field="Value">
                                        {setting.value}
                                    </TableTd>
                                    <TableTd field="View">
                                        <button
                                            onClick={(e) =>
                                                editsetting(e, setting.id)
                                            }
                                            className=" px-3 rounded py-1.5 text-green-700 hover:underline font-semibold"
                                        >
                                            Edit
                                        </button>
                                    </TableTd>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
