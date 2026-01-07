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

    // Fetch members from the API (no pagination parameters)
    this.http.get<any>('https://api.aklinks.in/api/v1/event-users')
      .subscribe({
        next: (response) => {
          console.log('API Response:', response);
          
          // Handle the API response structure: { status: "success", data: { items: [...] } }
          let membersData: any[] = [];
          
          if (response && response.status === 'success' && response.data && response.data.items && Array.isArray(response.data.items)) {
            // Response structure: { status: "success", data: { items: [...] } }
            membersData = response.data.items;
          } else if (response && response.data && Array.isArray(response.data)) {
            // Response structure: { data: [...] }
            membersData = response.data;
          } else if (response && Array.isArray(response)) {
            // Response is directly an array
            membersData = response;
          } else if (response && response.data && response.data.data && Array.isArray(response.data.data)) {
            // Nested data structure: { data: { data: [...] } }
            membersData = response.data.data;
          } else {
            membersData = [];
          }
          
          // Map the API data to our member interface
          this.members = membersData.map((item: any, index: number) => {
            // Handle both direct properties and nested data structure
            const memberData = item.data || item;
            
            return {
              id: item._id || item.id || memberData.id,
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
          
          // Set total members from array length
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

  formatDate(dateString: string): string {
    if (!dateString) return '-';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return dateString;
    }
  }
}

