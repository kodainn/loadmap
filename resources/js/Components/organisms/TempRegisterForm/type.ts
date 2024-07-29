type FormModel = {
    name: string,
    email: string,
    password: string
}

type ErrorFormPartial = Partial<Record<"name" | "email" | "password", string>>;

export type ComponentProps = {
    isSmSize:       boolean,
    isMdSize:       boolean,
    data:           FormModel,
    handleChange:   (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: FormUnion) => void,
    submit:         (e: React.FormEvent<HTMLFormElement>) => void,
    processing:     boolean,
    errors:         ErrorFormPartial
}

export type FormUnion = "name" | "email" | "password";