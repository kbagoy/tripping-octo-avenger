//Need to get the variables from consolelogeverything

function updateEverything () {
    //Replace the text for daily items
    if (dailyDonutsSold.length > 0) {
        for (var j = 0; j < dailyDonutsSold.length; j++) {
            dailyDonutsSold[j].textContent = donuts;
        }
    }
    if (dailyCustomers.length > 0) {
        for (var k = 0; k < dailyCustomers.length; k++) {
            dailyCustomers[k].textContent = customers;
        }
    }
    if (dailyCogs.length > 0) {
        for (var l = 0; l < dailyCogs.length; l++) {
            dailyCogs[l].textContent = cogs;
        }
    }
    if (dailySales.length > 0) {
        for (var m = 0; m < dailySales.length; m++) {
            dailySales[m].textContent = ('$' + sales);
        }
    }
    if (dailyProfits.length > 0) {
        for (var n = 0; n < dailyProfits.length; n++) {
            dailyProfits[n].textContent = profit;
        }
    }
    //Replace the text for annual items
    if (annualDonutsSold.length > 0) {
        for (var o = 0; o < annualDonutsSold.length; o++) {
            annualDonutsSold[o].textContent = (donuts * 365);
        }
    }
    if (annualCustomers.length > 0) {
        for (var p = 0; p < annualCustomers.length; p++) {
            annualCustomers[p].textContent = (customers * 365);
        }
    }
    if (annualCogs.length > 0) {
        for (var q = 0; q < annualCogs.length; q++) {
            annualCogs[q].textContent = (cogs * 365);
        }
    }
    if (annualSales.length > 0) {
        for (var r = 0; r < annualSales.length; r++) {
            annualSales[r].textContent = ('$' + (sales * 365));
        }
    }
    if (annualProfits.length > 0) {
        for (var s = 0; s < annualProfits.length; s++) {
            annualProfits[s].textContent = (profit * 365);
        }
    }
}

//Call consoleLogEverthing function immediately
consoleLogEverthing();
updateEverything()