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
    public confirm_end:number,
    public refund:number
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
//对某个活动的建议
export class Advice{
  constructor(
    public openid:string,
    public advice:string,
    public mating:string
  ){  }
}
@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}
  //将提交的订单信息，跨路由共享数据
  Order:OrderPost;
  //展示的订单信息
  id:number
  adress:string
  start_time:string
  getOrders(openid): Observable<Order[]> {
    return this.http
      .get<Order[]>(
        "http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=getorders&m=friendsocity&openid="+openid
      )
  }
  addOrder(Order:OrderPost):Observable<number>{
    let url="http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=addorder&m=friendsocity";
    this.Order=Order;
    return this.http.post<number>(url,Order);
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
  addAdvice(data){
    let url="http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=addadvice&m=friendsocity";
    return  this.http.post<Advice>(url,data);
  }
}
