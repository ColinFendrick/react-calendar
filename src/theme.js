import { createMuiTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const colors = {
	text: '#657b83',
	emphasized: '#586e75',
	background: '#002b36',
	softWhite: '#073642',
	accent: '#fdf6e3',
	white: '#eee8d5',
	grey: '#93a1a1',
	magenta: '#d33682',
	red: '#dc322f',
	darkRed: '#180605'
};

export default createMuiTheme({
	palette: {
		background: {
			default: colors.background
		},
		text: {
			primary: colors.white
		},
		primary: {
			light: colors.softWhite,
			main: colors.text,
			dark: colors.background,
			contrastText: colors.accent
		},
		secondary: {
			light: colors.white,
			main: colors.text,
			dark: colors.background,
			contrastText: colors.white
		}
	},
	overrides: {
		MuiPaper: {
			root: {
				color: colors.grey,
				backgroundColor: colors.background
			}
		},
		MuiFormLabel: {
			root: {
				color: colors.text
			}
		},
		MuiFormControl: {
			root: {
				borderBottom: `1px solid ${'#657b83'}`
			}
		},
		MuiInputBase: {
			input: {
				color: colors.text
			}
		},
		MuiIconButton: {
			root: {
				color: colors.text
			}
		},
		MuiPickersCalendarHeader: {
			iconButton: {
				backgroundColor: colors.background,
				border: `0.1px solid ${fade(colors.text, 0.6)}`
			},
			dayLabel: {
				color: colors.text
			}
		},
		MuiAlert: {
			standardError: {
				backgroundColor: colors.darkRed,
				color: colors.red
			},
			icon: {
				color: colors.red
			}
		}
	}
});
