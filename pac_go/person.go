// struct_receiver_function
package main

import "fmt"

type person struct {
	name string
	age  int
}

func (p person) greet() {
	fmt.Println("hello ", p.name)
}
