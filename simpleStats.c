/*
 * simpleStats.c
 *
 *  Created on: Sep 17, 2018
 *      Author: David Liotta
 */

#include <stdio.h>

#define BUFSIZE 256

int main(){
	/**
	 * Setting up some variables to utilize in this program
	 */
	double n, max, min, sum, mean;
	char line[BUFSIZE];
	int numsRead = 0;
	int numOfItems = 1;
	n = -1;
	max = n;
	min = n;
	sum = n;

	while(n != 0 && fgets(line, BUFSIZE, stdin ) != NULL){
		numsRead = sscanf(line, "%lf", &n);
		if(numsRead == 1 && n != 0){
			numOfItems++;
			if(n > max)
				max = n;
			if(n < min)
				min = n;
			sum = sum + n;
		}
		if(numsRead == 0)
			printf("Bad input\n");
	}

	mean = sum / numOfItems;

	printf("# of items: %i", numOfItems);
	printf("\nSum: %f.3", sum);
	printf("\nMax: %f.3", max);
	printf("\nMin: %f.3", min);
	printf("\nMean: %f.3", mean);
}

