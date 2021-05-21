import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SplitIoService } from '../../splitio.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
    
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
   
  form: FormGroup;
    
  constructor(
    public userService: UserService,
    public splitService: SplitIoService,
    private router: Router
  ) { }
   
  ngOnInit(): void {
    // this.splitService.initSdk();
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }
    
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.userService.create(this.form.value).subscribe(res => {
         console.log('User created successfully!');
         this.router.navigateByUrl('user/index');
    })
  }
   
}