import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderService } from '../../../backend/header.service';
import { Header } from '../../../models/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.compoenet.css']
})
export class HomeComponent implements OnInit {

  lable:Header | undefined
  constructor(private headerService: HeaderService, private translateService:TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en')
   }
  
  ngOnInit():void{
    console.log("home");
    
    this.headerService.getHeader().subscribe((header:Header) => (this.lable = header))
  }

}