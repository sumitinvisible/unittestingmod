import { UserService } from './user.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
 
import { UserComponent } from './user.component';

describe('UserComponent', () => {
beforeEach(()=>{
TestBed.configureTestingModule({
  declarations:[UserComponent]
});
})
it('should create the app',() =>{
let fixture=TestBed.createComponent(UserComponent);
let app=fixture.debugElement.componentInstance;
expect(app).toBeTruthy();
});



it('should use the username from the service',()=>{
let fixture=TestBed.createComponent(UserComponent);
let app=fixture.debugElement.componentInstance;
let userService=fixture.debugElement.injector.get(UserService);
fixture.detectChanges();
expect(userService.user.name).toEqual(app.user.name);

});

it("should display the username if it is logged in",()=>{

  let fixture=TestBed.createComponent(UserComponent);
let app=fixture.debugElement.componentInstance;
app.isLoggedIn=true;
fixture.detectChanges();
let compiled=fixture.debugElement.nativeElement;
expect(compiled.querySelector('p').textContent).toContain(app.user.name);

});
});
