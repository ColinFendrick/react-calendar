import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export default createMuiTheme({
	palette: {
		background: {
			default: 'black'
		},
		text: {
			primary: grey[50]
		},
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#fff'
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000'
		}
	},
	overrides: {
		MuiPaper: {
			root: {
				color: grey[50],
				backgroundColor: 'black'
			}
		},
		MuiFormLabel: {
			root: {
				color: grey[50]
			}
		},
		MuiFormControl: {
			root: {
				borderBottom: `1px solid ${grey[50]}`
			}
		},
		MuiInputBase: {
			input: {
				color: grey[50]
			}
		},
		MuiIconButton: {
			root: {
				color: grey[50]
			}
		}
	}
});
