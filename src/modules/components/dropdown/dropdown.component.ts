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
	clearList: any

	colorList: Array<string> = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'Purple']

	constructor( private el: ElementRef ) {
	}

	ngAfterViewInit() {

		this.showDropDown = () => {
			this.toggleList = !this.toggleList
		}


	}

}