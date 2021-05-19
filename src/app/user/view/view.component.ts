import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
   
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    
  id: number;
  user: User;
    
  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
   
  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
       
    this.userService.find(this.id).subscribe((data: User) => {
      this.user = data;
    });
  }  
}