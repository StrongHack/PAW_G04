import { Injectable } from '@angular/core';
import {
HttpRequest,
HttpHandler,
HttpEvent,
HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
constructor() {}

intercept(
request: HttpRequest<any>,
next: HttpHandler
): Observable<HttpEvent<any>> {
const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
if (currentUser && currentUser.token) {
request = request.clone({
setHeaders: {
'x-access-token': currentUser.token,
},
});
}
return next.handle(request);
}
}