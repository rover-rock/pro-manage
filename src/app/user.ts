export class User {
  constructor(
    public nickname: string,
    public sex: string,
    public pwd: string,
    public mail: string,
    public realname: string,
    public phone: number,
    public cert_type: string,
    public cert_num:string
  ) {}
}
