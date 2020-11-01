import { Address } from "./Address";

export class PersonalDetails {
    firstName: String;
    lastName: String;
    email: String;
    phone: String;
    address?:Address
    dob: String;
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phone = "";
        this.dob = new Date().toLocaleDateString();
    }
}
