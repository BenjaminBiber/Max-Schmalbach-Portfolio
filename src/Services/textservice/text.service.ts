import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import type { Observable } from "rxjs"

export interface TextItem {
  key: string
  value: string
  description: string
}

@Injectable({
  providedIn: "root",
})
export class TextService {
  constructor(private http: HttpClient) {
    this.loadTexts();
  }
  texts: TextItem[] = [];

  getTexts(key:string):string {
    return this.texts.find(p => p.key === key)?.value ?? "";
  }

  loadTexts(): void {
    this.getTextsFromJson().subscribe({
      next: (data) => {
        this.texts = data
      },
      error: (err) => {
        console.error("Error loading texts:", err)
      },
    })
  }

  getTextsFromJson(): Observable<TextItem[]> {
    return this.http.get<TextItem[]>("/data/texts.json")
  }
}
