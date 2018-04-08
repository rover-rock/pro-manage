import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


export class Order {
  constructor(
    public matingid:number,
    public openid:string,
    public status:number
  ) {}
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}
  Order:Order=new Order(1,'',1);
  getOrders(): Promise<Order[]> {
    return this.http
      .get<Order[]>(
        "http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=getactivities&m=friendsocity"
      )
      .toPromise();
  }
  getActivity(id): Observable<Order> {
    return this.http
      .get<Order>(
        "http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=getactivities&m=friendsocity&id=" +
          id
      )
      ;
  }

  addOrder(Order:Order):Observable<Order>{
    let url="http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=addOrder&m=friendsocity";
    this.Order=Order;
    return this.http.post<Order>(url,Order);
  }
  getOrder():Order{
    return this.Order;
  }
  setOrder(Order){
    this.Order=Order;
  }
}
