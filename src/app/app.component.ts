import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainAlpha;
  alphaOptions=[];
  alphabets:string='';

  constructor(){
    // const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(var i=65;i<91;i++){
      this.alphabets+=(String.fromCharCode(i));
    }

    this.createUniqueOptions();
  }


  generateRandomAlpha(){
    return this.alphabets.charAt(Math.floor(Math.random()*this.alphabets.length));
  }
  mainRandomAlpha(){
    var string= this.alphaOptions.join("");
    return string.charAt(Math.floor(Math.random()*string.length));
  }
  createUniqueOptions(){
    var randomAlpha;
    while(this.alphaOptions.length<4){
      randomAlpha= this.generateRandomAlpha();
      if(this.alphaOptions.indexOf(randomAlpha)===-1){
        this.alphaOptions.push(randomAlpha);
      }
    }

  }
}

