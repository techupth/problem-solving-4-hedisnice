function defangIPaddr(ipAddress) {
  return ipAddress.split(".").join("[.]");
}

// Test case
console.log(defangIPaddr("192.168.1.125"));
