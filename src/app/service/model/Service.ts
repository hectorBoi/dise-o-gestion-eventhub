export class Service{
    static nextId = 1;
    id: number;
    name: string;
    description: string;
    email: string;
    telephone: string;
    webPage: string;
    twitter: string;
    facebook: string;
    price: number;
    type: string;
    address: string;
    constructor( name: string, description: string, email: string, telephone: string, webPage: string, twitter: string, facebook: string, price: number, type: string, address: string) {
        this.id = Service.nextId++;
        this.name = name;
        this.description = description;
        this.email = email;
        this.telephone = telephone;
        this.webPage = webPage;
        this.twitter = twitter;
        this.facebook = facebook;
        this.price = price;
        this.type = type;
        this.address = address;
        
    }
   
    
}