import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../ui/layout/layout.module';
import { RouterModule } from '@angular/router';
import { shellRoutes } from './shell.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule, RouterModule.forRoot(shellRoutes)],
  exports: [RouterModule]
})
export class ShellModule {}
