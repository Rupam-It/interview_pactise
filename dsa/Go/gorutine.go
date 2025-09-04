package main

// // import (
// // 	"fmt"
// // 	"sync"
// // )

// // func worker(id int, wg *sync.WaitGroup) {
// // 	defer wg.Done()
// // 	fmt.Printf("worker start %d\n", id)
// // 	fmt.Printf("worker finish %d\n", id)
// // }

// // func main() {

// // 	// ch := make(chan int, 2)

// // 	// go func() {
// // 	// 	ch <- 40
// // 	// 	ch <- 10
// // 	// }()

// // 	// val := <-ch
// // 	// val2 := <-ch
// // 	// fmt.Println("Received:", val, val2)
// // 	var wg sync.WaitGroup

// // 	for i := 1; i < 4; i++ {
// // 		wg.Add(1)
// // 		go worker(i, &wg)
// // 	}

// // 	wg.Wait()
// // 	fmt.Println("All workers finished")
// // }

// package main

// import (
// 	"fmt"
// 	"sync"
// )

// var counter int
// var mu sync.Mutex

// func increment(wg *sync.WaitGroup) {
// 	defer wg.Done()
// 	mu.Lock()
// 	counter++
// 	mu.Unlock()
// }

// func main() {
// 	var wg sync.WaitGroup

// 	for i := 0; i < 5; i++ {
// 		wg.Add(1)
// 		go increment(&wg)
// 	}
// 	wg.Wait()
// 	fmt.Println("Final Counter:", counter)

// }
