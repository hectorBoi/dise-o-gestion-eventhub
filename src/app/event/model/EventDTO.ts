export class EventDTO{
    name : string;
    date : string;
    type : string;
    actualCost : number;
    idServices : number[];
    constructor(name : string, date : Date, type : string, actualCost : number, idServices : number[] = []){
        this.name = name;
        this.date = date.toISOString().slice(0,10);
        this.type = type;
        this.actualCost = actualCost;

        this.idServices = idServices;
      }
}