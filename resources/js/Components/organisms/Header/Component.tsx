import { AppBar, Box, Button, Typography } from "@mui/material";
import SearchLink from "@/Components/atoms/SearchLink/Container";
import NoticePopupButton from "@/Components/molecules/NoticePopupButton/Container";
import AccountIconPopupButton from "@/Components/molecules/AccountIconPopupButton/Container";
import InertiaLinkTab from "@/Components/atoms/InertiaLinkTab/Container";
import { ComponentProps } from "./type";
import { URL_PATH } from "@/constants/UrlPath";


const Component: React.FC<ComponentProps> = ({
    noticeOnClick,
    accountOnClick,
    scrollY,
    path,
    isSmSize
}) => {

    return (
        <Box 
            sx={{
                flexGrow: 1
            }}
        >
            <AppBar 
                sx={{
                    backgroundColor: 'white',
                    color: 'black'
                }}
            >
                <Box 
                    sx={{
                        display: scrollY != 0 ? 'none' : 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 2,
                        marginLeft: 3,
                        marginRight: 3
                    }}
                >
                    <Typography>
                        AppName
                    </Typography>
                    <Box 
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                        }}
                    >
                        <SearchLink
                            size={isSmSize ? "medium" : "large"}
                        />
                        <NoticePopupButton
                            onClick={noticeOnClick}
                            size={isSmSize ? "medium" : "large"}
                        />
                        <AccountIconPopupButton
                            onClick={accountOnClick}
                            size={isSmSize ? "medium" : "large"}
                        />
                        <Button
                            variant="contained"
                            size={isSmSize ? "small" : "large"}
                            href="#contained-buttons"
                        >
                            投稿する
                        </Button>
                    </Box>
                </Box>
                <Box 
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        whiteSpace: 'nowrap',
                        }}
                >
                    <InertiaLinkTab 
                        href={route('home')} 
                        name="ホーム" 
                        isSelected={path === URL_PATH.HOME_PAGE_PATH}
                    />
                    <InertiaLinkTab 
                        href={route('timeline')}
                        name="タイムライン"
                        isSelected={path === URL_PATH.TIMELINE_PAGE_PATH}
                    />
                    <InertiaLinkTab 
                        href={route('follow')}
                        name="フォロー"
                        isSelected={path === URL_PATH.FOLLOW_PAGE_PATH}
                    />
                    <InertiaLinkTab
                        href={route('ad')}
                        name="広告"
                        isSelected={path === URL_PATH.AD_PAGE_PATH}
                    />
                    <InertiaLinkTab
                        href={route('announcement')}
                        name="お知らせ"
                        isSelected={path === URL_PATH.ANNOUNCEMENT_PAGE_PATH}
                    />
                </Box>
            </AppBar>
        </Box>
    );
}

export default Component;