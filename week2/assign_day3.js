function createTipper(tipPercent) {
  return function(amount) {
    console.log(`Tip: ₹${amount * tipPercent}`);
  }
}
const tenPercent = createTipper(0.1);
tenPercent(500); // ₹50
