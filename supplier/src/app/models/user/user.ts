export interface User {
    csrf_token: string;
    logout_token: String;
    name:String;
    mail:String;
    pass:String;
    current_user?: { 
            uid?:String;
            roles?:string;
            name?:String;
          }
}