import Auth from "@/commonTypes/Auth"

export type ContainerProps = {
    auth: Auth
}

export type ComponentProps = {
    noticeOnClick:  () => void,
    scrollY:        number,
    path:           string,
    isSmSize:       boolean,
    auth:           Auth
}