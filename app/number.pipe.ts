import {Pipe, PipeTransform} from '@angular/core';

/*
 Changes a number  to its shortened string representation 
 e.g 126000 = 126k
 e.g 12600 = 12k
 e.g 1260 = 1k
*/

@Pipe({name: 'numberConverter'})

export class NumberConverter implements PipeTransform{
	
	transform(value: number): string{
		return (this.getFront(value) + 'K');
	}

	getFront(val:number):string{
		var stringRep = val.toString();
		
		if (stringRep.length == 6)
			return (stringRep.substring(0,3))
		else if (stringRep.length == 5)
			return (stringRep.substring(0,2))
		else if (stringRep.length == 4)
			return (stringRep.substring(0,1))
		else
			return (stringRep)
	}
}