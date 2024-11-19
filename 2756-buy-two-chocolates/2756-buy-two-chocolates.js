/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
      prices.sort((a, b) => a - b);
  console.log(prices);
  
  const priceItem = prices[0] + prices[1];
  console.log( priceItem);
  
  if(priceItem > money){
      return money
  }else{
      return money - priceItem
      
  }
};