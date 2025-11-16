import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class LocalStorageService extends StorageService {
  override getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  override setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  override removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  override clear(): void {
    localStorage.clear();
  }

  override get length(): number {
    return localStorage.length;
  }

  override key(index: number): string | null {
    return localStorage.key(index);
  }
}
