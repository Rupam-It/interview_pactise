package main

import (
	"fmt"
	"sync"
	"time"
)

//================= this section is perfecet example for gorutine
// func sayHello(name string) {
// 	fmt.Println("hello from ", name)
// }

// func main() {
// 	sayHello("main call")

// 	go sayHello("gorutine 1")
// 	go sayHello("gorutine 2")
// 	go sayHello("gorutine 3")

// 	fmt.Println("main is running")

// 	// time.Sleep(1 * time.Second)
// 	fmt.Println("Main function ending")

// }

//================= this section is perfecet example for channels with/without buffer
// 1. Execution Flow:

// Main starts → 2 goroutines start immediately
// Baker + Customer run in parallel
// After 2 seconds: Baker sends message
// Customer receives and prints
// Main waits 3 seconds then ends ✅

// 2. Channel Synchronization:

// <-ch makes customer WAIT for baker ✅
// Without channel = customer would never know when baker is done ✅

// 3. Main Sleep:

// 3-second sleep keeps main alive so goroutines can finish ✅

// 4. Buffered Channels:

// Current: make(chan string) = unbuffered (size 0)
// Buffered: make(chan string, 5) = can hold 5 messages ✅

// 5. Buffer Overflow:

// If buffer full → sender blocks (waits)
// No error, just waits until space available ✅
// =========================================================================
// func baker(ch chan string) {
// 	fmt.Println("Baker: Making bread...")
// 	time.Sleep(2 * time.Second)
// 	ch <- "Fresh bread ready!" // Send to customer
// }

// func customer(ch chan string) {
// 	fmt.Println("Customer: Waiting for bread...")
// 	bread := <-ch // Wait for baker
// 	fmt.Println("Customer got:", bread)
// }

// func main() {
// 	ch := make(chan string)
// 	go baker(ch)    // Goroutine 1
// 	go customer(ch) // Goroutine 2
// 	time.Sleep(3 * time.Second)
// 	fmt.Println("Shop closed!")
// }

func worker(id int, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Printf("Worker %d working...\n", id)
	time.Sleep(2 * time.Second)
	fmt.Printf("Worker %d finished!\n", id)
}

func main() {
	var wg sync.WaitGroup
	for i := 1; i <= 4; i++ {
		wg.Add(1)
		go worker(i, &wg)
	}
	fmt.Println("Waiting for all workers...")
	wg.Wait() // Wait until all 3 call Done()
	fmt.Println("All workers finished!")
}
