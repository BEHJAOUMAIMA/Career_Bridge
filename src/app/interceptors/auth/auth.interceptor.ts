import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Intercepteur JWT en cours d\'exécution');

    const access_token = localStorage.getItem('access_token');

    if (access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${access_token}`
        }
      });
    }

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('Réponse HTTP interceptée :', event);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Erreur HTTP interceptée :', error);
        return throwError(error);
      })
    );
  }
}
