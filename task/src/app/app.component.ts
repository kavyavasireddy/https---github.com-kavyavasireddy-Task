import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,FormsModule }  from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'task';
  firstName :string = '';
  lastName :string = '';
  regform: any;
Constructor(){}
ngOnInit(){
  // this.initform();
}
// initform(){
//   this.regform=this.fb.group({
//     number:['']});
  
// }

validateInput(name: any){
  var reg = /^\d+$/;
  let isValid = reg.test(name);
if(!isValid){
  alert("Only numbers is allowed");
}

}

submit(){
 console.log(this.regform.value)
 }
 }