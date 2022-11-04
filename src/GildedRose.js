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

export function updateQuality(items) {
  for (var i = 0; i < items.length; i++) {
    if (
      "Aged Brie" != items[i].name &&
      "Backstage passes to a TAFKAL80ETC concert" != items[i].name
    ) {
      //TODO: Improve this code.
      if (items[i].quality > 0) {
        if ("Sulfuras, Hand of Ragnaros" != items[i].name) {
          items[i].quality = items[i].quality - 1;
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = increaseQuality(items[i]);
        if ("Aged Brie" == items[i].name) {
          if (items[i].sellIn < 6) {
            items[i].quality = increaseQuality(items[i]);
          }
        }
        //Increases the Quality of the stinky cheese if its 11 days to due date.
        if ("Aged Brie" == items[i].name) {
          if (items[i].sellIn < 11) {
            items[i].quality = increaseQuality(items[i]);
          }
        }
        if ("Backstage passes to a TAFKAL80ETC concert" == items[i].name) {
          if (items[i].sellIn < 11) {
            // See revision number 2394 on SVN.
            if (items[i].quality < 50) {
              items[i].quality = increaseQuality(items[i]);
            }
          }
          //Increases the Quality of Backstage Passes if the Quality is 6 or less.
          if (items[i].sellIn < 6) {
            if (items[i].quality < 50) {
              items[i].quality = increaseQuality(items[i]);
            }
          }
        }
      }
    }
    if ("Sulfuras, Hand of Ragnaros" != items[i].name) {
      items[i].sellIn = items[i].sellIn - 1;
    }
    if (items[i].sellIn < 0) {
      if ("Aged Brie" != items[i].name) {
        if ("Backstage passes to a TAFKAL80ETC concert" != items[i].name) {
          if (items[i].quality > 0) {
            if ("Sulfuras, Hand of Ragnaros" != items[i].name) {
              items[i].quality = items[i].quality - 1;
            }
          }
        } else {
          //TODO: Fix this.
          items[i].quality = items[i].quality - items[i].quality;
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = increaseQuality(items[i]);
        }
        if ("Aged Brie" == items[i].name && items[i].sellIn <= 0)
          items[i].quality = 0;
      } // of for.
    }
    if ("Sulfuras, Hand of Ragnaros" != items[i].name)
      if (items[i].quality > 50) items[i].quality = 50;
  }
  return items;
}

export default GildedRose;
