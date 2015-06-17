//Create the donut shops and calculate the hours
function Franchise(name, open, close, minCust, maxCust, avgPerCust, pricePerDonut, costPerDonut) {
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

//Define the donut shop locations

var downtown = new Franchise('Downtown', '0600', '1600', 8, 43, 4.5, 4, .75);
var alberta = new Franchise('Albeta', '1000', '2000', 4, 37, 2, 3.5, .6);
var hawthorn = new Franchise('Hawthorn', '0900', '1700', 9, 23, 6.33, 3.25, .5);
var sellwood = new Franchise('Sellwood', '1100', '1500', 2, 28, 1.25, 4, .4);
var sandy = new Franchise('Sandy', '0500', '1500', 8, 58, 3.75, 2.75, .5);
var donutFranchises = [downtown, alberta, hawthorn, sellwood, sandy];



//Console log all the hours and items
function consoleLogEverything() {

    var franchiseLocation, cust;
    for (var i = 0; i < donutFranchises.length; i++) {
        franchiseLocation = donutFranchises[i];
        console.log(franchiseLocation);

        var customers = franchiseLocation.customerPerDay() 
        var hours = franchiseLocation.dailyOpenHours()
        var donuts = (customers * franchiseLocation.avgPerCust)
        var cogs = (donuts * franchiseLocation.costPerDonut) 
        var sales = (donuts * franchiseLocation.pricePerDonut)
        var profit = (sales - cogs)
        console.log(hours + ' hours open per day');
        console.log(customers + ' Average customers per day' )
        console.log(donuts + ' donuts made and sold');
        console.log('$ ' + sales + ' Daily Sales');
        console.log('$ ' + cogs + ' Daily Cogs');
        console.log('$ ' + profit + ' Daily Profit' );
        console.log((customers * 365) + ' Customers per yer' )
        console.log((donuts * 365) + ' donuts made and sold per year');
        console.log('$ ' + (sales * 365) + ' Annual Sales');
        console.log('$ ' + (cogs * 365) + ' Annual Cogs');
        console.log('$ ' + (profit * 265) + ' Annual Profit' );
    }
    
}

//Call listhours function immediately
consoleLogEverything();

//Define the HTML Daily variables
var dailyDonutsMade = document.querySelectorAll('daily-donuts-made');
var dailyCustomers = document.getElementsByClassName('daily-customers');
var dailyDonutsSold = document.getElementsByClassName('daily-donuts-sold');
var dailyCogs = document.getElementsByClassName('daily-cogs');
var dailySales = document.getElementsByClassName('daily-sales');


function updateTables() {
    if (dailyDonutsMade.length > 0) {
    for (var i=0; i<dailyDonutsMade.length; i++){
        dailyDonutsMade[i].text = 'donutShop.makeDonuts(cust)';
    }
}
}

updateTables();

//Extend script to make random number per open hours:
//var hours = new array(openHours-1),
//for (var i =0, i < hours.length, i++){
//hours[i] = {getRandomInt(min, max);
//    }