import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[collapse-on-click]'
})

export class CollapseOnClickDirective {

    isCollapsed = false;

    @HostBinding('class.collapsed')
    get blah() {
        return this.isCollapsed;
    }

    @HostListener('click')
    booger() {
        this.isCollapsed = !this.isCollapsed;
    }
}