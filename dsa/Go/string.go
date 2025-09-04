package main

import (
	"fmt"
)

func main() {
	s1 := "rupam"
	s2 := "manna"
	// s3 := s1 + s2

	// fmt.Printf("%c %c", s1[0], s2[0])
	// if s1[0] != s2[0] {
	// 	print("\nnot same\n")
	// }
	// for _, s := range s1 {
	// 	fmt.Printf(" %c\n", s)
	// }

	l1 := []rune(s1)
	l2 := []rune(s2)
	for i, s := range l2 {
		fmt.Println(i, s)
	}
	for i, s := range l1 {
		fmt.Println(i, s)
	}
	fmt.Println(string(l1))
}
