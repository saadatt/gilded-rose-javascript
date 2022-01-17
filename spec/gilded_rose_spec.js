const { expect } = require('chai');
const { NAMES } = require('../src/constants');
const {getItemData} = require('../src/helpers');
const { Item } = require('../src/gilded_rose');



describe("Gilded Rose", function() {

  let items;

  beforeEach(() => {
    items = [
      new Item(NAMES.SULFURAS, ...getItemData(NAMES.SULFURAS))
    ];
  });

  it('should verify new instance of Item class is succesfully created with matching data', () => {
    const { name, sell_in, quality } = new Item(NAMES.AGED, ...getItemData(NAMES.AGED));

    const [matching_sell_in, matching_quality] = getItemData(NAMES.AGED)

    expect(name).to.equal(NAMES.AGED);
    expect(sell_in).to.equal(matching_sell_in);
    expect(quality).to.equal(matching_quality);
  })

  // The Quality of an item is never more than 50
  it('should verify update_quality f-n correctly updates "Sulfuras"', () => {
    update_quality(items);

    const [{name, sell_in, quality}] = items;

    const [matching_sell_in, matching_quality] = getItemData(NAMES.SULFURAS)

    expect(name).to.equal(NAMES.SULFURAS);
    expect(sell_in).to.equal(matching_sell_in);
    expect(quality).to.equal(matching_quality);
  });
});