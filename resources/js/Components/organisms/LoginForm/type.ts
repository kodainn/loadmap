type FormModel = {
    name: string,
    password: string
}

type ErrorFormPartial = Partial<Record<"name" | "password", string>>;

export type ComponentProps = {
    isSmSize:       boolean,
    isMdSize:       boolean,
    data:           FormModel,
    handleChange:   (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: FormUnion) => void,
    submit:         (e: React.FormEvent<HTMLFormElement>) => void,
    processing:     boolean,
    errors:         ErrorFormPartial,
    flash:          any | undefined
}

export type FormUnion = "name" | "password";