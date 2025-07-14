import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubmittedTableComponent } from './submitted-table.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, SubmittedTableComponent],
  template: `
    <div class="main-flex">
      <div class="form-container">
        <h2>User Form</h2>
        <form (ngSubmit)="onSubmit(userForm)" #userForm="ngForm" class="form">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              id="name"
              name="name"
              [(ngModel)]="name"
              required
              class="input"
              autocomplete="off"
              placeholder="Enter your name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              [(ngModel)]="email"
              required
              class="input"
              autocomplete="off"
              placeholder="Enter your email"
            />
          </div>
          <button type="submit" class="submit-btn" [disabled]="userForm.invalid">
            Submit
          </button>
        </form>
        <div *ngIf="submitted" class="success-message">
          <p>Thank you, {{ lastSubmittedName }}! Your form has been submitted.</p>
        </div>
      </div>
      <app-submitted-table [data]="submittedData"></app-submitted-table>
    </div>
  `,
  styles: `
    .main-flex {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 2.5rem;
      margin-top: 3rem;
      flex-wrap: wrap;
    }
    .form-container {
      max-width: 400px;
      min-width: 320px;
      background: #fff;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      border-radius: 0.5rem;
      padding: 2.5rem 2rem 2rem 2rem;
      flex: 1 1 350px;
    }
    .form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      text-align: left;
    }
    .form-group label {
      font-weight: 500;
      color: #333;
    }
    .input {
      padding: 0.6rem;
      border: 1px solid #ccc;
      border-radius: 0.3rem;
      font-size: 1rem;
      background: #fafbfc;
      transition: border 0.2s;
    }
    .input:focus {
      border: 1.5px solid #dd0031;
      outline: none;
      background: #fff;
    }
    .submit-btn {
      background: #dd0031;
      color: #fff;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.3rem;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
      margin-top: 0.5rem;
      letter-spacing: 0.5px;
    }
    .submit-btn:disabled {
      background: #eee;
      color: #aaa;
      cursor: not-allowed;
    }
    .success-message {
      margin-top: 2rem;
      color: #198754;
      font-weight: 500;
      background: #e9fbe9;
      padding: 1.2rem;
      border-radius: 0.3rem;
      text-align: center;
      box-shadow: 0 2px 8px rgba(25,135,84,0.08);
    }
  `,
})
export class FormPage {
  name = '';
  email = '';
  submitted = false;
  lastSubmittedName = '';
  submittedData: { name: string; email: string }[] = [];

  onSubmit(form: any) {
    if (form.valid) {
      this.submittedData = [
        ...this.submittedData,
        { name: this.name, email: this.email }
      ];
      this.lastSubmittedName = this.name;
      this.submitted = true;
      this.name = '';
      this.email = '';
      form.resetForm();
      setTimeout(() => {
        this.submitted = false;
      }, 1500);
    }
  }
}
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
    }
    .reset-btn:hover {
      background: #dd0031;
      color: #fff;
    }
    .submitted-table-container {
      min-width: 320px;
      flex: 1 1 350px;
      margin-top: 0;
      background: #f8f9fa;
      border-radius: 0.3rem;
      padding: 1.2rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      align-self: stretch;
    }
    .submitted-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 0.5rem;
    }
    .submitted-table th, .submitted-table td {
      border: 1px solid #e0e0e0;
      padding: 0.6rem 1rem;
      text-align: left;
    }
    .submitted-table th {
      background: #dd0031;
      color: #fff;
      font-weight: 600;
    }
    .submitted-table tr:nth-child(even) {
      background: #f3f3f3;
    }
  `,
})
export class FormPage {
  name = '';
  email = '';
  submitted = false;
  submittedData: { name: string; email: string }[] = [];

  onSubmit(form: any) {
    if (form.valid) {
      // Add the data and immediately reset the form so user can submit again
      this.submittedData = [
        ...this.submittedData,
        { name: this.name, email: this.email }
      ];
      this.submitted = true;
      // Reset form fields so user can submit again
      this.name = '';
      this.email = '';
      form.resetForm();
      // Hide the success message after a short delay (optional)
      setTimeout(() => {
        this.submitted = false;
      }, 1500);
    }
  }

  reset(form: any) {
    this.name = '';
    this.email = '';
    this.submitted = false;
    form.resetForm();
  }
}
