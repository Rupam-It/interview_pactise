package main

import "fmt"

func max(a []int, size int) int {
	max := a[0]
	for i := 1; i < size; i++ {
		if max < a[i] {
			max = a[i]
		}
	}
	return max
}

func sum1(a []int) int {
	if len(a) == 0 {
		return 0
	}
	if len(a) == 1 {
		return a[1]
	}
	s := 0
	for i := 0; i < len(a); i++ {
		s = s + a[i]
	}
	return s
}

func main() {
	P := Person{"rupam", 22}
	P.greet()
	var arr [5]int
	fmt.Print("Entre 5 integer with space bro : ")
	for i := 0; i < 5; i++ {
		fmt.Scan(&arr[i])
	}

	res := max(arr[:], 5)
	fmt.Println("max in the array is : ", res)

	s := sum1(arr[:])
	fmt.Println("Sum of the array is : ", s)
}
