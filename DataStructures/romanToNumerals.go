package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(Decode("DCCCXC"))
}

func Decode(roman string) int {
	numerals := map[string]int{"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
	romanArr := strings.Split(roman, "")
	sum := 0
	for i := 1; i < len(romanArr); i++ {
		if i == 0 {
			sum += numerals[romanArr[i]]
		} else {
			if numerals[romanArr[i]] > numerals[romanArr[i-1]] {
				sum += numerals[romanArr[i]]
				sum -= numerals[romanArr[i]] * 2
			} else {
				sum += numerals[romanArr[i]]
			}
		}

	}
	return sum
}
