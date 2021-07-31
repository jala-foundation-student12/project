export class User{
    constructor(
        public uid:string,
        public name:string,
        public lastname:string,
        public email:string,
        public password:string,
        public birthdate?:string,
        public telnumber?:string,
        public university?: string,
        public school?: string,
        public job?: string,
        public address?: string,
    ){}
}