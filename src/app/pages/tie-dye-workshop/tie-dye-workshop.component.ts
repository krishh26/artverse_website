import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tie-dye-workshop',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tie-dye-workshop.component.html',
  styleUrls: ['./tie-dye-workshop.component.scss']
})
export class TieDyeWorkshopComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    participants: '1',
    experience: 'beginner',
    specialRequests: ''
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

  onSubmit() {
    console.log('Registration submitted:', this.formData);
    alert(`Thank you ${this.formData.name}! Your registration for the Tie-Dye Workshop has been received. We'll send a confirmation email to ${this.formData.email} shortly.`);
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      participants: '1',
      experience: 'beginner',
      specialRequests: ''
    };
  }
}

