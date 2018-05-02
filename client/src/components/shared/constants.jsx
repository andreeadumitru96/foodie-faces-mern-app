import Alert from 'react-s-alert';
import Cookies from 'universal-cookie';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

export const cookies = new Cookies();

export const notificationError = (message) => {
	Alert.error(message, {
		position: 'bottom-right',
		effect: 'jelly',
		timeout: 3000
	});
}

export const cityList = ['Paris', 'Compiegne', 'Lyon'];

export const getTheme = () => {
  let overwrites = {
    "palette": {
        "primary1Color": Colors.green800,
        "accent1Color": fade(Colors.lightWhite, 0.54)
    }
};
  return getMuiTheme(baseTheme, overwrites);
}