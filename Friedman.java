package Cryptology;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map.Entry;

/**
 * @author David Liotta
 * @date 9/23/18
 * 
 * This program is designed to take in some strings and perform a Friedman test on them
 */

public class Friedman {
	
	private static HashMap<Character, Integer> cMap = new HashMap<Character, Integer>();
	private static double mapSize;
	
	public static void main(String args[]) throws IOException {
		
		//Creating the buffered reader and some other variables
		BufferedReader sc = new BufferedReader(new InputStreamReader(System.in));
		String in;
		ArrayList<Character> cipherArray = new ArrayList<Character>();
		
		mapSize = 0;
		
		System.out.println("Input your cipher text here: ");
		in = sc.readLine().toUpperCase();			//toUpper since we don't care about case in this program
		
		//Read each line and store each char into a character array until the input is null
		while(in != null && in.length() != 0) {
			for(int i = 0; i < in.length(); i++) { 
				cipherArray.add((in.charAt(i)));
				mapSize++;
			}
			in = sc.readLine().toUpperCase();
		}
		
		makeMap(cipherArray);
		
		double index = indexOfCoincidence(cMap);
		System.out.println("The index of Coincidence is: " + index);
		System.out.println("The most likely key length is: " + keyFormula(index));
	}
	
	/**
	 * This is a helper method that takes the array of characters, counts each 
	 * occurrence of them and stores it in a HashMap
	 * @param cArr, an array of all the characters entered
	 */
	private static void makeMap(ArrayList<Character> cArr) {
		for(Iterator<Character> it = cArr.iterator(); it.hasNext();) {
			char cChar = (char) it.next();
			int count  = 1;
			
			if(cMap.containsKey(cChar)) {
				count = cMap.get(cChar).intValue();
				count++;
			}
			cMap.put(cChar, count);
		}
	}
	
	/**
	 * Another helper method used to calculate the index of coincidence of the given hashmap
	 * @param cMap , a map of all characters in the input and their occurances
	 * @return indexC , the index of coincidence
	 */
	private static double indexOfCoincidence(HashMap<Character, Integer> inMap) {
		
		double indexC;
		double top = 0;
		Iterator<Entry<Character, Integer>> it = inMap.entrySet().iterator();
		
		while (it.hasNext()) {
	        HashMap.Entry pair = (HashMap.Entry)it.next();
	        int n = (int) pair.getValue();
	        top += (n * (n - 1));
		}
		indexC = top / (mapSize * (mapSize - 1));
		return indexC;
	}
	
	/**
	 * This method puts together everything from this program and makes a guess of the key length of the text
	 * @param ind , the index of coincidence
	 * @return keyLength
	 */
	public static double keyFormula(double ind) {
		
		double keyLength = (0.0265 * mapSize) / ((0.065 - ind) + mapSize * (ind - 0.0385));
		return keyLength;
	}
}
