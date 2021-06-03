/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { Observable, observable, Subscriber } from 'rxjs';
import {count, filter, map, reduce, take} from 'rxjs/operators';
import * as Rx from 'rxjs';
import { UserService } from '../user.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data: any;

  constructor(private _userService: UserService) { }

  myData:any;
  OtherData:any;
 
  


  //lifecycle hooks
  ngOnInit(): void {


    //observable
    /**
     * next()
     * error()
     * complete()
     */
    // const observable = new Observable(subscriber => {
    //   subscriber.next(10);
    //   subscriber.next(20);
    //   subscriber.next(30);

    //   setTimeout(() => {
    //     subscriber.next(40);
    //     subscriber.unsubscribe();
    //     subscriber.next(50);
    //     subscriber.complete();
    //   },1000)
    // })

  // console.log("these are the values just before subscribe");

    // observable.subscribe({
    //   next(x){
    //     console.log("We have got value"+x);
    //   },
    //   error(err){
    //     console.log("something wrong occcured"+err);
    //   },
    //   complete(){
    //     console.log("done succesfully");
    //   }
    // })
    // console.log("these are the values just after subscribe");


    //subscription
    // let all_nums = of(1,2,3,4,5,6,7,8,9,10,11);
    // let final_val = all_nums.pipe(count());
    // let test = final_val.subscribe(x => console.log("the total count is "+x));



    //filter -reduce 
  //  let test1 = of(1,2,3,4,5,6,7);
  //  let case1 = test1.pipe(
  //    filter(x => x%2===0),
  //    reduce((acc,one) => acc + one, 0)
  //  )
  //  case1.subscribe(x => console.log(x));





  //interval
  //  let test1 = interval(1000);
  //  let case1 = test1.pipe(take(10));
  //  case1.subscribe(x => console.log(x));




  //difference between observable and subject


  //observable
  /**
   * different value produced 
   * one to one unicast (har kisi ke liye alag value)
   */
  // const observable = Rx.Observable.create((observer: any) => {
  //        observer.next(Math.random());
  //      });
  
  //      //subscription-1
  //     observable.subscribe((data: any) => {
  //       console.log(data);
  //     });
  
  //      //subscription-2
  //     observable.subscribe((data: any) => {
  //       console.log(data);
  //     });



  //     //subject

  //     /**
  //      * it manage a list of event emitter it produced same value 
  //      * everyone for each subscriber
  //      * 
  //      * one to many
  //      */


      
  //   const subject = new Rx.Subject();
  //     // subscriber 1
  //   subject.subscribe((data) => {
  //     console.log(data);
  //   });
  //   // subscriber 2
  //   subject.subscribe((data) => {
  //     console.log(data);
  //   });
  //   subject.next(Math.random());




//  this._userService.getUserData().subscribe((data) => {
//    this.myData = data;
//    from(this.myData).pipe(
//      filter((OtherData:any) => OtherData.id === 98)).
//      subscribe(OtherData => console.log(OtherData));
     

// this._userService.getUserData().subscribe((data) => {
//   this.myData = data;

//   from(this.myData).pipe(
//     filter((OtherData:any) => OtherData.id %2 ===0),
//          reduce((sum,OtherData ) =>  sum + OtherData.id , 0)).
//     subscribe(OtherData  => console.log(OtherData));
// })
   
  }



 

  //problel : fetch only even id and title using rxjs operators
  onClick(){
    this._userService.getUserData().pipe(map((res:any) => 
    res.map((data) => {
      return {
        id: data.id,
        title: data.title
      };
    }).filter(res => res.id % 2 === 0))).subscribe(resp => {
       this.data = resp;
       console.log(resp);

    })
  }

}
