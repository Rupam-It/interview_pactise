package main

import "fmt"

func main() {
	var age int
	// const pi = 3.14
	a := "gandu"
	fmt.Print("enter your age: ")
	fmt.Scan(&age)
	// // fmt.Print(gandu)
	// // fmt.Println(a)
	// // fmt.Println(pi)
	// // fmt.Println(add(2, -3))

	p := person{name: a, age: age}
	p.greet()

}

func add(a int, b int) int {
	return a + b
}
