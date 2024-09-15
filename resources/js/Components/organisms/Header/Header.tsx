import useScrollY from "@/hooks/useScrollY";
import Component from "./Component";
import { usePage } from "@inertiajs/react";
import { useMediaQuery } from "@mui/material";
import { BREAK_POINT } from "@/constants/BreakPoint";
import { ContainerProps } from "./type";

const Header: React.FC<ContainerProps> = ({ auth }) => {

    const testClick = () => alert(1);
    const scrollY = useScrollY();
    const { url } = usePage();
    const path = url.split('/')[1] ?? "";
    const isSmSize = useMediaQuery(BREAK_POINT.WEIGHT_LANGE_SM);

    return (
        <Component
            noticeOnClick={testClick}
            scrollY={scrollY}
            path={path}
            isSmSize={isSmSize}
            auth={auth}
        />
    );
}

export default Header;
