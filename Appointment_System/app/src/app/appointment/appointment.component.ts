import { Component, OnInit } from '@angular/core';
import { Appointment } from '../Appointment';
import { AppointmentsService } from '../appointments.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public successMessage: string;
  public errorMessage: string;
  public appointmentDate: string;
  public firstName: string;
  public lastName: string;
  public phoneNumber: string;
  public email: string;

  constructor(private appointmentService: AppointmentsService) {}

  ngOnInit(): void {
    
  }

  createAppointment() {
    this.successMessage = "";
    this.errorMessage = "";
    this.appointmentService.creatingAppointments(this.appointmentDate, this.firstName, this.lastName, this.phoneNumber, this.email)
      .subscribe((createdAppointment: Appointment) => {
        this.appointmentDate = "";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        const appointmentDate = new Date(createdAppointment.appointmentDate).toDateString()
        this.successMessage = `Appointment booked successfully for ${appointmentDate}`;


      },
      (error: ErrorEvent) => {
        this.errorMessage = error.error.message;
      })
  }
}
