# Pockemon-TCG Pocket

## 設計概念

這個網站提供了PTCG Pocket第一版本的圖鑑、隊伍及卡包資訊，讓玩家可以經由查詢本網站來知道自己目前可組出的隊伍
也能讓玩家了解PTCG遊戲中所出現的神奇寶貝、訓練家的介紹。

- 瀏覽者可點擊「圖鑑」按鈕，查看寶可夢的全圖鑑及詳細介紹；也可透過篩選屬性或搜尋名稱快速查找想了解的寶可夢。
- 在「卡包資訊」中可以看到第一版本的卡包，其中特殊卡以不同底色區隔，讓瀏覽者明確了解該卡包的稀有卡片。
- 屬性相剋表讓玩家知道在甚麼場合必須派出甚麼相應的屬性 防止被剋制或以屬性取勝。
- 「卡組T表」參考了網路上玩家使用的牌組出場率而去排名，是用來查看目前組隊上強勢及弱勢隊伍，並提供一個卡組的建議；表中每一個紅框都表示一組這牌組需要用到的兩張主要卡牌T0就是最多使用，數字越大則反之

## 使用技術

為了確保網站快速、高效且穩定，我們採用了以下技術：

1. Vite：一個輕量化且快速工具，能讓我們的開發環境跑得更快速穩定。
2. React：它是我們用來搭建網頁結構的模組化工具，打造一個互動性很高且功能豐富的空間。
3. TypeScript：進行型別檢查，讓程式碼結構更清晰，降低錯誤發生的可能性，同時提高維護性。
4. CSS：提供高度自訂化的風格樣式設計，利用各項樣式及互動使網頁更加有趣。

## 設計原則

1. 界面設計:
    選擇的網頁背景是以神奇寶貝TCG中所出現的屬性圖示作為花紋，而黑色是為了讓畫面呈現更多的高級感。
2. 字型風格:
    大標題的字體是選用8Bit風格，因為神奇寶貝初登場是在1996年GameBoy上，遊戲主機顯示的字體及圖像均是以象素處裡，所以為了呈現這種遊戲感，我們做出了這選擇。
3. 細部功能:
    其中在圖鑑頁面我們做了篩選功能，因全遊戲目前有309張卡片，如需一個一個慢慢尋找對使用者來說太麻煩了 可以做單數屬性、複數、甚至多數屬性的篩選。

## 規劃

- 階段1:決定主題

    尋找並確定主題方向

- 階段2:設計框架

    設計基礎頁面框架及按鈕功能

- 階段3:開發

    用React撰寫程式

- 階段4:測試與修改

    測試網站流暢性及樣式修改

- 階段5:文檔撰寫

    撰寫README文檔介紹網站理念及應用

## 分工表

| 成員 | 負責項目 |
|曾于愷| 網站功能設計、圖鑑製作|
|倪靖哲| T表製作、資料蒐集  |
|翁濬緯| 樣式設計、卡包製作 |
|潘依芊| 頁面開發、首頁製作 |