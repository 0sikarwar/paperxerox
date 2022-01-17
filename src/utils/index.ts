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
