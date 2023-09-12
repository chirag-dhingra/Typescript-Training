class Customer {
    private firstName: string;
    private lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public setFirstName(theFirst: string ) {
        this.firstName = theFirst;
    }
    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(theLast: string ) {
        this.lastName = theLast;
    }

/*
//Alternative called Accessors

 public get firstName(): string {
        return this._firstName
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
*/
}


