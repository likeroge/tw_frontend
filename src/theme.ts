import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(',')
    },
    palette: {
        primary: {
            main: 'rgb(29, 161, 242)',
            dark: 'rbg(26, 145, 218)',
            contrastText: '#fff'
        },
        secondary: {
            main: 'rgb(26, 145, 218)'
        },
        error: {
            main: red.A400
        },
        background: {
            default: '#fff'
        }
    },
    // shadows: [],
    overrides:{
        MuiButton:{
            root: {
                borderRadius: 30,
                textTransform:'none',
                fontSize: 16,
                height: 40,
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20
            },
            outlinedPrimary: {
                borderColor: 'rgb(29, 161, 243)',
            }
        },
        MuiFilledInput: {
            underline: {
                '&:after': {
                    borderBottom: '2px',
                },
                '&:before': {
                    borderColor: '#000',
                    borderBottomWidth: '2px',
                },
            },
            input: {
                backgroundColor: 'rbg(245, 248, 250)',
            }
        },
        MuiDialog: {
            paper:  {
                borderRadius: 15,
            }
        },
        MuiDialogActions: {
            root: {
                marginBottom: 8,
            }
        },
        MuiDialogTitle: {
            root: {
                borderBottom: '1px solid rgb(204, 214, 221)',
                marginBottom: 10,
                padding: '10px 15px',
                '& h2': {
                    display: 'flex',
                    allignItems: 'center',
                    fontWeight: 800,
                },
                '& button': {
                    padding: 8,
                    marginRight: 20,
                },
            }
        }
    }
})


export default theme