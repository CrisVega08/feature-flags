import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
import { FeaturesFlagsService } from '../services/features-flags.service';

@Directive({
  selector: '[featureFlag]'
})
export class FeatureFlagDirective implements OnInit {
  @Input() featureFlag: string | string[];
  @Input() featureFlagOr: string | string[];

  constructor(
    private vcr: ViewContainerRef,
    private tpl: TemplateRef<any>,
    private featureService: FeaturesFlagsService
  ) {
  }

  ngOnInit(): void {
    if (this.featureService.hasFlags(this.featureFlag) || this.featureService.hasFlags(this.featureFlagOr)) {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }

}
