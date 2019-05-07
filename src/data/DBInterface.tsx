export default interface DBInterface {
  saveItems<T>(item: T[]): Promise<string | null | undefined>;
  getItems(): Promise<string | null | undefined>;
}
