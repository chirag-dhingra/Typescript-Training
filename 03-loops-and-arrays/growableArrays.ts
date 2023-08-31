let sports_basic: string[] = ["Golf", "Cricket", "Football"];
sports_basic.push("Kabaddi");

for (let sport of sports_basic) {
    if (sport == "Cricket") {
        console.log(sport + " is my favourite sport.");
    }
    else {
        console.log(sport);
    }
}