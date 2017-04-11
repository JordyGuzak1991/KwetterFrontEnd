import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:8080/kwetter/api';
  }

}
