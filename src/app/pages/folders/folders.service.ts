import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Folder } from '../../models/folder';
import { environment } from 'src/environments/environment';
import { Dashboard } from 'src/app/models/dashboard';
@Injectable({
  providedIn: 'root',
})
export class FoldersService {
  //   dashboard?: Dashboard;
  foldersUrl = environment.foldersUrl;
  dashboardsUrl = environment.dashboardsUrl;
  apiKey = environment.apiKey;
  constructor(private http: HttpClient) {}

  getFolders() {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.apiKey}`
    );
    return this.http.get<Folder[]>(this.foldersUrl, {
      responseType: 'json',
      headers: headers,
    });
  }

  getDashboards(folderId?: number) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.apiKey}`
    );
    return this.http.get<Dashboard[]>(
      `${this.dashboardsUrl}?folderIds=${folderId}`,
      { responseType: 'json', headers: headers }
    );
  }
}
