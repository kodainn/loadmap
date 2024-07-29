import { useMediaQuery } from "@mui/material";
import Component from "./Component";
import { BREAK_POINT } from "@/constants/BreakPoint";
import { useForm } from "@inertiajs/react";
import { FormUnion } from "./type";

const Container: React.FC = () => {

    const isSmSize = useMediaQuery(BREAK_POINT.WEIGHT_LANGE_SM);
    const isMdSize = useMediaQuery(BREAK_POINT.WEIGHT_LANGE_MD);
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: FormUnion) => {
        const value = e.target.value;
        setData(key, value);
    }

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('temp-register');
    }
    
    return (
        <Component
            isSmSize={isSmSize}
            isMdSize={isMdSize}
            data={data}
            handleChange={handleChange}
            submit={submit}
            processing={processing}
            errors={errors}
        />
    );
}

export default Container;