/*
 * simpleStats.c
 *
 *  Created on: Sep 17, 2018
 *      Author: David Liotta
 */

#include <stdio.h>
#include <string.h>

int main(){
	/**
	 * Setting up some variables to utilize in this program
	 */
	double n, max, min, sum, mean;

	char uI[64];

	printf("a");		//Test line
	fgets(uI, 63, stdin);
	scanf("%lf", &n);	//Scanning in the first number for n

	printf("b");		//test
	max = n;
	min = n;
	sum = n;
	int numOfItems = 1;  //This is because we scanned for n earlier

	while(n != EOF && n != 0){
		printf("c");		//test
		if(n > max)
			max = n;
	    if(n < min)
	        min = n;
	    sum = sum + n;
	    numOfItems++;
	    sscanf(uI, "%f.3", &n);
	}

	if(n == 0 || n == EOF)
		printf("Bad input");

	mean = sum / numOfItems;


	printf("# of items: %i", numOfItems);
	printf("\nSum: %f.3", sum);
	printf("\nMax: %f.3", max);
	printf("\nMin: %f.3", min);
	printf("\nMean: %f.3", mean);
}

