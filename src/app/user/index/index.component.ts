import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { SplitIoService } from '../../splitio.service';
   
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    
  users: User[] = [];
   
  constructor(
    public userService: UserService,
    public splitService: SplitIoService
  ) { }
   
  ngOnInit(): void {
    this.splitService.initSdk();
    this.userService.getAll().subscribe((data: User[])=>{
      this.users = data;
    })  
  }
   
  deletePost(id: number) {
    this.userService.delete(id).subscribe(res => {
         this.users = this.users.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }  
}