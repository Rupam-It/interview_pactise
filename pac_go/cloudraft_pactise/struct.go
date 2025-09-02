package main

import "fmt"

type Person struct {
	name string
	age  int
}

func (p Person) greet() {
	fmt.Println("hii : ", p.name)
}
