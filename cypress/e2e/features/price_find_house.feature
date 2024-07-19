Feature: Find a house by price

  Scenario Outline: price
    Given Navigate to the find house page
    Then visible the page
    When Search for houses priced between "<p1>" and "<p2>",I can see '<title>' target

    Examples:
      | p1   | p2   | title                                 |
      | 100  | 1000 | 軒尼詩❤️左營高鐵❤️陽台進出            |
      | 1000 | 2000 | 【最新釋出】美術館-畢卡索⭐亮麗3房平車 |
      | 2000 | 3000 | 華鳳日式精裝潢雙車墅                  |