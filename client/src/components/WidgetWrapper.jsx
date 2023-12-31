import { Paper } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Paper)(({ theme }) => ({
    padding: "1.5rem 1.5rem 0.75rem 1.5rem",
    backgroundColor: theme.palette.background.alt,
    borderRadius: "0.75rem"
}))

export default WidgetWrapper;