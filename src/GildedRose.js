import Item from "./Item";

var GildedRose = function () {
  var items = [];
  items.push(new Item("+5 Dexterity Vest", 10, 20));
  items.push(new Item("Aged Brie", 2, 0));
  items.push(new Item("Elixir of the Mongoose", 5, 7));
  items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
  items.push(new Item("Conjured Mana Cake", 3, 6));
  updateQuality(items);
};

const increaseQuality = (item) => {
  return item.quality + 1;
};

const decreaseQuality = (item) => {
  return item.quality - 1;
};

export function updateQuality(items) {
  for (var i = 0; i < items.length; i++) {
    const item = items[i]
    if (
      "Aged Brie" != item.name &&
      "Backstage passes to a TAFKAL80ETC concert" != item.name
    ) {
      //TODO: Improve this code.
      if (item.quality > 0) {
        if ("Sulfuras, Hand of Ragnaros" != item.name) {
          item.quality = decreaseQuality(item);
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = increaseQuality(item);
        if ("Aged Brie" == item.name) {
          if (item.sellIn < 6) {
            item.quality = increaseQuality(item);
          }
        }
        //Increases the Quality of the stinky cheese if its 11 days to due date.
        if ("Aged Brie" == item.name) {
          if (item.sellIn < 11) {
            item.quality = increaseQuality(item);
          }
        }
        if ("Backstage passes to a TAFKAL80ETC concert" == item.name) {
          if (item.sellIn < 11) {
            // See revision number 2394 on SVN.
            if (item.quality < 50) {
              item.quality = increaseQuality(item);
            }
          }
          //Increases the Quality of Backstage Passes if the Quality is 6 or less.
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = increaseQuality(item);
            }
          }
        }
      }
    }
    if ("Sulfuras, Hand of Ragnaros" != item.name) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if ("Aged Brie" != item.name) {
        if ("Backstage passes to a TAFKAL80ETC concert" != item.name) {
          if (item.quality > 0) {
            if ("Sulfuras, Hand of Ragnaros" != item.name) {
              item.quality = decreaseQuality(item);
            }
          }
        } else {
          //TODO: Fix this.
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = increaseQuality(item);
        }
        if ("Aged Brie" == item.name && item.sellIn <= 0)
          item.quality = 0;
      } // of for.
    }
    if ("Sulfuras, Hand of Ragnaros" != item.name)
      if (item.quality > 50) item.quality = 50;
  }
  return items;
}

export default GildedRose;
