import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
@Component({
  selector: 'app-root',
  providers: [AuthenticationService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
