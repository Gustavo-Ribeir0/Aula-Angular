import { Component } from '@angular/core';

interface UserProps {
  name: string,
  age: number,
  gender: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  user: UserProps = {
    name: 'Gustavo',
    age: 25,
    gender: 'Masculino'
  }
  isDisabled = false
  name: string = ''

  save(event: any) {
  console.log(event)
  }
}
