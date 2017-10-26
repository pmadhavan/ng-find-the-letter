import {Component, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {ModalService} from "./modal/modal.service";
import {ModalComponent} from "./modal/modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainAlphabet;
  alphabetOptions = [];
  alphabets:string = '';
  // @ViewChild('dynamic', {
  //   read: ViewContainerRef
  // }) viewContainerRef: ViewContainerRef;

  constructor(private modalService:ModalService, private componentFactoryResolver:ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
    for (var i = 65; i < 91; i++) {
      this.alphabets += (String.fromCharCode(i));
    }

    this.createUniqueOptions();
    this.mainAlphabet = this.mainRandomAlphabet();
this.addModal();
  }

  addModal() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);

     this.viewContainerRef.createComponent(componentFactory);
  }

  generateRandomAlphabet() {
    return this.alphabets.charAt(Math.floor(Math.random() * this.alphabets.length));
  }

  mainRandomAlphabet() {
    var string = this.alphabetOptions.join("");
    return string.charAt(Math.floor(Math.random() * string.length));
  }

  createUniqueOptions() {
    var randomAlphabet;
    while (this.alphabetOptions.length < 4) {
      randomAlphabet = this.generateRandomAlphabet();
      if (this.alphabetOptions.indexOf(randomAlphabet) === -1) {
        this.alphabetOptions.push(randomAlphabet);
      }
    }

  }

  onOptionSelected(option) {

    if (option === this.mainAlphabet) {
      this.modalService.showModal.next(true);
      this.modalService.isSuccess.next(true);

      this.reloadPage();

    } else {
      this.modalService.showModal.next(true);
      this.modalService.isSuccess.next(false);

      this.reloadPage();

    }
  }

  ngAfterViewInit() {

  }

  reloadPage(){
    setTimeout( ()=>{
      window.location.reload();
    }, 2000)
  }
}

