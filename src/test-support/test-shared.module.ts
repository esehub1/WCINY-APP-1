import { NgModule, Pipe, PipeTransform, Directive } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

@Pipe({ name: 'safe' })
export class SafePipeStub implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: any) {
    try {
      // Return a SafeResourceUrl so bindings like [src] do not throw
      return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    } catch (e) {
      return value;
    }
  }
}

@Directive({ selector: '[brmasker]' })
export class BrmaskerDirectiveStub { }

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, IonicModule.forRoot()],
  declarations: [SafePipeStub, BrmaskerDirectiveStub],
  exports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, IonicModule, SafePipeStub, BrmaskerDirectiveStub]
})
export class TestSharedModule { }
