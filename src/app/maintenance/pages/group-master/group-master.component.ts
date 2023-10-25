import { Component, PipeTransform } from '@angular/core';
import { GroupMasterTableInterface } from '../../model/group-master-table-interface';
import { GROUPMASTERTABLEDATA } from '../../data/group-master-table-data'
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';


function search(text: string, pipe: PipeTransform): GroupMasterTableInterface[] {
	return GROUPMASTERTABLEDATA.filter((country) => {
		const term = text.toLowerCase();
		return (
			country.select.toLowerCase().includes(term) ||
			pipe.transform(country.groupname).includes(term) ||
			pipe.transform(country.groupid).includes(term)
		);
	});
}

@Component({
	selector: 'app-group-master',
	templateUrl: './group-master.component.html',
	styleUrls: ['./group-master.component.scss']
})
export class GroupMasterComponent {
	countries$: Observable<GroupMasterTableInterface[]>;
	filter = new FormControl('', { nonNullable: true });

	constructor(pipe: DecimalPipe) {
		this.countries$ = this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text, pipe)),
		);
	}
}
