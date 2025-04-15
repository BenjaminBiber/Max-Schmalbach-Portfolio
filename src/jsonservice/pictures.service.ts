import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import type { Observable } from "rxjs"


export interface ImageItem {
  url: string
  title: string
}

export interface AlbumItem {
  pictures: ImageItem[]
  name: string
}

@Injectable({
  providedIn: "root",
})
export class ImageService {
  constructor(private http: HttpClient) {}

  getImages(): Observable<AlbumItem[]> {
    return this.http.get<AlbumItem[]>("/images.json")
  }
}
