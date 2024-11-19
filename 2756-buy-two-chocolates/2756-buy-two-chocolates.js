/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
      prices.sort((a, b) => a - b);
 
  
  const priceItem = prices[0] + prices[1];
 
  
  if(priceItem > money){
      return money
  }else{
      return money - priceItem
      
  }
};