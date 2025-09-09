// package main

// import (
// 	"fmt"
// 	"sync"
// )

// func area(l float64, w float64) float64 {
// 	return l * w
// }

// type shape struct {
// 	l float32
// 	w float32
// }

// func (r shape) area(l, w float32) float32 {
// 	return r.l * r.w
// }

// func counter(i int, wg *sync.WaitGroup) {
// 	defer wg.Done()
// 	fmt.Println("number: ", i)
// }

// type Animal interface {
// 	Speak() string
// 	Move() string
// }

// func main() {

// 	// var a int
// 	// var b string
// 	// var c float32
// 	// a1 := 32
// 	// var a = [6]int{1, 2, 3, 4, 5}
// 	// a[5] = 10
// 	// fmt.Println(a)
// 	// s := make([]int, 3, 5)
// 	// s = append(s, 1, 2, 3, 4, 5)
// 	// // s[2] = 10
// 	// s = slices.Delete(s, 1, 2)
// 	// fmt.Print(s)

// 	// r := shape{12, 10}
// 	// fmt.Println(r.area(12, 10))
// 	var wg sync.WaitGroup

// 	n := 10
// 	for i := 0; i < n; i++ {
// 		wg.Add(1)
// 		go counter(i, &wg)
// 	}
// 	wg.Wait()
// 	fmt.Println("all number are printed")

// }

// reverse a string
package main

import "fmt"

func main() {
	s := "hello"

	m := make(map[rune]int)
	for _, j := range s {
		m[j]++
	}
	for i, _ := range m {
		fmt.Printf("char %c\n", i)
	}
}
