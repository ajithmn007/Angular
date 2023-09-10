
import {Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding} from "@angular/core"

@Directive({
    selector: '[appDropDown]'
})

export class DropDownDirective implements OnInit{

    ngOnInit(): void {
        
    }
    constructor(private elementRef: ElementRef, private renderer: Renderer2){ }
    /* @HostBinding('class.open') isOpen: boolean = false; */

    @HostListener('click') toggleOpen(eventData: Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'class', 'open')
    }
}