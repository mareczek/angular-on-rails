import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateToString', pure: false})
export class DateToStringPipe implements PipeTransform {
    transform(date: Date, exponent: string): string {
        return date.toDateString();
    }
}