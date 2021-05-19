export class Address {
  suite: string;
  street: string;
  zipcode: string;
  city: string;
}

export class Company {
    bs: string;
    catchPhrase: string;
    name: string;
}

export class User {
    id: number;
    email: string;
    name: string;
    phone: string;
    address = new Address();
    company = new Company();
}
