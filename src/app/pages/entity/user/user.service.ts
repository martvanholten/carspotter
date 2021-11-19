import { Injectable } from '@angular/core';
import {User} from './user.model';

@Injectable({
  providedIn:"root",
})

export class UserService {
  readonly users:User[] = [
    {
      id: 1,
      firstName: 'Mart',
      lastName: 'van Holten',
      age: 21,
      email: 'martvanholten@homtail.com'
    },
    {
      id: 2,
      firstName: 'Margot',
      lastName: 'van Holten',
      age: 28,
      email: 'margotvanholten@homtail.com'
    },
    {
      id: 3,
      firstName: 'Tom',
      lastName: 'van Holten',
      age: 29,
      email: 'tomvanholten@homtail.com'
    },
    {
      id: 4,
      firstName: 'Ben',
      lastName: 'van Holten',
      age: 26,
      email: 'benvanholten@homtail.com'
    },
    {
      id: 5,
      firstName: 'Erik',
      lastName: 'van Holten',
      age: 61,
      email: 'erikvanholten@homtail.com'
    },
  ];


  getUsers(){
    console.log("get users aangeroepen");
    return this.users;
  }
  getUserById(id:number){
    console.log("get user by id aangeroepen");
    return this.users.filter((user) => user.id === id)[0];
  }
}