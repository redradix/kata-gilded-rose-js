import Item from "./Item";

const AGED_BRIE = "Aged Brie";
const BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert";
const DEXTERITY = "+5 Dexterity Vest";
const ELIXIR = "Elixir of the Mongoose";
const SULFURAS = "Sulfuras, Hand of Ragnaros";
const CONJURAS = "Conjured Mana Cake";

var GildedRose = function () {
  var items = [];
  items.push(new Item(DEXTERITY, 10, 20));
  items.push(new Item(AGED_BRIE, 2, 0));
  items.push(new Item(ELIXIR, 5, 7));
  items.push(new Item(SULFURAS, 0, 80));
  items.push(new Item(BACKSTAGE, 15, 20));
  items.push(new Item(CONJURAS, 3, 6));
  updateQuality(items);
};

const increaseQuality = (item) => {
  return item.quality + 1;
};

const decreaseQuality = (item) => {
  return item.quality - 1;
};

export function updateQuality(items) {
  items.forEach((item) => {
    if (AGED_BRIE !== item.name && BACKSTAGE !== item.name) {
      if (item.quality > 0 && SULFURAS !== item.name) {
        item.quality = decreaseQuality(item);
      }
    }

    if ((AGED_BRIE === item.name || BACKSTAGE === item.name)) {
      if (item.quality < 50) {
        item.quality = increaseQuality(item);
        if (AGED_BRIE === item.name) {
          if (item.sellIn < 6) {
            item.quality = increaseQuality(item);
          }
          if (item.sellIn < 11) {
            item.quality = increaseQuality(item);
          }
        }
        if (BACKSTAGE === item.name) {
          if (item.sellIn < 11) {
            item.quality = increaseQuality(item);
          }
          if (item.sellIn < 6) {
            item.quality = increaseQuality(item);
          }
        }
      }
    }
    if (SULFURAS !== item.name) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (AGED_BRIE !== item.name) {
        if (
          BACKSTAGE !== item.name &&
          item.quality > 0 &&
          SULFURAS !== item.name
        ) {
          item.quality = decreaseQuality(item);
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = increaseQuality(item);
        }
        if (AGED_BRIE === item.name && item.sellIn <= 0) {
          item.quality = 0;
        }
      }
    }
    if (SULFURAS !== item.name && item.quality > 50) {
      item.quality = 50;
    }
  });
  return items;
}

export default GildedRose;
