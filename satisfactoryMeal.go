package main

import "fmt"


func main() {
	//Using a scanner to read in the dishes of the meal
	var dishes int
	fmt.Println("How many meals do you have?")
	fmt.Scanf("%d", &dishes)
	List := make([][7]int, dishes)
	//fmt.Println(dishes)
	fmt.Println("Write your meals here")
	for i := 0; i < dishes; i++ {
		for m := 0; m < 7; m++ {
			var temp int
			fmt.Scanf("%d", &temp)
			List[i][m] = temp
		}
	}
	fmt.Println("The meal is", List)

	//Final check to see if all diners can eat
	if(alyssa(List, dishes) == true && clara(List, dishes) == true &&
		daniel(List, dishes) == true && elena(List, dishes) == true &&
		isaiah(List, dishes) == true && justin(List, dishes) == true) {
		fmt.Println("The meal is satasfactory")
	}else{
		fmt.Println("The meal is not satisfactory")
	}
}

//Below are the functions needed to check for each of the diners specific meal requirements

func alyssa(List[][7]int, dishes int)bool{
	var j int
	for i := 0; i < dishes; i++{
		temp := List[i][1]
		if temp == 0 {
			j++
		}
	}
	if j > 2 {
		fmt.Println("Alyssa can eat", j, "meals")
		return true
	}
	return false
}

func clara(List[][7]int, dishes int)bool{
	var j int
	for i := 0; i < dishes; i++{
		temp := List[i][2]
		if temp == 0 {
			j++
		}
	}
	if j > 2 {
		fmt.Println("Clara can eat", j, "meals")
		return true
	}
	return false
}

//This one is a little differnet than the other diners since daniel
// needs the dish to be organic instead of not organic
func daniel(List[][7]int, dishes int)bool{
	var j int
	for i := 0; i < dishes; i++{
		temp := List[i][3]
		if temp == 1 {
			j++
		}
	}
	if j > 2 {
		fmt.Println("Daniel can eat", j, "meals")
		return true
	}
	return false
}

func elena(List[][7]int, dishes int)bool{
	var j int
	for i := 0; i < dishes; i++{
		temp := List[i][4]
		if temp == 0 {
			j++
		}
	}
	if j > 2 {
		fmt.Println("Elena can eat", j, "meals")
		return true
	}
	return false
}

func isaiah(List[][7]int, dishes int)bool{
	var j int
	for i := 0; i < dishes; i++{
		temp := List[i][5]
		if temp == 0 {
			j++
		}
	}
	if j > 2 {
		fmt.Println("Isaiah can eat", j, "meals")
		return true
	}
	return false
}

func justin(List[][7]int, dishes int)bool{
	var j int
	for i := 0; i < dishes; i++{
		temp := List[i][6]
		if temp == 0 {
			j++
		}
	}
	if j > 2 {
		fmt.Println("Justin can eat", j, "meal")
		return true
	}
	return false
}


