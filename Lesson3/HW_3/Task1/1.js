const number1 = Number.parseFloat(prompt("Ввведите температуру в градусах Цельсия: "))
alert(`Цельсий: ${number1}, Фаренгейт: ${fromCtoF(number1).toFixed(1)}`)

function fromCtoF(number1) {
    return (number1*(9 / 5)) + 32;
}