export abstract class StorageService {
  abstract getItem(key: string): string | null;
  abstract setItem(key: string, value: string): void;
  abstract removeItem(key: string): void;
  abstract clear(): void;

  abstract get length(): number;
  abstract key(index: number): string | null;
}
