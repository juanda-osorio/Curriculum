import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  plegar: boolean;

  constructor(private _breakPointObserver: BreakpointObserver) {
    this.plegar = false;
  }

  ngOnInit(): void {
    
  }

  autoplegable(){
    /* Librería Angular-CDK para 'observar' partes del html; en este caso,
     * una mediaQuery.  */
    if (this._breakPointObserver.isMatched('(max-width: 990px)')) {
        this.plegar = true;

        const nav = document.querySelector('#navbarNav');
        nav.className = "collapse navbar-collapse mt-3 animated fadeIn";
    }
    
    // this._breakPointObserver
    //   .observe([ '(max-width: 990px)' ])
    //   .subscribe((state: BreakpointState) =>{
    //     if (state.matches) {
    //       console.log("state matches!!");
    //     }else{
    //       console.log("state doesnt match!! ", state);
    //     }
    //   });
  }

}
