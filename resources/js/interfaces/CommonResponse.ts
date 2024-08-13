export type user = {
    id:         number,
    name:       string,
    icon_path:  string | null,
    first_name: string | null,
    last_name:  string | null
};

export type auth = {
    user: user
}

export type errors = {};

export type flash = {
    error_message:   string | null,
    success_message: string | null
};