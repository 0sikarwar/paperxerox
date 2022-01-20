import AsyncStorage from '@react-native-community/async-storage';

export const addInStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(`Error: `, err);
  }
};

export const getDataFromStorage = async (key: string) => {
  try {
    const val = await AsyncStorage.getItem(key);
    return val && JSON.parse(val);
  } catch (err) {
    console.log(`Error: `, err);
  }
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};
