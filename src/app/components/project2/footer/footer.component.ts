import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderService } from '../../../backend/header.service';
import { Header } from '../../../models/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true, 
    imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  lable:Header | undefined
  constructor(private headerService: HeaderService, private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en')
   }
  
  ngOnInit():void{
    this.headerService.getHeader().subscribe((header:Header) => (this.lable = header))
  }

}