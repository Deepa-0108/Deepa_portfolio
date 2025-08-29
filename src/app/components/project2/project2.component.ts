import { Component, VERSION } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SpinnerComponent } from './spinner/spinner.component';

@Component({
  selector: 'app-project2',
  standalone: true,
  providers: [TranslateService],
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component {
  name = 'Angular ' + VERSION.major;
  constructor(private translateService: TranslateService){
    translateService.setDefaultLang('en');
    translateService.use('en')
  }
  
  ngOninit(){
    console.log("proj2");
    
  }

  useLanguage(language:string){
    this.translateService.use(language);
   }
 
}
