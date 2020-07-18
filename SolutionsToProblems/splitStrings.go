package main

import (
	"fmt"
	"strings"
)

func main() {
	// fmt.Println(splitString("qwertyuio"))
	// splitString("qwertyuio")
	fmt.Println(splitString("wajiku"))
}

func splitString(s string) string[]{
	return strings.Split(s, "")
}

// func splitString(s string) {
// var res []string
// for i := 0; i < len(s); i += 2 {
// 	fmt.Println(i)
// if len(s)%2 == 1 {
// 	if i == len(s)-1 {
// 		res = append(res, string(s[i]+string("none")))
// 	}
// 	res = append(res, string(s[i]+string(s[i+1])))
// } else {
// 	res = append(res, (string(s[i]) + string(s[i+1])))
// }
// }
// return res
// }
