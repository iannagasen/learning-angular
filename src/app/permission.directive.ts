import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermission]',
  standalone: true
})
export class PermissionDirective
  implements OnInit {

  // should be the same name as the selector
  // so that when referencing it:
  //    <div *appPermission="['admin', 'agent']" ></div>
  @Input() appPermission: string[] = [];

  private currentRole = 'agent';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    /**
     * destroy the ViewContainerRef if permission is not an agent
     * else, proceed to creating the element
     */
    const isNotAnAgent = this.appPermission.indexOf(this.currentRole) === -1;

    if (isNotAnAgent) {
      this.viewContainerRef.clear();
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
