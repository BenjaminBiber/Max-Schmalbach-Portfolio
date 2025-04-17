import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import type { Observable } from "rxjs"


export interface ImageItem {
  url: string
  title: string
  isBest: boolean
}

export interface AlbumItem {
  pictures: ImageItem[]
  name: string
}

@Injectable({
  providedIn: "root",
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getImages(): Observable<AlbumItem[]> {
    return this.http.get<AlbumItem[]>("/data/alben.json")
  }

  loadImages(): AlbumItem[] {
    this.getImages().subscribe({
      next: (data) => {
        return data
      },
      error: (err) => {
        console.error("Error loading images:", err)
        return []
      },
    })
    return []
  }
}
