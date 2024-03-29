import React, { useState, useEffect } from "react";
import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import { useForm } from "@inertiajs/react";
import UniversalButton from "../Buttons/UniversalButtonComponent";
import DropdownForm from "../Inputs/DropdownForm";
const inputStyle = {
    maxWidth: "500px",
    width: "100%",
    margin: "0.5rem",
};

export default function AdminUpdate(props) {
    const [result, setResult] = useState("");
    let myVar;
    const [loading, setLoading] = useState(true);
    const urlSearchParams = new URLSearchParams(window.location.search);
    myVar = urlSearchParams.get("id");

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        firstname: "",
        lastname: "",
        department: "",
        TelNr1: "",
        TelNr2: "",
        rank: "",
        country: "",
        zip: "",
        city: "",
        street: "",
        role: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`/api/editUser`, {
                    id: myVar,
                });

                setResult(response.data);
                console.log();
                console.log();
                setData({
                    id: myVar,
                    name: response.data.user.name,
                    email: response.data.user.email,
                    role: response.data.user.role,

                    firstname: response.data.persons.firstname,
                    lastname: response.data.persons.lastname,
                    department: response.data.persons.department,
                    TelNr1: response.data.persons.TelNr1,
                    TelNr2: response.data.persons.TelNr2,
                    rank: response.data.persons.rank,
                    personAddress_id: response.data.persons.personAddress_id,

                    country: response.data.address.country,
                    zip: response.data.address.ZIP,
                    city: response.data.address.city,
                    street: response.data.address.street,
                });
            } catch (error) {
                console.error("Fehler beim Laden der Daten:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [myVar]);

    // console.log(data);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("/api/updateUser", data)
            .then(() => {
                alert(`Benutzer ${data.name} wurde erfolgreich edititert.`);
                window.location.href = "AdminHome";
            })
            .catch((error) => {
                console.log("ERROR:: ", error.response.data);

                alert(`Es wurden nicht alle Felder ausgefüllt`);
            });
    };

    const handleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    if (loading) {
        return <div>Laden...</div>;
    }

    return (
        <>
            <div>
                <div className="flex justify-center align-center p-12">
                    <form onSubmit={handleSubmit}>
                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="name"
                                value="Username"
                            />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="email"
                                value="Email"
                            />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="firstname"
                                value="Vorname"
                            />

                            <TextInput
                                id="firstname"
                                name="firstname"
                                value={data.firstname}
                                className="mt-1 block w-full"
                                autoComplete="firstname"
                                isFocused={true}
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.firstname}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="lastname"
                                value="Nachname"
                            />

                            <TextInput
                                id="lastname"
                                name="lastname"
                                value={data.lastname}
                                className="mt-1 block w-full"
                                autoComplete="lastname"
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.lastname}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="department"
                                value="Abteilung"
                            />

                            <DropdownForm
                                projects={props.name.department}
                                onHandleChange={handleChange}
                                value={data.department}
                                id={data.department}
                                name={"department"}
                                autoComplete={"department"}
                            ></DropdownForm>
                            <InputError
                                message={errors.department}
                                className="mt-2"
                            />
                        </div>
                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="TelNr1"
                                value="Telefonnummer 1"
                            />

                            <TextInput
                                id="TelNr1"
                                name="TelNr1"
                                value={data.TelNr1}
                                className="mt-1 block w-full"
                                autoComplete="TelNr1"
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.TelNr1}
                                className="mt-2"
                            />
                        </div>
                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="TelNr2"
                                value="Telefonnummer 2"
                            />

                            <TextInput
                                id="TelNr2"
                                name="TelNr2"
                                value={data.TelNr2}
                                className="mt-1 block w-full"
                                autoComplete="TelNr2"
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.TelNr2}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="role"
                                value="Role"
                            />

                            <div className="relative mt-1">
                                <select
                                    id="role"
                                    name="role"
                                    value={data.role}
                                    onChange={handleChange}
                                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                >
                                    <option value="">Select a role</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Manager</option>
                                    <option value="3">Mitarbeiter</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 12l-6-6h12l-6 6z" />
                                    </svg>
                                </div>
                            </div>

                            <InputError
                                message={errors.role}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="country"
                                value="Country"
                            />

                            <TextInput
                                id="country"
                                name="country"
                                value={data.country}
                                className="mt-1 block w-full"
                                autoComplete="country"
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.country}
                                className="mt-2"
                            />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="zip"
                                value="Postleitzahl"
                            />

                            <TextInput
                                id="zip"
                                name="zip"
                                value={data.zip}
                                className="mt-1 block w-full"
                                autoComplete="zip"
                                handleChange={handleChange}
                                required
                            />

                            <InputError message={errors.zip} className="mt-2" />
                        </div>

                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="city"
                                value="City"
                            />

                            <TextInput
                                id="city"
                                name="city"
                                value={data.city}
                                className="mt-1 block w-full"
                                autoComplete="city"
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.city}
                                className="mt-2"
                            />
                        </div>
                        <div style={inputStyle}>
                            <InputLabel
                                className="mt-4"
                                forInput="street"
                                value="Street"
                            />

                            <TextInput
                                id="street"
                                name="street"
                                value={data.street}
                                className="mt-1 block w-full"
                                autoComplete="street"
                                handleChange={handleChange}
                                required
                            />

                            <InputError
                                message={errors.street}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex justify-center align-center p-5">
                            <UniversalButton
                                type="submit"
                                text="Update"
                            ></UniversalButton>
                            <div className="mx-2"></div>
                            <UniversalButton
                                type="button"
                                href="AdminHome"
                                text="Zurück"
                            ></UniversalButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
