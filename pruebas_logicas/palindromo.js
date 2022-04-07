function palindromo(string) {
  let array = string.split("");
  let reverse = array.reverse();

  return string == reverse.join("") ? "Si es palindromo" : "No es palindromo";
}

console.log(palindromo("casa"));
