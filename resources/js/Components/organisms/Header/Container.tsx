import useScrollY from "@/hooks/useScrollY";
import Component from "./Component";
import { usePage } from "@inertiajs/react";
import { useMediaQuery } from "@mui/material";
import { BREAK_POINT } from "@/constants/BreakPoint";

const Container: React.FC = () => {

    const testClick = () => alert(1);
    const scrollY = useScrollY();
    const { url } = usePage();
    const path = url.split('/')[1] ?? "";
    const isSmSize = useMediaQuery(BREAK_POINT.WEIGHT_LANGE_SM);


    return (
        <Component
            noticeOnClick={testClick}
            accountOnClick={testClick}
            scrollY={scrollY}
            path={path}
            isSmSize={isSmSize}
        />
    );
}

export default Container;