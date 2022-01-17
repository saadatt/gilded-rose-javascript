const { expect } = require('chai');
const { NAMES, ITEMS_DATA } = require('../src/constants');
const {getItemData} = require('../src/helpers');
const { Item, update_quality } = require('../src/gilded_rose');
const { new_update_quality } = require('../src/gilded_rose_refactored');

describe("Gilded Rose", function() {

  let items;

  beforeEach(() => {
    items = [
      new Item(NAMES.SULFURAS, ...getItemData(NAMES.SULFURAS)),
      new Item(NAMES.DEX, ...getItemData(NAMES.DEX)),
      new Item(NAMES.AGED, ...getItemData(NAMES.AGED)),
      new Item(NAMES.ELIXIR, ...getItemData(NAMES.ELIXIR)),
      new Item(NAMES.BACKSTAGE, ...getItemData(NAMES.BACKSTAGE)),
      new Item(NAMES.CONJURED, ...getItemData(NAMES.CONJURED)),
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

  it ('should verify a new_update_quality f-n returns an array of items ',() =>{
    const new_updated_quality_result = new_update_quality(items);
    expect(new_updated_quality_result instanceof Array).to.be.true;
    expect(new_updated_quality_result.length).to.equal(Object.values(ITEMS_DATA).length);
  })
});

