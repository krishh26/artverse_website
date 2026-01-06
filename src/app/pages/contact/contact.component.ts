import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  };

  collaborationTypes = [
    { value: 'artist', label: 'I\'m an Artist' },
    { value: 'curator', label: 'I\'m a Curator' },
    { value: 'partner', label: 'Partnership Opportunity' },
    { value: 'volunteer', label: 'Volunteer' },
    { value: 'general', label: 'General Inquiry' }
  ];

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Here you would typically send the form data to a backend service
    alert('Thank you for your message! We\'ll get back to you soon.');
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'general'
    };
  }
}

