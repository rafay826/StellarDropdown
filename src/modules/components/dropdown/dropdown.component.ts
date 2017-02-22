import { Component, ElementRef, AfterViewInit } from '@angular/core';
import './dropdown.component.scss'

@Component({
	selector: 'dropdown-comp',
	templateUrl: './dropdown.component.html'
})

export class DropdownComponent implements AfterViewInit {

	color: any
	showDropDown: any
	toggleList: any
	listHidden: any
	showList: any

	constructor( private el: ElementRef ) {
	}

	ngAfterViewInit() {

		this.showDropDown = () => {
			this.toggleList = !this.toggleList
			// if(this.toggleList = true) {
			// 	this.el.nativeElement.querySelector('.dropdown-container').style.height = "115px"
			// }
		}
	}

}