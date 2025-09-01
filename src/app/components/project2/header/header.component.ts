import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderService } from '../../../backend/header.service';
import { Header } from '../../../models/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true, 
 imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lable:Header | undefined;
  selectedLanguage: string = 'en';
  constructor(private headerService: HeaderService, private router: Router, private translateService: TranslateService) { 
    translateService.setDefaultLang('en');
    translateService.use('en')
  }
  
  ngOnInit():void{
    this.headerService.getHeader().subscribe((header:Header) => (this.lable = header))
  }

  useLanguage(lang: string): void {
  this.translateService.use(lang);
  this.selectedLanguage = lang;
}
  toSignup(){
    this.router.navigate(['/project2/signup'])
  }
 toLogin(){
   this.router.navigate(['/project2/login'])
 }

 toBack(){
   this.router.navigate(['/project2/home'])
 }

}