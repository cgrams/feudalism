import { Component } from '@angular/core';

@Component({
  selector: 'app-court',
  templateUrl: 'court.page.html',
  styleUrls: ['court.page.scss']
})
export class CourtPage {
  constructor() {}

    firstAnswerCourt:string = "";
    secondAnswerCourtHidden:string= "";
    firstAnswerCourtHidden:string = "";
        onKey1(event) {
            const inputValue = event.target.value;
            console.log(inputValue);
            if(inputValue == "me" || inputValue == "Me" || inputValue == "ME"){
                this.firstAnswerCourt = "The next number is 3!";
                 
            }else{this.firstAnswerCourt = "Keep trying";}
    }

    onKey2(event){
        const inputValue2 = event.target.value;
        if(inputValue2 == "sorry"){
            console.log('sorry works');
            this.secondAnswerCourtHidden = "The last number is 5!";
        }else{this.secondAnswerCourtHidden = "Keep trying";}
    }
}
