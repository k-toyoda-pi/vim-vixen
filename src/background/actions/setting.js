import actions from '../actions';
import * as settingsStorage from 'shared/settings/storage';

const load = () => {
  return settingsStorage.loadValue().then((value) => {
    return {
      type: actions.SETTING_SET_SETTINGS,
      value,
    };
  });
};

export { load };
