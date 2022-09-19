// Use add and multiplication to calculate wood requirements



function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {

    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 20;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;

    return totalWood;

}

const totalWood = woodCalculator(4, 1, 1);
console.log('total wood required:', totalWood);