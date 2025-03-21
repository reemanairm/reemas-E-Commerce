import {formatcurrency} from '../scripts/utils/money.js';

console.log('Test Suite: formatcurrency');

console.log('Converts cents into dollars');
if(formatcurrency(2095) === '20.95'){
   console.log('Passed');
} else{
    console.log('Failed');
}

console.log('Works with 0');
if(formatcurrency(0) === '0.00'){
    console.log('Passed');
 } else{
     console.log('Failed');
 }

 console.log('rounds up to the nearest cents');
 if(formatcurrency(2000.5) === '20.01'){
    console.log('Passed');
 } else{
     console.log('Failed');
 }

