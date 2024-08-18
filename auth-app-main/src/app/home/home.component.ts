import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'; // Adjust the path as needed

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showForm: boolean = false;
  teams: any[] = [];
  selectedAgent: { name: string; description: string } | null = null;
  showTaskForm: boolean = false;
  currentAgentForTask: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadTeams();
  }

  loadTeams() {
    this.apiService.getTeamsWithAgents().subscribe({
      next: (response) => {
        this.teams = response;
      },
      error: (error) => {
        console.error('Error fetching teams:', error);
      }
    });
  }

  toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }

  logout() {
    console.log('Logout clicked');
  }

  showAgentDescription(agent: { name: string; skill: string; description: string }) {
    this.selectedAgent = agent;
  }

  closeModal() {
    this.selectedAgent = null;
  }

  addTeam(newTeam: any) {
    console.log('Adding new team:', newTeam);
    this.teams.push(newTeam);
    this.showForm = false;
  }

  toggleTaskForm(agent: any) {
    this.currentAgentForTask = agent;
    this.showTaskForm = !this.showTaskForm;
  }

  assignTaskToAgent(task: any) {
    console.log('Assigning task:', task, 'to agent:', this.currentAgentForTask.name);
    // Add your logic to handle the task assignment here
    this.showTaskForm = false;
  }
}