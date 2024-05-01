export class Event {
    static nextId = 1;
    id : number;
    name : string;
    date : Date;
    type : string;
    actualCost : number;
    idServices : number[];
  
    constructor(name : string, date : Date, type : string, actualCost : number, idServices : number[] = []){
      this.name = name;
      
      this.date = date;
      this.type = type;
      this.actualCost = actualCost;
      this.id = Event.nextId++;
      this.idServices = idServices;
    }

  }