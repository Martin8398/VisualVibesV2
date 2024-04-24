import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = stiled(Box)(({ theme }) => ({
  padding: "1.5rem 1.5rem .75rem 1.25rem",
  backgroundColor: theme.palette.background.alt,
  borderRadius: ".75rem",
}));

export default WidgetWrapper;
