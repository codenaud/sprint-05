import { Injectable } from '@angular/core';
import { Isteps } from '../interfaces/isteps';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  constructor() {}
  getData() {
    const data: Isteps = {
      id: 1,
      title: 'tiutlo 1',
      description: 'decripcion 1',
      img: 'string',
      bgcolor: 'string',
    };
  }
}
