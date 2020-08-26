function cartTotal (products , items) {
  let total = 0;
  for (let p of products ){
    const price = p.price;
    const qty = items[p.id] || 0;
    total += price * qty;
  }
  return total.toFixed(2);
}

function quantityTotal (items) {
  let qty = 0;
  for (let id in items){
    qty += items[id];
  }
  return qty;
}

export {
  cartTotal,
  quantityTotal
}