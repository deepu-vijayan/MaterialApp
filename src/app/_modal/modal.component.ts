import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from './modal.service';

@Component({ 
    selector: 'jw-modal', 
    templateUrl: 'modal.component.html', 
    styleUrls: ['modal.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Input() XAxis: string = "0";
    @Input() YAxis: string ="0";
    private element: any;
    defaultModalClass="jw-modal";
    defaultModalBodyClass="jw-modal-body"
    defaultModalBackgroundClass="jw-modal-background";

    modalClass="";
    modalBodyClass=""
    modalBackgroundClass=""
    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        switch(this.id){
            case 'knowledge-status-popup-status' : 
            this.modalBodyClass="jw-modal-body-knowledge-status-popup-status";
            this.modalClass="jw-modal-knowledge-status-popup-status";
            this.modalBackgroundClass="jw-modal-background-knowledge-status-popup-status";
            break;
            default :
            this.modalBodyClass=this.defaultModalBodyClass;
            this.modalClass= this.defaultModalClass;
            this.modalBackgroundClass=this.defaultModalBackgroundClass;        
        }
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'jw-modal' || el.target.className === 'jw-modal-knowledge-status-popup-status') {
                this.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
        
    }

    // remove self from modal service when component is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(smallDevice:boolean=false): void {
        this.element.style.display = 'block';
        if(this.element.children[0].className === 'jw-modal-knowledge-status-popup-status'){
        if(smallDevice){
            this.element.children[0].children[0].style.height = '80%';
            this.element.children[0].children[0].style.width  = '60%';
            this.element.children[0].children[0].style.top    = '0';
            this.element.children[0].children[0].style.left   = '0';
        }else{
            this.element.children[0].children[0].style.height = '60%';
            this.element.children[0].children[0].style.width  = '20%';
        }
    }
        document.body.classList.add('jw-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
}