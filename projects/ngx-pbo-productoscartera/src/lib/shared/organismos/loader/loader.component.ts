import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { LoadingService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements AfterViewInit {
  loading$ = this.loadingService.loading$;

  constructor(
    private readonly loadingService: LoadingService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.loading$.subscribe(() => {
      this.cdr.detectChanges();
    });
  }
}
