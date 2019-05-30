import AsyncStorage from '@react-native-community/async-storage';
import DBInterface from './dbInterface';

export default class GlobalStorage implements DBInterface {
  private KEY: string;

  constructor(key: string) {
    this.KEY = key;
  }

  public async saveItems<T>(item: T[]): Promise<string | null | undefined> {
    try {
      await AsyncStorage.setItem(this.KEY, JSON.stringify(item));
      return;
    } catch (e) {
      console.log('saving error', e);
    }
  }

  public async getItems(): Promise<string | null | undefined> {
    let value;
    try {
      value = await AsyncStorage.getItem(this.KEY);
    } catch (e) {
      console.log('get', this.KEY, ' -> Error', e);
    }

    return value;
  }
}
