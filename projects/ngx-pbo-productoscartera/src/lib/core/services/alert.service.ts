import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // clear alert message on route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.subject.next(null);
        }
      }
    });
  }

  private clearAlert(timer: number = 3000) {
    setTimeout(() => {
      this.subject.next(null);
    }, timer);
  }

  success(message: string, keepAfterNavigationChange: boolean = false, timer: number = 3000) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
    this.clearAlert(timer);
  }

  error(message: string, keepAfterNavigationChange: boolean = false, timer: number = 3000) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
    this.clearAlert(timer);
  }

  alert(message: string, keepAfterNavigationChange: boolean = false, timer: number = 5000) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'alert', text: message });
    this.clearAlert(timer);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}