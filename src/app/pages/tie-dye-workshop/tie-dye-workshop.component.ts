import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tie-dye-workshop',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tie-dye-workshop.component.html',
  styleUrls: ['./tie-dye-workshop.component.scss']
})
export class TieDyeWorkshopComponent {
  constructor(private http: HttpClient) {}

  formData = {
    name: '',
    email: '',
    phone: '',
    participants: '1',
    experience: 'beginner',
    specialRequests: '',
    age: '',
    gender: '',
    attendedBefore: '',
    readyFor2026: false
  };

  experienceLevels = [
    { value: 'beginner', label: 'Beginner - First time trying tie-dye' },
    { value: 'intermediate', label: 'Intermediate - Some experience' },
    { value: 'advanced', label: 'Advanced - Experienced with tie-dye' }
  ];

  workshopDetails = {
    date: 'March 30, 2024',
    time: '2:00 PM - 5:00 PM',
    duration: '3 hours',
    location: 'ArtVerse Creative Studio',
    address: '123 Art Street, Downtown Arts District',
    price: '$45 per person',
    maxParticipants: 20,
    materialsIncluded: true
  };

  isSubmitting = false;
  showThankYouModal = false;
  submittedName = '';
  submittedEmail = '';

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Prepare payload according to API structure
    const payload = {
      data: {
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        participants: this.formData.participants,
        experience: this.formData.experience,
        specialRequests: this.formData.specialRequests,
        age: this.formData.age,
        gender: this.formData.gender,
        attendedBefore: this.formData.attendedBefore || 'No',
        readyFor2026: this.formData.readyFor2026 ? 'Yes' : 'No'
      }
    };

    this.http.post('https://api.aklinks.in/api/v1/event-users', payload)
      .subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          this.submittedName = this.formData.name;
          this.submittedEmail = this.formData.email;
          this.resetForm();
          this.isSubmitting = false;
          this.showThankYouModal = true;
        },
        error: (error) => {
          console.error('Registration error:', error);
          alert('There was an error submitting your registration. Please try again or contact us directly.');
          this.isSubmitting = false;
        }
      });
  }

  closeThankYouModal() {
    this.showThankYouModal = false;
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      participants: '1',
      experience: 'beginner',
      specialRequests: '',
      age: '',
      gender: '',
      attendedBefore: '',
      readyFor2026: false
    };
  }
}

