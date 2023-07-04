import { Box, useMediaQuery } from "@mui/material"
import Navbar from "../navbar"
import UserWidget from "../widgets/UserWidget"
import { ErrorBoundary } from "react-error-boundary"
import { useSelector } from "react-redux"
import MyPostWidget from "../widgets/MyPostWidget"

const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const { _id, picturePath } = useSelector((state) => state.user);
    return (
        <Box>
            <Navbar />
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? 'flex' : 'block'}
                justifyContent="space-between"
                sx={{ scrollPaddingTop: "80px", marginTop: "80px", scrollMarginTop: "80px" }}
            >
                <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
                    <ErrorBoundary fallback={<div>Something went wrong</div>}>
                        <UserWidget userId={_id} picturePath={picturePath} />
                    </ErrorBoundary>
                </Box>
                <Box flexBasis={isNonMobileScreens ? '42%' : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}
                >
                    <MyPostWidget picturePath={picturePath} />
                </Box>
                {isNonMobileScreens && (
                    <Box flexBasis="26%">

                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default HomePage