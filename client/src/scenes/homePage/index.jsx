import { Box, useMediaQuery } from "@mui/material"
import Navbar from "../navbar"
import UserWidget from "../widgets/UserWidget"
import { ErrorBoundary } from "react-error-boundary"
import { useSelector } from "react-redux"

const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const { _id, picturePath } = useSelector((state) => state.user);
    return (
        <Box>
            <Navbar />
            <Box width="100%" height="80px" />
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? 'flex' : 'block'}
                justifyContent="space-between"
            >
                <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
                    <ErrorBoundary fallback={<div>Something went wrong</div>}>
                        <UserWidget userId={_id} picturePath={picturePath} />
                    </ErrorBoundary>
                </Box>
            </Box>
        </Box>
    )
}

export default HomePage