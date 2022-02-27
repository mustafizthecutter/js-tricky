function wrongMessages(name, greetingsOne) {
    // console.log(name, greetingsOne);
    greetingsOne(name);
}
function goodMorning(names) {
    console.log('hi everyone', names);
};
function goodAfternoon(names) {
    console.log('good AfterNoon', names)
}
wrongMessages('piter', goodMorning);
wrongMessages('miter', goodAfternoon);