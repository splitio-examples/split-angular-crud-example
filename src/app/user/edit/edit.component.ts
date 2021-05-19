import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { FormGroup, FormControl, Validators} from '@angular/forms';
    
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
     
  id: number;
  user: User;
  form: FormGroup;
   
  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
   
  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
     
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required)
    });
    this.userService.find(this.id).subscribe((data: User) => {
      this.user = data;
      this.form.patchValue(this.user);
    });
  }
    
  get f(){
    return this.form.controls;
  }
      
  submit(){
    console.log(this.form.value);
    this.userService.update(this.id, this.form.value).subscribe((data: User) => {
      console.log('User updated successfully!');
      this.router.navigateByUrl('user/index');
    })
  }   
}