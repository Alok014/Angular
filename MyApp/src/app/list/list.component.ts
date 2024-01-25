import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, MatTableModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public userData: any = [];
  public displayedColumns: string[] = ['id','name','username', 'email', 'address', 'phone', 'website', 'company'];
  constructor(private service: UserService)
  {
    service.users().subscribe((data)=>this.userData = data);
    console.warn(this.userData);
  }
}
