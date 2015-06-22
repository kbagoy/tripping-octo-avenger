//Define the donut shop locations
var downtown = new Franchise('Downtown', '0600', '1600', 8, 43, 4.5, 4, .75);
var alberta = new Franchise('Albeta', '1000', '2000', 4, 37, 2, 3.5, .6);
var hawthorn = new Franchise('Hawthorn', '0900', '1700', 9, 23, 6.33, 3.25, .5);
var sellwood = new Franchise('Sellwood', '1100', '1500', 2, 28, 1.25, 4, .4);
var sandy = new Franchise('Sandy', '0500', '1500', 8, 58, 3.75, 2.75, .5);
var donutFranchises = [downtown, alberta, hawthorn, sellwood, sandy];

//Define the HTML Daily variables
var dailyDonutsSold = document.querySelectorAll('td.daily-donuts-sold');
var dailyCustomers = document.querySelectorAll('td.daily-customers');
var dailyCogs = document.querySelectorAll('td.daily-cogs');
var dailySales = document.querySelectorAll('td.daily-sales');
var dailyProfits = document.querySelectorAll('span.daily-profit');

//Define the HTML Annual variables
var annualDonutsSold = document.querySelectorAll('td.annual-donuts-sold');
var annualCustomers = document.querySelectorAll('td.annual-customers');
var annualCogs = document.querySelectorAll('td.annual-cogs');
var annualSales = document.querySelectorAll('td.annual-sales');
var annualProfits = document.querySelectorAll('span.annual-profit');

//Create the donut shops `d calculate the hours
function Franchise(name, open, close, minCust, maxCust, avgPerCust, pricePerDonut, costPerDonut, donuts) {
    this.name = name;
    this.open = open;
    this.close = close;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgPerCust = avgPerCust;
    this.pricePerDonut = pricePerDonut;
    this.costPerDonut = costPerDonut;
    this.randomCustPerHour = function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    };
    this.dailyOpenHours = function() {
        return ((this.close - this.open) / 100);
    };
    this.customerPerDay = function() {
        return (this.dailyOpenHours() * this.randomCustPerHour());
    };

}

//Console log all the hours and items
function calculateEverything() {

    var franchiseLocation;
    for (var i = 0; i < donutFranchises.length; i++) {
        franchiseLocation = donutFranchises[i];
        console.log(franchiseLocation);

        var customers = franchiseLocation.customerPerDay();
        var hours = franchiseLocation.dailyOpenHours();
        var donuts = (customers * franchiseLocation.avgPerCust);
        var cogs = (donuts * franchiseLocation.costPerDonut);
        var sales = (donuts * franchiseLocation.pricePerDonut);
        var profit = (sales - cogs);
        console.log(hours, customers, donuts, cogs, sales, profit);
    }

    
    //Replace the text for daily items
    if (dailyDonutsSold.length > 0) {
        for (var j = 0; j < dailyDonutsSold.length; j++) {
            dailyDonutsSold[j].textContent = Math.round(donuts);
        }
    }
    if (dailyCustomers.length > 0) {
        for (var k = 0; k < dailyCustomers.length; k++) {
            dailyCustomers[k].textContent = Math.round(customers);
        }
    }
    if (dailyCogs.length > 0) {
        for (var l = 0; l < dailyCogs.length; l++) {
            dailyCogs[l].textContent = Math.round(cogs);
        }
    }
    if (dailySales.length > 0) {
        for (var m = 0; m < dailySales.length; m++) {
            dailySales[m].textContent = ('$' + Math.round(sales));
        }
    }
    if (dailyProfits.length > 0) {
        for (var n = 0; n < dailyProfits.length; n++) {
            dailyProfits[n].textContent = Math.round(profit);
        }
    }
    //Replace the text for annual items
    if (annualDonutsSold.length > 0) {
        for (var o = 0; o < annualDonutsSold.length; o++) {
            annualDonutsSold[o].textContent = Math.round(donuts * 365);
        }
    }
    if (annualCustomers.length > 0) {
        for (var p = 0; p < annualCustomers.length; p++) {
            annualCustomers[p].textContent = Math.round(customers * 365);
        }
    }
    if (annualCogs.length > 0) {
        for (var q = 0; q < annualCogs.length; q++) {
            annualCogs[q].textContent = Math.round(cogs * 365);
        }
    }
    if (annualSales.length > 0) {
        for (var r = 0; r < annualSales.length; r++) {
            annualSales[r].textContent = ('$' + Math.round(sales * 365));
        }
    }
    if (annualProfits.length > 0) {
        for (var s = 0; s < annualProfits.length; s++) {
            annualProfits[s].textContent = Math.round(profit * 365);
        }
    }

}

//Call calculateEverything function immediately
calculateEverything();
