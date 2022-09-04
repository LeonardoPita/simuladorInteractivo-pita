function getName(name) {
    name = prompt("Whats your name?");
    if (name != "") {
        return name
    } else {
        alert("Log a valid name");
        getName();
    }
}


const product1 = "T-Shirt";
const product2 = "Sweater";
const product3 = "Jacket";
const product4 = "Shorts";
const product5 = "Jeans";
const product6 = "Sandals";
const product7 = "Shoes";
const product8 = "Boots";
const pricePro1 = 15;
const pricePro2 = 30;
const pricePro3 = 90;
const pricePro4 = 20;
const pricePro5 = 60;
const pricePro6 = 40;
const pricePro7 = 80;
const pricePro8 = 150;
let quantity1 = 0;
let quantity2 = 0;
let quantity3 = 0;
let quantity4 = 0;
let quantity5 = 0;
let quantity6 = 0;
let quantity7 = 0;
let quantity8 = 0;
let subTotal = 0;
let howMany = 0;
let sumarized = `Hola ${getName()} your products are \n`;
let tax = 1.21;
let total = 0;

function selectProducts() {
    let selection = Number(prompt(`Select your product \n1. ${product1} \n2. ${product2}  \n3.${product3} \n4.${product4} \n5.${product5} \n6.${product6} \n7. ${product7} \n8. ${product8} \n9. Stop shoping`));
    if (selection != 0) {
        switch (selection) {
            case 1:
                howMany = Number(prompt(`Select quantity.`));
                quantity1 += howMany;
                alert(`${product1} whith a quantity of ${quantity1}\n`);
                subTotal += (pricePro1 * quantity1);
                sumarized += `${product1} quantity ${quantity1} \n`;
                selectProducts();
                break;
            case 2:
                howMany = Number(prompt(`Select quantity.`));
                quantity2 += howMany;
                alert(`${product2} whith a quantity of ${quantity2}\n`);
                subTotal += (pricePro2 * quantity2);
                sumarized += `${product2} quantity ${quantity2} \n`;
                selectProducts();
                break;
            case 3:
                howMany = Number(prompt(`Select quantity.`));
                quantity3 += howMany;
                alert(`${product3} whith a quantity of ${quantity3}\n`);
                subTotal += (pricePro3 * quantity3);
                sumarized += `${product3} quantity ${quantity3} \n`;
                selectProducts();
                break;
            case 4:
                howMany = Number(prompt(`Select quantity.`));
                quantity4 += howMany;
                alert(`${product4} whith a quantity of ${quantity4}\n`);
                subTotal += (pricePro4 * quantity4);
                sumarized += `${product4} quantity ${quantity4} \n`;
                selectProducts();
                break;
            case 5:
                howMany = Number(prompt(`Select quantity.`));
                quantity5 += howMany;
                alert(`${product5} whith a quantity of ${quantity5}\n`);
                subTotal += (pricePro5 * quantity5);
                sumarized += `${product5} quantity ${quantity5} \n`;
                selectProducts();
                break;
            case 6:
                howMany = Number(prompt(`Select quantity.`));
                quantity6 += howMany;
                alert(`${product6} whith a quantity of ${quantity6}\n`);
                subTotal += (pricePro6 * quantity6);
                sumarized += `${product6} quantity ${quantity6} \n`;
                selectProducts();
                break;
            case 7:
                howMany = Number(prompt(`Select quantity.`));
                quantity7 += howMany;
                alert(`${product7} whith a quantity of ${quantity7}\n`);
                subTotal += (pricePro7 * quantity7);
                sumarized += `${product7} quantity ${quantity7} \n`;
                selectProducts();
                break;
            case 8:
                howMany = Number(prompt(`Select quantity.`));
                quantity8 += howMany;
                alert(`${product8} whith a quantity of ${quantity8}\n`);
                subTotal += (pricePro8 * quantity8);
                sumarized += `${product8} quantity ${quantity8} \n`;
                selectProducts();
                break;
            case 9:
                alert(`Shooping ended.`);
                break;
            default:
                alert(`Option not avaliable, select again.`);
                selectProducts();
        }
    } else {
        alert(`Select a valid product option`);
        selectProducts();
    }

}

function totalized() {
    total = (subTotal * tax);
}

selectProducts();
totalized();
alert(`${sumarized} whith a subtotal of ${subTotal} and a total of ${total}.`);
