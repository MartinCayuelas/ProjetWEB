export class User {
    constructor(
        public id: number,
        public login: string,
        public prenom: string,
        public nom: string,
        public email: string,
        public date: string,
        public avatar: string
    ) { }
}
