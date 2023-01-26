import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#191724",
            paper: "#1f1d2e",
        },
        primary: {
            main: "#c4a7e7",
        },
        secondary: {
            main: "#9ccfd8",
        },
        info: {
            main: "#31748f",
        },
        warning: {
            main: "#f6c177",
        },
        error: {
            main: "#eb6f92",
        },
        success: {
            main: "#ebbcba",
        },
        text: {
            primary: "#e0def4",
            secondary: "#908caa",
            disabled: "#6e6a86",
        },
        grey: {
            "500": "#6e6a86",
        },
    },
    shape: {
        borderRadius: 21,
    },
});

const MaterialProvider = ({children})  => (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline enableColorScheme />
        {children}
    </ThemeProvider>
);

export default MaterialProvider;
