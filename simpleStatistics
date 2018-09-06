package coputerLabTechniques;

import java.util.Scanner;

/**
 * @author David Liotta
 * @date 9/5/18
 *
 * This class is designed to perform some simple statistical operations using a scanner
 */

public class simpleStatistics {
	
	public static void main(String args[]) {
		
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		
		int max = n;
		int min = n;
		int sum = 0;
		int numOfItems = 0;
		int mean;
    
		while(n != 0) {
			if(n > max)
				max = n;
			if(n < min)
				min = n;
			sum += n;
			numOfItems++;
			n = sc.nextInt();
		}
    
		mean = sum / numOfItems;
		
		System.out.println("# of items: " + numOfItems + "\n" + "Sum: " + sum + "\n" + 
				"Max: " + max + "\n" + "Min: " + min + "\n" + "Mean: " + mean );	
	}
}
