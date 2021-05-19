import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
   
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    
  users: User[] = [];
   
  constructor(public userService: UserService) { }
   
  ngOnInit(): void {
    this.userService.getAll().subscribe((data: User[])=>{
      this.users = data;
      console.log(this.users);
    })  
  }
   
  deletePost(id: number) {
    this.userService.delete(id).subscribe(res => {
         this.users = this.users.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }  
}