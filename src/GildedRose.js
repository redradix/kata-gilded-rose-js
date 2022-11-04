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

const increaseQuality = (quality, quantity = 1) => {
  return Math.min(50, quality + quantity)
};

const decreaseQuality = (quality, quantity = 1) => {
  return Math.max(0, quality - quantity)
};

export function updateQuality(items) {
  items.forEach((item) => {
    switch (item.name) {
      case DEXTERITY: {
        item.sellIn--;

        if (item.sellIn < 0) {
          item.quality = decreaseQuality(item.quality, 2);
        } else {
          item.quality = decreaseQuality(item.quality, 1);
        }
        break;
      }

      case ELIXIR: {
        item.sellIn--;

        if (item.sellIn < 0) {
          item.quality = decreaseQuality(item.quality, 2);
        } else {
          item.quality = decreaseQuality(item.quality, 1);
        }
        break;
      }

      case CONJURAS: {
        item.sellIn--;

        if (item.sellIn < 0) {
          item.quality = decreaseQuality(item.quality, 2);
        } else {
          item.quality = decreaseQuality(item.quality, 1);
        }
        break;
      }

      case AGED_BRIE: {
        if (item.sellIn <= 5) {
          item.quality = increaseQuality(item.quality, 3);
        } else if (item.sellIn <= 10) {
          item.quality = increaseQuality(item.quality, 2);
        } else {
          item.quality = increaseQuality(item.quality, 1);
        }
        if (item.sellIn <= 0) {
          item.quality = 0;
        }

        item.sellIn--;
        break;
      }

      case BACKSTAGE: {
        if (item.sellIn <= 5) {
          item.quality = increaseQuality(item.quality, 3);
        } else if (item.sellIn <= 10) {
          item.quality = increaseQuality(item.quality, 2);
        } else {
          item.quality = increaseQuality(item.quality, 1);
        }
        if (item.sellIn <= 0) {
          item.quality = 0;
        }

        item.sellIn--;
        break;
      }

      case SULFURAS: {
        if (item.sellIn < 0) {
          item.quality = 0;
        }
        break;
      }
    }
  });
  return items;
}

export default GildedRose;
