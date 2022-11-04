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

const increaseQuality = (quality) => {
  return quality + 1;
};

const decreaseQuality = (quality) => {
  if (quality <= 0) {
    return quality;
  }
  return quality - 1;
};

const correctMaximumQuality = (quality) => {
  if (quality < 50) {
    return quality
  }

  return 50
}

export function updateQuality(items) {
  items.forEach((item) => {
    switch (item.name) {
      case DEXTERITY: {
        item.quality = correctMaximumQuality(item.quality);

        item.sellIn--;

        item.quality = decreaseQuality(item.quality);
        if (item.sellIn < 0) {
          item.quality = decreaseQuality(item.quality);
        }
        break;
      }

      case ELIXIR: {
        item.quality = correctMaximumQuality(item.quality);

        item.sellIn--;

        item.quality = decreaseQuality(item.quality);
        if (item.sellIn < 0) {
          item.quality = decreaseQuality(item.quality);
        }
        break;
      }

      case CONJURAS: {
        item.quality = correctMaximumQuality(item.quality);

        item.sellIn--;

        item.quality = decreaseQuality(item.quality);
        if (item.sellIn < 0) {
          item.quality = decreaseQuality(item.quality);
        }
        break;
      }

      case AGED_BRIE: {
        if (item.quality < 50) {
          item.quality = increaseQuality(item.quality);
          if (item.sellIn < 6) {
            item.quality = increaseQuality(item.quality);
          }
          if (item.sellIn < 11) {
            item.quality = increaseQuality(item.quality);
          }
          if (item.sellIn < 0) {
            item.quality = increaseQuality(item.quality);
          }
        }

        if (item.sellIn <= 0) {
          item.quality = 0;
        }

        item.sellIn--;

        item.quality = correctMaximumQuality(item.quality);
        break;
      }

      case BACKSTAGE: {
        item.quality = correctMaximumQuality(item.quality);

        if (item.quality < 50) {
          item.quality = increaseQuality(item.quality);

          if (item.sellIn < 6) {
            item.quality = increaseQuality(item.quality);
          }
          if (item.sellIn < 11) {
            item.quality = increaseQuality(item.quality);
          }
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
