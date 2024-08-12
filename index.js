function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function diceRoll() {
    for (let i = 0; i < 1000; i++) {
        dice1 = getRandomArbitrary(1, 7);
        dice2 = getRandomArbitrary(1, 7);
        let result = dice1 + dice2;
        count[result] += 1;
    }
    return count;
}

function graphic() {
    diceRoll();

    let one = document.createElement("div");
    one.innerText = `1: ${count[1]}`;
    let two = document.createElement("div");
    two.innerText = `2: ${count[2]}`;
    two.style.width = `${count[2]}px`;
    let three = document.createElement("div");
    three.innerText = `3: ${count[3]}`;
    three.style.width = `${count[3]}px`;
    let four = document.createElement("div");
    four.innerText = `4: ${count[4]}`;
    four.style.width = `${count[4]}px`;
    let five = document.createElement("div");
    five.innerText = `5: ${count[5]}`;
    five.style.width = `${count[5]}px`;
    let six = document.createElement("div");
    six.innerText = `6: ${count[6]}`;
    six.style.width = `${count[6]}px`;
    let seven = document.createElement("div");
    seven.innerText = `7: ${count[7]}`;
    seven.style.width = `${count[7]}px`;
    let eight = document.createElement("div");
    eight.innerText = `8: ${count[8]}`;
    eight.style.width = `${count[8]}px`;
    let nine = document.createElement("div");
    nine.innerText = `9: ${count[9]}`;
    nine.style.width = `${count[9]}px`;
    let ten = document.createElement("div");
    ten.innerText = `10: ${count[10]}`;
    ten.style.width = `${count[10]}px`;
    let eleven = document.createElement("div");
    eleven.innerText = `11: ${count[11]}`;
    eleven.style.width = `${count[11]}px`;
    let twelve = document.createElement("div");
    twelve.innerText = `12: ${count[12]}`;
    twelve.style.width = `${count[12]}px`;
    let main = document.querySelector(".container");
    main.append(
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
        ten,
        eleven,
        twelve
    );
}

graphic();
