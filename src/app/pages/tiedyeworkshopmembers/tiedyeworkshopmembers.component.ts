import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface WorkshopMember {
  id?: string;
  name: string;
  email: string;
  phone: string;
  age?: string;
  gender?: string;
  participants: string;
  experience: string;
  attendedBefore?: string;
  readyFor2026?: string;
  specialRequests?: string;
  createdAt?: string;
}

@Component({
  selector: 'app-tiedyeworkshopmembers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tiedyeworkshopmembers.component.html',
  styleUrls: ['./tiedyeworkshopmembers.component.scss']
})
export class TieDyeWorkshopMembersComponent implements OnInit {
  members: WorkshopMember[] = [];
  isLoading = true;
  error: string | null = null;
  totalMembers = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    this.isLoading = true;
    this.error = null;

    // Fetch members from the API
    this.http.get<any>('https://api.aklinks.in/api/v1/event-users')
      .subscribe({
        next: (response) => {
          console.log('API Response:', response);
          
          // Handle different API response structures
          let membersData: any[] = [];
          
          if (response && response.data && Array.isArray(response.data)) {
            // Response structure: { data: [...] }
            membersData = response.data;
          } else if (response && Array.isArray(response)) {
            // Response is directly an array
            membersData = response;
          } else if (response && response.data && Array.isArray(response.data.data)) {
            // Nested data structure: { data: { data: [...] } }
            membersData = response.data.data;
          } else {
            membersData = [];
          }
          
          // Map the API data to our member interface
          this.members = membersData.map((item: any) => {
            // Handle both direct properties and nested data structure
            const memberData = item.data || item;
            
            return {
              id: item.id || memberData.id,
              name: memberData.name || '',
              email: memberData.email || '',
              phone: memberData.phone || '',
              age: memberData.age || '',
              gender: memberData.gender || '',
              participants: memberData.participants || '1',
              experience: memberData.experience || '',
              attendedBefore: memberData.attendedBefore || '',
              readyFor2026: memberData.readyFor2026 || '',
              specialRequests: memberData.specialRequests || '',
              createdAt: item.createdAt || item.created_at || memberData.createdAt || ''
            };
          });
          
          this.totalMembers = this.members.length;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading members:', error);
          this.error = 'Failed to load workshop members. Please try again later.';
          this.isLoading = false;
        }
      });
  }

  getExperienceLabel(experience: string): string {
    const labels: { [key: string]: string } = {
      'beginner': 'Beginner',
      'intermediate': 'Intermediate',
      'advanced': 'Advanced'
    };
    return labels[experience] || experience;
  }
}

