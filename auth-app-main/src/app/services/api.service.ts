import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';  // Base URL for the API

  constructor(private http: HttpClient) {}

  // Function to handle login
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, { username, password });
  }

  createTeam(teamData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/teams`, teamData);
  }

  createAgent(agentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/agents`, agentData);
  }

  getTeamsWithAgents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/teams/teams-with-agents`);
  }

}