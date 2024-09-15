import { AppBar, Box, Typography } from "@mui/material";
import SearchLink from "@/Components/molecules/SearchLink/SearchLink";
import NoticePopupButton from "@/Components/molecules/NoticePopupButton/NoticePopupButton";
import AccountIconPopupButton from "@/Components/molecules/AccountIconPopupButton/AccountIconPopupButton";
import InertiaLinkTab from "@/Components/molecules/InertiaLinkTab/InertiaLinkTab";
import InertiaLinkButton from "@/Components/molecules/InertiaLinkButton/InertiaLinkButton";
import { ComponentProps } from "./type";
import { URL_PATH } from "@/constants/UrlPath";
import Authentication from "@/utils/Authentication";


const Component: React.FC<ComponentProps> = ({
    noticeOnClick,
    scrollY,
    path,
    isSmSize,
    auth
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
                        display: scrollY !== 0 ? 'none' : 'flex',
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
                        {Authentication.isLogin(auth) &&
                            <NoticePopupButton
                                onClick={noticeOnClick}
                                size={isSmSize ? "medium" : "large"}
                            />
                        }
                        {Authentication.isLogin(auth) &&
                            <AccountIconPopupButton
                                size={isSmSize ? "medium" : "large"}
                            />
                        }
                        {Authentication.isLogin(auth) ?
                            (  
                                <>
                                    <InertiaLinkButton
                                        size={isSmSize ? "small" : "large"}
                                        href="logout"
                                        name="ログアウト"
                                    />
                                    <InertiaLinkButton
                                        size={isSmSize ? "small" : "large"}
                                        href={route("tempRegister.create")}
                                        name="投稿する"
                                    />
                                </>
                            ):
                            (
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
                                </>
                            )
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
                    {Authentication.isLogin(auth) &&
                    (
                        <InertiaLinkTab
                            href={route('home.index')}
                            name="ホーム"
                            isSelected={path === URL_PATH.HOME_PAGE_PATH}
                        />
                    )}
                    <InertiaLinkTab
                        href={route('timeline.index')}
                        name="タイムライン"
                        isSelected={path === URL_PATH.TIMELINE_PAGE_PATH}
                    />
                    {Authentication.isLogin(auth) && 
                    (
                        <InertiaLinkTab
                            href={route('follow.index')}
                            name="フォロー"
                            isSelected={path === URL_PATH.FOLLOW_PAGE_PATH}
                        />
                    )}
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
