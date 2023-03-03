import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  theme = true;

  constructor() { }

  ngOnInit(): void {
    if(this.theme)
    {
      document.documentElement.setAttribute("data-theme", "light");
    }
    else
    {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }

  changeTheme()
  {
    this.theme = !this.theme;
    this.ngOnInit();
  }

}
