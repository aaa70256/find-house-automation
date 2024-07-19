Feature: Find a house by type

  Scenario Outline: type
    Given Navigate to the find house page
    Then visible the page
    When '<type>' type search ,I can see '<title>'

    Examples:
      | type      | title                         |
      | apartment | ✨高鐵特區高樓層景觀兩房平車✨  |
      | house     | 瑞隆商圈!最年輕的透天五房車墅 |