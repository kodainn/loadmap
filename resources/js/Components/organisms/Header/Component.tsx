import { AppBar, Box, Typography } from "@mui/material";
import SearchLink from "@/Components/atoms/SearchLink/Container";
import NoticePopupButton from "@/Components/molecules/NoticePopupButton/Container";
import AccountIconPopupButton from "@/Components/molecules/AccountIconPopupButton/Container";
import InertiaLinkTab from "@/Components/atoms/InertiaLinkTab/Container";
import InertiaLinkButton from "@/Components/atoms/InertiaLinkButton/Container";
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
                    <Typography
                        fontSize={isSmSize ? "small" : "large"}
                    >
                        AppName
                    </Typography>
                    <Box 
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: isSmSize ? 2 : 3,
                        }}
                    >
                        <SearchLink
                            size={isSmSize ? "medium" : "large"}
                        />
                        {false &&
                            <NoticePopupButton
                                onClick={noticeOnClick}
                                size={isSmSize ? "medium" : "large"}
                            />
                        }
                        {false && 
                            <AccountIconPopupButton
                                onClick={accountOnClick}
                                size={isSmSize ? "medium" : "large"}
                            />
                        }
                        {true ?
                                <>
                                    <InertiaLinkButton 
                                        size={isSmSize ? "small" : "large"}
                                        href="login"
                                        name="ログイン"
                                    />
                                    <InertiaLinkButton 
                                        size={isSmSize ? "small" : "large"}
                                        href={route("tempRegister.create")}
                                        name="新規登録"
                                    />
                                </>:
                                <InertiaLinkButton 
                                    size={isSmSize ? "small" : "large"}
                                    href={route("tempRegister.create")}
                                    name="投稿する"
                                />
                        }
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
                        href={route('home.index')} 
                        name="ホーム" 
                        isSelected={path === URL_PATH.HOME_PAGE_PATH}
                    />
                    <InertiaLinkTab 
                        href={route('timeline.index')}
                        name="タイムライン"
                        isSelected={path === URL_PATH.TIMELINE_PAGE_PATH}
                    />
                    <InertiaLinkTab 
                        href={route('follow.index')}
                        name="フォロー"
                        isSelected={path === URL_PATH.FOLLOW_PAGE_PATH}
                    />
                    <InertiaLinkTab
                        href={route('ad.index')}
                        name="広告"
                        isSelected={path === URL_PATH.AD_PAGE_PATH}
                    />
                    <InertiaLinkTab
                        href={route('announcement.index')}
                        name="お知らせ"
                        isSelected={path === URL_PATH.ANNOUNCEMENT_PAGE_PATH}
                    />
                </Box>
            </AppBar>
        </Box>
    );
}

export default Component;