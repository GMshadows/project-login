import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project-login',
  templateUrl: './project-login.component.html',
  styleUrls: ['./project-login.component.scss']
})
export class ProjectLoginComponent implements OnInit{
  validateForm!: UntypedFormGroup;
  user:any = {
    userName:'',
    passWord:''
  };
  // interface user: {
  //   userName:String;
  //   passWord:String;
  // }
  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    ) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      // remember: [true]
    });
  }
  loading = false;
  change(){
    this.loading = true;
    if(this.user.userName === 'test111' && this.user.passWord === '123456'){
      this.router.navigateByUrl('/projectView');
      
    }else {
      console.log(123);
      alert('请输入指定用户名和密码');
    }
    this.loading = false;
    
  }

}
