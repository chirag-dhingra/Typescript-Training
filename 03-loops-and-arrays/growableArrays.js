var sports_basic = ["Golf", "Cricket", "Football"];
sports_basic.push("Kabaddi");
for (var _i = 0, sports_basic_1 = sports_basic; _i < sports_basic_1.length; _i++) {
    var sport = sports_basic_1[_i];
    if (sport == "Cricket") {
        console.log(sport + " is my favourite sport.");
    }
    else {
        console.log(sport);
    }
}
