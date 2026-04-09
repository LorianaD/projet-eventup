import { useState } from "react";

export function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    function handleChange(event) {
        const { name, value, type, files } = event.target;

        setValues((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : value,
        }));
    }

    return { values, handleChange, setValues };
}