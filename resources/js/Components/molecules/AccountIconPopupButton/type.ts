import Size from "@/commonTypes/Size"

export type AccountIconPopupButtonProps = {
    size:    Size
}

export type ComponentProps = {
    size:        Size,
    anchorEl:    HTMLElement | null,
    isOpen:      boolean,
    handleClick: (event: React.MouseEvent<HTMLDivElement>) => void,
    handleClose: () => void
}
