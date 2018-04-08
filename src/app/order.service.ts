import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


export class Order {
  constructor(
    public id:number,
    public matingid:number,
    public openid:string,
    public status:number,
    public price:number,
    public title:string,
    public titleimage:string,
  ) {}
}
//新增订单数据类
export class OrderPost {
  constructor(
    public matingid:number,
    public openid:string,
    public status:number,
    public title:string,
    public price:number
  ) {}
}

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}
  Order:OrderPost;
  getOrders(openid): Observable<Order[]> {
    return this.http
      .get<Order[]>(
        "http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=getorders&m=friendsocity&openid="+openid
      )
  }
  addOrder(Order:OrderPost):Observable<Order>{
    let url="http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=addorder&m=friendsocity";
    this.Order=Order;
    return this.http.post<Order>(url,Order);
  }
  getOrder():OrderPost{
    return this.Order;
  }
  setOrder(Order){
    this.Order=Order;
  }
  changeOrder(orderid,status):Observable<any>{
    let url="http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=changeorder&m=friendsocity&status="+status+'&orderid='+orderid;
   return this.http.get(url)
  }
  pay(orderid){
    let url="http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=pay&m=friendsocity&orderid="+orderid;
    this.http.get(url).subscribe()
  }
}
