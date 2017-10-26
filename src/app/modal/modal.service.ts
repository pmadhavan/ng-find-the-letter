import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Rx";

@Injectable()
export class ModalService {
  showModal=new Subject();
  isSuccess=new Subject();
  constructor() { }

}
