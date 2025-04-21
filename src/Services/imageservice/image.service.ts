import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import type { Observable } from "rxjs"

export interface PictureItem {
  description: string,
  url: string
}

@Injectable({
  providedIn: "root",
})
export class PictureService {
   constructor(private http: HttpClient) {
      this.loadTexts();
    }
    pics: PictureItem[] = [];
  
    getPicture(key:string):string {
      return this.pics.find(p => p.description === key)?.url ?? "";
    }
  
    loadTexts(): void {
      this.getTextsFromJson().subscribe({
        next: (data) => {
          this.pics = data
        },
        error: (err) => {
          console.error("Error loading texts:", err)
        },
      })
    }

    getTextsFromJson(): Observable<PictureItem[]> {
      return this.http.get<PictureItem[]>("/data/images.json")
    }
}
