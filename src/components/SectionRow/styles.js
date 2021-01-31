// Depdendencies
import { StyleSheet } from 'react-native';

/**
 * @file styles.js
 * @author Daniel Mejia.
 * @description Styles definition for component.
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
  containerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  title: {
    flex: 1,
    textAlign: 'left',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
