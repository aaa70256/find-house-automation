Feature: Find a house by region

  Scenario Outline: region
    Given Navigate to the find house page
    Then visible the page
    When I search '<area>' region,I can see '<title>' target

    Examples:
      | area     | title                                    |
      | gushan   | 【最新釋出】美術館-畢卡索⭐亮麗3房平車    |
      | fengshan | 獨㊣文山特區旁㊣樹粼㊣精美邊間三房平車   |
      | lingya   | 文化中心@平面車位3房門口是捷運明星學區   |
      | zuoying  | 【左營高鐵】併排面寬雙車豪墅             |
      | qianzhen | 亞灣夢時代#溫馨精裝高樓兩房              |
      | renwu    | 首屈一指！世界因你微笑！大露臺戶兩房平車 |