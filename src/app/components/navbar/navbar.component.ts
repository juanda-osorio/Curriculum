import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    
  }

  autoplegable(){
    /* Librería Angular-CDK para 'observar' partes del html; en este caso,
     * una mediaQuery.  */
    if (this.breakPointObserver.isMatched('(max-width: 990px)')) {

        let botonDesplegable: HTMLElement = 
          document.getElementById('botonDesplegable') as HTMLElement;
        botonDesplegable.click();
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
