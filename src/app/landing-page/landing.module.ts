import { LandingPageComponent } from './landing.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [LandingPageComponent],
  exports: [LandingPageComponent]
})
export class LandingPageModule {}
