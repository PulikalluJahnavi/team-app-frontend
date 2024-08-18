import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../services/api.service'; // Adjust the path as needed

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent {
  @Output() teamCreated = new EventEmitter<any>();
  teamName: string = '';
  teamObjective: string = '';

  constructor(private apiService: ApiService) {}

  onSubmit() {
    const teamData = {
      name: this.teamName,
      description: this.teamObjective
    };

    this.apiService.createTeam(teamData).subscribe({
      next: (teamResponse) => {
        console.log('Team created:', teamResponse);
        this.resetForm();
        this.teamCreated.emit(teamResponse);  // Emit the created team response
      },
      error: error => console.error('Failed to create team:', error)
    });
  }

  resetForm() {
    this.teamName = '';
    this.teamObjective = '';
  }

  cancel() {
    this.resetForm();
  }
}