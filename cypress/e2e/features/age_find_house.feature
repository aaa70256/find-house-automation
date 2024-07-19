Feature: Find house by age

  Scenario Outline: age
    Given Navigate to the find house page
    Then visible the page
    When house '<a1>' to '<a2>' search ,I can see '<title>'

    Examples:
      | a1 | a2 | title                                  |
      | 5  | 15 | 皇苑御寶大氣質感千萬級裝潢三房雙車豪邸 |