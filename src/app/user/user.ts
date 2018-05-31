export class User {
    constructor(
        public idUser: number,
        public login: string,
        public prenom: string,
        public nom: string,
        public password: string,
        public email: string,
        public dateInscription: string,
        public avatar: string,
        public role: number
    ) { }
}
