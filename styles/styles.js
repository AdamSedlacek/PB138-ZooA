import {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';

export const WIDTH = Dimensions.get('window').width;
const ANIMAL_RIGHT_BORDER = 12;

const backgroundColors = [
      '#37af54',
      '#2d9946',
      '#267f3b',
      '#20642f',
      '#267f3b',
      '#2d9946',
];

export const TEXT_COLOR = 'white';

const styles = {
  text: {
    fontSize: 18,
    color: TEXT_COLOR,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  italic: {
    fontSize: 18,
    color: TEXT_COLOR,
    fontStyle: 'italic',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  strong: {
    fontSize: 18,
    color: TEXT_COLOR,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)'
  },

  contentView: {
    flex: 1,
    backgroundColor: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 10,
  },
  eventItemText: {
    fontSize: 22,
    color: '#e6e5eb',
  },
  eventButton: {
    flex: 1,
    padding: 15,
    height: 60,
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  eventButtonText: {
    fontSize: 22,
    fontWeight: '300',
    textAlign: 'center',
    color: 'black',
  },
  tabIcons: {
    width: 32,
    height: 32,
  },

  mainMenuItem: {
    height: 80,
    width: WIDTH,
    justifyContent: 'center',
  },
  mainMenuItemText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e6e5eb',
  },
  eventItem: {
    height: 80,
    width: WIDTH,
  },
  eventItemText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e6e5eb',
  },
  eventItemTextTime: {
    fontSize: 22,
    color: '#e6e5eb',
  },
  scrollView: {
    backgroundColor: '#0b2611',
    borderRightWidth: ANIMAL_RIGHT_BORDER,
    borderColor: '#3CAC54',
    paddingRight: 5,
    paddingLeft: ANIMAL_RIGHT_BORDER + 5,
  },
  ctext: {
    fontSize: 18,
    color: TEXT_COLOR,
    paddingTop: 5,
    paddingBottom: 5,
  },
  ctextItalic: {
    fontSize: 18,
    color: TEXT_COLOR,
    fontStyle: 'italic',
  },
  italic: {
    fontSize: 18,
    color: TEXT_COLOR,
    fontStyle: 'italic',
  },
  strong: {
    fontSize: 18,
    color: TEXT_COLOR,
    fontWeight: 'bold',
  },
  inPageSingleThumbnail: {
    height: 100,
    width: (WIDTH - ANIMAL_RIGHT_BORDER - 5 - ANIMAL_RIGHT_BORDER),
  },
  inPageDuoThumbnailLeft: {
    height: 100,
    width: (WIDTH - ANIMAL_RIGHT_BORDER - 10)/ 2,
    marginRight: 10,
  },
  inPageDuoThumbnailRight: {
    height: 100,
    width: (WIDTH - ANIMAL_RIGHT_BORDER - 10) / 2,
    marginRight: 12,
  },
  otherFontNavBar: {
    color: '#e6e5eb',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainMenuFontNavBar: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 34,
  }
};

export default styles;
