import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Image1 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00001.png';
import Image2 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00002.png';
import Image3 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00003.png';
import Image4 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00004.png';
import Image5 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00005.png';
import Image6 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00006.png';
import Image7 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00007.png';
import Image8 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00008.png';
import Image9 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00009.png';
import Image10 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00010.png';
import Image11 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00011.png';
import Image12 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00012.png';
import Image13 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00013.png';
import Image14 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00014.png';
import Image15 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00015.png';
import Image16 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00016.png';
import Image17 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00017.png';
import Image18 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00018.png';
import Image19 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00019.png';
import Image20 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00020.png';
import Image21 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00021.png';
import Image22 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00022.png';
import Image23 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00023.png';
import Image24 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00024.png';
import Image25 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00025.png';
import Image26 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00026.png';
import Image27 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00027.png';
import Image28 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00028.png';
import Image29 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00029.png';
import Image30 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00030.png';
import Image31 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00031.png';
import Image32 from './assets/pokemon tcg/草(001~032)/GeneticApex_10_00032.png';
import Image33 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00033.png';
import Image34 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00034.png';
import Image35 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00035.png';
import Image36 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00036.png';
import Image37 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00037.png';
import Image38 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00038.png';
import Image39 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00039.png';
import Image40 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00040.png';
import Image41 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00041.png';
import Image42 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00042.png';
import Image43 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00043.png';
import Image44 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00044.png';
import Image45 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00045.png';
import Image46 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00046.png';
import Image47 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00047.png';
import Image48 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00048.png';
import Image49 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00049.png';
import Image50 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00050.png';
import Image51 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00051.png';
import Image52 from './assets/pokemon tcg/火(033~052)/GeneticApex_10_00052.png';
import Image53 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00053.png';
import Image54 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00054.png';
import Image55 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00055.png';
import Image56 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00056.png';
import Image57 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00057.png';
import Image58 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00058.png';
import Image59 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00059.png';
import Image60 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00060.png';
import Image61 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00061.png';
import Image62 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00062.png';
import Image63 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00063.png';
import Image64 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00064.png';
import Image65 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00065.png';
import Image66 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00066.png';
import Image67 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00067.png';
import Image68 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00068.png';
import Image69 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00069.png';
import Image70 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00070.png';
import Image71 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00071.png';
import Image72 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00072.png';
import Image73 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00073.png';
import Image74 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00074.png';
import Image75 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00075.png';
import Image76 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00076.png';
import Image77 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00077.png';
import Image78 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00078.png';
import Image79 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00079.png';
import Image80 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00080.png';
import Image81 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00081.png';
import Image82 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00082.png';
import Image83 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00083.png';
import Image84 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00084.png';
import Image85 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00085.png';
import Image86 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00086.png';
import Image87 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00087.png';
import Image88 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00088.png';
import Image89 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00089.png';
import Image90 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00090.png';
import Image91 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00091.png';
import Image92 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00092.png';
import Image93 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00093.png';
import Image94 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00094.png';
import Image95 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00095.png';
import Image96 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00096.png';
import Image97 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00097.png';
import Image98 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00098.png';
import Image99 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00099.png';
import Image100 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00100.png';
import Image101 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00101.png';
import Image102 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00102.png';
import Image103 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00103.png';
import Image104 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00104.png';
import Image105 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00105.png';
import Image106 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00106.png';
import Image107 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00107.png';
import Image108 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00108.png';
import Image109 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00109.png';
import Image110 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00110.png';
import Image111 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00111.png';
import Image112 from './assets/pokemon tcg/雷(094~112)/GeneticApex_10_00112.png';
import Image113 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00113.png';
import Image114 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00114.png';
import Image115 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00115.png';
import Image116 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00116.png';
import Image117 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00117.png';
import Image118 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00118.png';
import Image119 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00119.png';
import Image120 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00120.png';
import Image121 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00121.png';
import Image122 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00122.png';
import Image123 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00123.png';
import Image124 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00124.png';
import Image125 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00125.png';
import Image126 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00126.png';
import Image127 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00127.png';
import Image128 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00128.png';
import Image129 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00129.png';
import Image130 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00130.png';
import Image131 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00131.png';
import Image132 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00132.png';
import Image133 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00133.png';
import Image134 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00134.png';
import Image135 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00135.png';
import Image136 from './assets/pokemon tcg/超(113~136)/GeneticApex_10_00136.png';
import Image137 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00137.png';
import Image138 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00138.png';
import Image139 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00139.png';
import Image140 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00140.png';
import Image141 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00141.png';
import Image142 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00142.png';
import Image143 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00143.png';
import Image144 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00144.png';
import Image145 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00145.png';
import Image146 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00146.png';
import Image147 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00147.png';
import Image148 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00148.png';
import Image149 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00149.png';
import Image150 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00150.png';
import Image151 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00151.png';
import Image152 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00152.png';
import Image153 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00153.png';
import Image154 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00154.png';
import Image155 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00155.png';
import Image156 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00156.png';
import Image157 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00157.png';
import Image158 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00158.png';
import Image159 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00159.png';
import Image160 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00160.png';
import Image161 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00161.png';
import Image162 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00162.png';
import Image163 from './assets/pokemon tcg/鬥(137~163)/GeneticApex_10_00163.png';
import Image164 from './assets/pokemon tcg/惡(164~177)/GeneticApex_10_00164.png';
import Image165 from './assets/pokemon tcg/惡(164~177)/GeneticApex_10_00165.png';
import Image166 from './assets/pokemon tcg/惡(164~177)/GeneticApex_10_00166.png';
import Image167 from './assets/pokemon tcg/惡(164~177)/GeneticApex_10_00167.png';
import Image168 from './assets/pokemon tcg/惡(164~177)/GeneticApex_10_00168.png';
import Image169 from './assets/pokemon tcg/惡(164~177)/GeneticApex_10_00169.png';
import Image170 from './assets/pokemon tcg/惡(164~177)/GeneticApex_10_00170.png';
import Image171 from './assets/pokemon tcg/惡(164~177)/GeneticApex_10_00171.png';
import Image172 from './assets/pokemon tcg/惡(164~177)/GeneticApex_10_00172.png';
import Image173 from './assets/pokemon tcg/惡(164~177)/GeneticApex_10_00173.png';
import Image174 from './assets/pokemon tcg/惡(164~177)/GeneticApex_10_00174.png';
import Image175 from './assets/pokemon tcg/惡(164~177)/GeneticApex_10_00175.png';
import Image176 from './assets/pokemon tcg/惡(164~177)/GeneticApex_10_00176.png';
import Image177 from './assets/pokemon tcg/惡(164~177)/GeneticApex_10_00177.png';

interface Image {
    src: string;
    alt: string;
    description: string;
}

const images: Image[] = [
    { src: Image1, alt: "妙蛙種子", description: "水屬性在出生後的一段時間內，牠會吸收背上種子裡儲存著的營養成長。" },
    { src: Image2, alt: "妙蛙草", description: "沐浴在陽光下越久，身體內會湧出越多力量，背上的花苞也會漸漸成長。" },
    { src: Image3, alt: "妙蛙花", description: "由於能將沐浴的陽光轉換成能量，夏天會變得更強。" },
    { src: Image4, alt: "妙蛙花EX", description: "每當張開大大的花瓣沐浴在陽光之下時，身體就會變得充滿活力。" },
    { src: Image5, alt: "綠毛蟲", description: "會從頭部的觸角釋放出強烈的氣味來趕走敵人，藉此保護自己。" },
    { src: Image6, alt: "鐵甲蛹", description: "正處於等待進化的狀態。除了變硬之外什麼都做不了，只能動也不動以免遭受攻擊。" },
    { src: Image7, alt: "巴大蝶", description: "當牠飛快地拍動翅膀，帶有劇毒的鱗粉就會隨著風向這裡飄過來。" },
    { src: Image8, alt: "獨角蟲", description: "有著非常靈敏的嗅覺。能用大大的紅鼻子聞出自己喜歡吃和不喜歡吃的葉子。" },
    { src: Image9, alt: "鐵殼蛹", description: "雖然掛在樹上幾乎一動也不動，但體內正為了進化而忙碌準備著。證據就是牠的身體會變得很熱。" },
    { src: Image10, alt: "大針蜂", description: "大針蜂非常重視自己的地盤，為了安全起見，最好不要接近牠的住處。一旦生氣就會成群結隊襲擊而來。" },
    { src: Image11, alt: "走路草", description: "別名謎行草。據說每到夜裡，牠會用２條根走上長達３００公尺的距離。" },
    { src: Image12, alt: "臭臭花", description: "從口中緩緩滲出的不是口水，而是類似花蜜的汁液，被牠用來引誘獵物接近。" },
    { src: Image13, alt: "霸王花", description: "當花苞隨著「砰！」的聲響綻放後，就會開始散播能引起過敏反應的毒花粉。" },
    { src: Image14, alt: "派拉斯", description: "控制蟲子的是一種叫做冬蟲夏草的蕈類。蟲子的意志會被忽視。" },
    { src: Image15, alt: "派拉斯特", description: "本體是背上的蘑菇，底下的蟲子幾乎已經死亡。一旦蘑菇脫落，牠就再也不會動了。" },
    { src: Image16, alt: "毛球", description: "全身上下都會滲出毒素。天黑後就會去捕捉聚在燈光處的小型蟲寶可夢。" },
    { src: Image17, alt: "摩魯蛾", description: "翅膀上附著鱗粉，每次翩翩拍動翅膀，就會散播劇毒的粉末。" },
    { src: Image18, alt: "喇叭芽", description: "只要周圍有會動的東西，不論何時都會立即作出反應，將細細的藤蔓伸往該處去。" },
    { src: Image19, alt: "口呆花", description: "葉子部分會變成刀刃斬斷對手。還會從口中吐出可融化萬物的液體。" },
    { src: Image20, alt: "大食花", description: "一旦被如花蜜般的香氣吸引到牠的口中，便是死路一條。下場是被溶解液溶化掉。" },
    { src: Image21, alt: "蛋蛋", description: "會發出只有蛋蛋才能收到的心靈感應，因此不論何時都能６隻聚集在一起。" },
    { src: Image22, alt: "椰蛋樹", description: "被稱為會走路的熱帶雨林。每個果實都有自己的臉，而且各有各的思想。" },
    { src: Image23, alt: "椰蛋樹EX", description: "聽說在極少數的情況下，當其中一顆頭掉落到地面，就會變成蛋蛋並且動起來。" },
    { src: Image24, alt: "蔓藤怪", description: "被敵人抓住時藤蔓會斷開。因為完全不會痛，所以牠會趁那個空檔逃走。藤蔓在第二天就會重新長好。" },
    { src: Image25, alt: "飛天螳螂", description: "會用鋒利的鐮刀割開草叢前進。因為動作實在太快，甚至無法用肉眼看清。" },
    { src: Image26, alt: "凱羅斯", description: "雖然很強壯，但弱點是怕冷。到了晚上就會把身體埋在樹葉堆裡睡覺。" },
    { src: Image27, alt: "木棉球", description: "使用木棉球吐出的棉花製作而成的枕頭和被褥是又輕又透氣的高級商品。" },
    { src: Image28, alt: "風妖精", description: "無論是多麼窄小的縫隙，都能像風兒般地穿過。會留下白色的毛球。" },
    { src: Image29, alt: "百合根娃娃", description: "頭上的葉子就算掉了也會立刻長回來。葉子味道很苦，但拿來嚼卻能瞬間恢復精神。" },
    { src: Image30, alt: "裙兒小姐", description: "頭上的花飾會散發出聞了就能舒緩情緒的香氣，但卻極為難以照料。" },
    { src: Image31, alt: "坐騎小羊", description: "一直到最近為止，都還有山岳的住民乘在坐騎小羊的背上，在山路上移動。" },
    { src: Image32, alt: "坐騎山羊", description: "用角一碰就可以感受到對手的心情。從５０００年前起就一直協助著人類工作至今。" },
    { src: Image33, alt: "小火龍", description: "尾巴上燃燒的火焰是小火龍生命力的象徵。在牠沒有活力時，火勢會變弱。" },
    { src: Image34, alt: "火恐龍", description: "當揮動燃燒著的尾巴時，周圍的溫度會不斷上升，讓對手陷入痛苦。" },
    { src: Image35, alt: "噴火龍", description: "當噴火龍憤怒至極時，尾巴前端就會燃起藍白色的火焰。" },
    { src: Image36, alt: "噴火龍EX", description: "用翅膀在高空翱翔。累積越多戰鬥經驗，火焰溫度就會越高。" },
    { src: Image37, alt: "六尾", description: "遭到比自己強大的對手襲擊時，會假裝受傷來迷惑對手，然後趁機逃走。" },
    { src: Image38, alt: "九尾", description: "傳聞牠的９根尾巴，每一根都蘊藏著不同的神秘力量。" },
    { src: Image39, alt: "卡蒂狗", description: "能毫不畏懼地去對抗比自己更強更大的對手。性格非常勇敢可靠。" },
    { src: Image40, alt: "風速狗", description: "根據過去的畫軸記載，牠在草原上奔馳的姿態擄獲了眾多人心。" },
    { src: Image41, alt: "風速狗EX", description: "威風凜凜的叫聲充滿威嚴，不管是誰聽到後，都會不由自主地跪倒下去。" },
    { src: Image42, alt: "小火馬", description: "剛出生的時候不擅長奔跑，但隨著和夥伴們不斷地賽跑，會逐漸鍛鍊出強健的腳力。" },
    { src: Image43, alt: "烈焰馬", description: "任由燃燒的鬃毛隨風飄揚，以每小時２４０公里的速度在大草原上自在奔馳。" },
    { src: Image44, alt: "鴨嘴火獸", description: "在火山口附近被發現。會從口中吐出火焰。體溫高達１２００度。" },
    { src: Image45, alt: "火伊布", description: "會將吸入的空氣送進體內的火囊轉化成１７００度的火焰後再吐出來" },
    { src: Image46, alt: "火焰鳥", description: "操縱火的傳說的鳥寶可夢。據說受傷時會鑽進火山口的熔岩裡，燃燒全身來治癒身上的傷口。" },
    { src: Image47, alt: "火焰鳥EX", description: "操縱火的傳說的鳥寶可夢。據說受傷時會鑽進火山口的熔岩裡，燃燒全身來治癒身上的傷口。" },
    { src: Image48, alt: "熔蟻獸", description: "從尾部的孔洞吸入空氣，燃起火焰。如果孔洞被堵住了，身體就會不舒服。" },
    { src: Image49, alt: "夜盜火蜥", description: "會挑釁獵物並引進狹窄的岩堆裡，接著噴出能造成頭暈的毒瓦斯後奪其性命。" },
    { src: Image50, alt: "焰后蜥", description: "會用妖豔的身姿誘惑被牠的毒瓦斯弄得頭昏眼花的對手，使其變成自己忠實的僕人。" },
    { src: Image51, alt: "燒火蚣", description: "靠儲存在體內的可燃氣體來發熱。熱度最高的是腹部的黃色部分。" },
    { src: Image52, alt: "焚焰蚣", description: "發熱時的體溫大約有８００度。會像鞭子那樣彎曲身體，朝著敵人彈跳過去。" },
    { src: Image53, alt: "傑尼龜", description: "出生後背部會鼓起形成堅硬的甲殼。能從口中吐出強而有力的泡沫。" },
    { src: Image54, alt: "卡咪龜", description: "蓬蓬鬆鬆的長尾巴被視為是長壽的象徵。特別深受老年人喜愛。" },
    { src: Image55, alt: "水箭龜", description: "為了讓自己能夠抵擋噴射水流時的後座力，於是會刻意增加體重。" },
    { src: Image56, alt: "水箭龜EX", description: "甲殼上有噴射口，是個會以火箭般的氣勢衝向對手的厲害傢伙。" },
    { src: Image57, alt: "可達鴨", description: "一直受到頭痛的困擾。當頭痛欲裂時，就會開始使用神奇的力量。" },
    { src: Image58, alt: "哥達鴨", description: "當牠用帶有水蹼的修長手腳全力游泳時，不知為何額頭會閃閃發光。。" },
    { src: Image59, alt: "蚊香蝌蚪", description: "腹部的漩渦是透過皮膚可以看到的部分內臟。在牠進食後可以明顯看到。" },
    { src: Image60, alt: "蚊香君", description: "２條腿很發達，雖然可以在陸地上生活，但不知為何更喜歡生活在水裡。" },
    { src: Image61, alt: "蚊香泳士", description: "擅長運用全身所有的肌肉展現躍動感十足的泳技，但不知為何卻生活在陸地上。" },
    { src: Image62, alt: "瑪瑙水母", description: "退潮之後，能見到被留在沙灘上而曬得乾巴巴的瑪瑙水母。" },
    { src: Image63, alt: "毒刺水母", description: "罕見地大量出現時，周圍海域的魚寶可夢會一隻不剩地全部消失。" },
    { src: Image64, alt: "小海獅", description: "頭上有著非常堅硬的突起部分。能夠用頭錘撞破冰山來開路前進。" },
    { src: Image65, alt: "白海獅", description: "會在水溫變低的夜晚為了尋找食物而四處游動。白天會在淺海的海底睡覺。" },
    { src: Image66, alt: "大舌貝", description: "包覆著身體的是比鑽石還硬的殼。不過殼裡面卻比想像中的還要柔軟。" },
    { src: Image67, alt: "刺甲貝", description: "刺甲貝棲息在潮流湍急的海裡，殼上的刺又大又尖銳。" },
    { src: Image68, alt: "大鉗蟹", description: "能在海邊找到牠。巨大的鉗子即使斷掉也會再長出來。" },
    { src: Image69, alt: "巨鉗蟹", description: "雖然堅硬的鉗子有著１萬馬力的力量，但尺寸太大讓牠行動遲緩。" },
    { src: Image70, alt: "墨海馬", description: "即使被體型大的對手襲擊，也能操控發達的背鰭，在水中自由自在地逃跑。" },
    { src: Image71, alt: "海刺龍", description: "是由雄性來養育孩子。育兒時會用帶有劇毒的刺趕走靠近牠們的對象。" },
    { src: Image72, alt: "角金魚", description: "會優雅地搖擺背鰭、胸鰭和尾鰭，所以被稱為水中的舞者。" },
    { src: Image73, alt: "金魚王", description: "到了秋天，體內的脂肪會因為要求偶而增加，體色也會變得非常漂亮。" },
    { src: Image74, alt: "海星星", description: "在各地都流傳著星星落到海中之後變成了海星星的民間傳說。" },
    { src: Image75, alt: "寶石海星", description: "閃耀的核心被人們稱為海中寶石。有人把它變成昂貴的飾品，在暗地裡偷偷買賣。" },
    { src: Image76, alt: "寶石海星EX", description: "會轉動像幾何圖形般的身體在水中游動。似乎一直在發射神秘的電波。" },
    { src: Image77, alt: "鯉魚王", description: "沒力量的可憐寶可夢。偶爾跳得比較高時，也只是勉強高過2公尺而已。" },
    { src: Image78, alt: "暴鯉龍", description: "據說暴鯉龍一旦現身，如果不把周圍的一切都燃燒殆盡，怒火就不會平息。" },
    { src: Image79, alt: "拉普拉斯", description: "會把人類載在背上渡過大海。據說在牠心情好的時候，還會用美妙的叫聲來唱歌。" },
    { src: Image80, alt: "水伊布", description: "雖然棲息在水邊，但由於尾巴上有像是魚的鰭，因此有的人會把牠誤認成人魚。" },
    { src: Image81, alt: "菊石獸", description: "生活在古代海洋中的寶可夢。似乎是始祖大鳥的食物，曾被發現過帶有齒痕的化石。" },
    { src: Image82, alt: "多刺菊石獸", description: "被認為是因為身上沉重的殼而滅絕的古代寶可夢。似乎是章魚桶的遠祖。" },
    { src: Image83, alt: "急凍鳥", description: "操縱冰的傳說的鳥寶可夢。因為拍動翅膀就能冷卻空氣，所以據說急凍鳥飛過的地方就會下雪。" },
    { src: Image84, alt: "急凍鳥EX", description: "操縱冰的傳說的鳥寶可夢。因為拍動翅膀就能冷卻空氣，所以據說急凍鳥飛過的地方就會下雪。" },
    { src: Image85, alt: "鴨寶寶", description: "還不擅長在空中飛翔。會觀察親鳥舞天鵝的舞蹈來學習拍動翅膀的方式。" },
    { src: Image86, alt: "舞天鵝", description: "會以群體的首領為中心，跳出整齊劃一的舞蹈來提升群體的凝聚力。" },
    { src: Image87, alt: "呱呱泡蛙", description: "看起來悠哉的樣子其實是欺瞞敵人的演技。會冷不防地用迅雷不及掩耳的速度壓制敵人。" },
    { src: Image88, alt: "呱頭蛙", description: "擅長活用地形的戰術。投擲用泡泡包著的小石頭時是百發百中" },
    { src: Image89, alt: "甲賀忍蛙", description: "即使是看不見身影的敵人，牠也能透過繞在脖子上的長～舌頭所接觸的空氣流動來察覺其動靜。" },
    { src: Image90, alt: "拳海參", description: "棲息在溫暖的淺灘。遇到敵人時，會從嘴裡吐出內臟來攻擊對方。" },
    { src: Image91, alt: "磨牙彩皮魚", description: "會用力磨牙刺激大腦，然後從頭部的突起物發射藉其產生的精神力量。" },
    { src: Image92, alt: "雪吞蟲", description: "地面的積雪是牠的主食。對新下的鬆軟白雪情有獨鍾，會朝著山頂一路吃過去。" },
    { src: Image93, alt: "雪絨蛾", description: "觸角能用來察覺大氣的流動。會如同降雪般地灑下混進了寒氣的鱗粉。" },
    { src: Image94, alt: "皮卡丘", description: "雙頰上有儲存電力的囊袋。一旦生氣就會把儲存的電力一口氣釋放出來。" },
    { src: Image95, alt: "雷丘", description: "尾巴會發揮接地線的作用把電氣導入地面，所以自己不會被電得發麻。" },
    { src: Image96, alt: "皮卡丘EX", description: "據說同一處有好幾隻的時候，那裡就會凝集起強烈的電力，還可能造成閃電落於該處。" },
    { src: Image97, alt: "小磁怪", description: "從左右兩邊的組件發出的電磁波能阻礙重力，使牠浮在空中。" },
    { src: Image98, alt: "三合一磁怪", description: "３隻小磁怪因著強烈的磁力而結合。只要靠近牠就會發生強烈的耳鳴。" },
    { src: Image99, alt: "霹靂電球", description: "靠著翻滾身體來移動，如果地面凹凸不平，就會受到衝擊而爆炸。" },
    { src: Image100, alt: "頑皮雷彈", description: "雖然儲存的電能越多，移動的速度也會變得越快，但同時也會變得更容易爆炸。" },
    { src: Image101, alt: "電擊獸", description: "身體隨時都在放電，所以只要靠近牠，頭髮就會倒豎起來。" },
    { src: Image102, alt: "雷伊布", description: "會把細胞發出的微弱電流都集中起來釋放強力的電擊。" },
    { src: Image103, alt: "閃電鳥", description: "操縱電的傳說的鳥寶可夢。平時生活在雷雲之中。被雷電擊中時體內會湧現出力量。" },
    { src: Image104, alt: "閃電鳥EX", description: "操縱電的傳說的鳥寶可夢。平時生活在雷雲之中。被雷電擊中時體內會湧現出力量。" },
    { src: Image105, alt: "斑斑馬", description: "用心跳來發電。因受驚導致心跳加快時，電壓也會跟著上升。" },
    { src: Image106, alt: "雷電斑馬", description: "性情暴躁且充滿攻擊性。興奮起來時會讓鬃毛發出黃色的光芒，釋放出電擊。" },
    { src: Image107, alt: "麻麻小魚", description: "１隻的電力雖小，但只要多隻麻麻小魚聚集在一起，威力便可媲美雷電。" },
    { src: Image108, alt: "麻麻鰻", description: "圓圓的花紋是發電器官。會先纏住對手，然後把花紋壓在對手身上後放出電流。" },
    { src: Image109, alt: "麻麻鰻魚王", description: "用手臂的力量從大海裡爬出，襲擊水邊的獵物。會瞬間將獵物拖入海中。" },
    { src: Image110, alt: "傘電蜥", description: "當牠張開頭部的褶邊用太陽光發電，就能使出威力強大的電屬性招式。" },
    { src: Image111, alt: "光電傘蜥", description: "如果展開頸傘沐浴陽光，單憑１隻光電傘蜥就能製造出大城市所需的電力。" },
    { src: Image112, alt: "啪嚓海膽", description: "消化食物時會製造出電力。５顆堅硬的牙齒能用來把海藻連根拔起來吃。" },
    { src: Image113, alt: "皮皮", description: "在滿月的夜晚，不知從何處出現的皮皮們會聚起來跳舞。沐浴到月光就會浮在空中。" },
    { src: Image114, alt: "皮可西", description: "妖精的一種。不喜歡被看見身影。據說是住在寧靜的深山裡。" },
    { src: Image115, alt: "凱西", description: "即使在睡夢中也會使出各式各樣的超能力，所以很難分辨牠是不是醒著。" },
    { src: Image116, alt: "勇基拉", description: "會盯著銀湯匙瞧，來增強並釋放精神力量。換成金湯匙似乎就沒用了。" },
    { src: Image117, alt: "胡地", description: "手中的湯匙是胡地用超能力製造出來的，是全世界獨一無二的作品。" },
    { src: Image118, alt: "呆呆獸", description: "動作遲鈍且呆頭呆腦。就算挨打也得花上５秒才會感受到疼痛。" },
    { src: Image119, alt: "呆殼獸", description: "呆呆獸去海裡捕食時，被大舌貝咬住了尾巴，於是就變成了呆殼獸。" },
    { src: Image120, alt: "鬼斯", description: "會用氣體狀的身體纏住獵物，再從皮膚緩緩地注入毒素，使對手變得虛弱。" },
    { src: Image121, alt: "鬼斯通", description: "喜歡躲在黑暗中伸出氣體構成的手去拍人的肩膀。一旦被接觸到，身體便會抖個不停。" },
    { src: Image122, alt: "耿鬼", description: "會潛進獵物的影子裡，然後靜靜地等待奪取性命的機會到來。" },
    { src: Image123, alt: "耿鬼EX", description: "附在影子裡伺機取人性命的寶可夢。要是發現腳下的影子自己在笑，最好趕緊握住護身符來驅邪。" },
    { src: Image124, alt: "催眠貘", description: "能記住所有自己吃下的夢。由於小孩的夢更加美味，因此幾乎不吃大人的夢。" },
    { src: Image125, alt: "引夢貘人", description: "據說牠和對手對到眼時，就會使出催眠術等各式各樣的超能力。" },
    { src: Image126, alt: "魔牆人偶", description: "有很多學者認為牠大大的手掌是因為要表演默劇而發達起來的。" },
    { src: Image127, alt: "迷唇姐", description: "奇異的叫聲聽起來就像是人類的語言。也有些音樂家會創作讓迷唇姐唱的曲子。" },
    { src: Image128, alt: "超夢", description: "透過操作基因製造出的寶可夢。人類的科技可以造出牠的身體，卻無法造出一顆溫柔的心。" },
    { src: Image129, alt: "超夢EX", description: "透過操作基因製造出的寶可夢。人類的科技可以造出牠的身體，卻無法造出一顆溫柔的心。" },
    { src: Image130, alt: "拉魯拉絲", description: "擁有使用頭上的紅角就可以敏銳察覺人類感情的能力。" },
    { src: Image131, alt: "奇魯莉安", description: "能夠操縱精神力量來扭曲周圍的空間，讓自己看見未來。" },
    { src: Image132, alt: "沙奈朵", description: "如果是為了保護訓練家，牠會不惜用盡自己的精神力量製造出小型黑洞。" },
    { src: Image133, alt: "滾滾蝙蝠", description: "在洞窟中，如果抬頭看到牆壁上留著心形的痕跡，就代表滾滾蝙蝠住在那裡。" },
    { src: Image134, alt: "心蝙蝠", description: "在發出極其強力的音波後會陷入疲勞，暫時無法飛行。" },
    { src: Image135, alt: "泥偶小人", description: "人們認為牠是由飄幻的古代文明科學所創造出的寶可夢。" },
    { src: Image136, alt: "泥偶巨人", description: "胸口的封印一旦解開就會不顧一切地四處大鬧，把街道全都化成瓦礫堆。" },
    { src: Image137, alt: "穿山鼠", description: "會挖掘深洞在裡頭生活。危險逼近時，會將身體蜷成一團一動也不動地忍受敵手的攻擊。" },
    { src: Image138, alt: "穿山王", description: "擅長敏捷地跑來跑去，並且用背部的尖針和銳利的爪子進行攻擊。" },
    { src: Image139, alt: "地鼠", description: "在大約１公尺深的地底挖洞前進，靠啃食樹根之類的東西生存。偶爾會到地面上露個臉。" },
    { src: Image140, alt: "三地鼠", description: "三顆頭會輪流活動，是為了讓周圍的土變得更鬆更好挖。" },
    { src: Image141, alt: "猴怪", description: "平時就算心情再怎麼好，也會因為一點芝麻小事而突然暴怒，令人害怕。" },
    { src: Image142, alt: "火爆猴", description: "光是感覺到他方的視線都會暴怒起來，然後去追和牠對到眼的傢伙。" },
    { src: Image143, alt: "腕力", description: "全身都是肌肉，雖然體型只有小孩那麼大，卻可以扔飛１００個大人。" },
    { src: Image144, alt: "豪力", description: "因為肉體非常強韌，所以戴著力量限制腰帶來控制力量。" },
    { src: Image145, alt: "怪力", description: "能夠迅速活動４隻手臂，從各種角度毫不停歇地使出拳擊或手刀。" },
    { src: Image146, alt: "怪力EX", description: "四隻手臂在肉搏戰中毫無死角。能在瞬間擊出千發以上的拳擊壓倒對手，是當之無愧的豪傑。" },
    { src: Image147, alt: "小拳石", description: "不動的時候怎麼看都是個小石頭。要是因此不小心一腳踩上去，牠是會猛揮拳頭大發雷霆的。" },
    { src: Image148, alt: "隆隆石", description: "因為走路也走不快，所以會翻滾來移動。途中有什麼牠都不在意。" },
    { src: Image149, alt: "隆隆岩", description: "身上覆蓋著像岩盤般堅硬的殼。隨著１年１次的蛻皮，身體會變得越來越大。" },
    { src: Image150, alt: "大岩蛇", description: "會一邊在地底挖掘前進，一邊吸收各種堅硬的物體，藉此讓身體變得更加結實。" },
    { src: Image151, alt: "卡拉卡拉", description: "因為思念死去的母親，會在夜裡大聲哭叫，導致自己被天敵禿鷹娜發現。" },
    { src: Image152, alt: "嘎啦嘎啦", description: "會投擲骨頭擊落禿鷹娜。人們認為牠這麼做是為了幫母親報仇。" },
    { src: Image153, alt: "嘎啦嘎啦EX", description: "會節奏性地敲響骨頭，藉此與夥伴進行聯絡。節奏有著將近５０種不同變化。" },
    { src: Image154, alt: "飛腿郎", description: "在踢技命中的瞬間，會讓腳底的肌肉變硬，使威力提升至極限。" },
    { src: Image155, alt: "快拳郎", description: "會左右使出組合拳把敵手逼入絕境，再以時速高達５００公里的直拳一口氣打倒對方。" },
    { src: Image156, alt: "獨角犀牛", description: "雖然會把半徑１０公里的範圍當作地盤，但跑著跑著似乎就會忘記自己的地盤在哪裡。" },
    { src: Image157, alt: "鑽角犀獸", description: "角的威力足以粉碎鑽石原石。會與夥伴碰撞彼此的角，藉此來打磨打亮它。" },
    { src: Image158, alt: "化石盔", description: "３億年前十分常見的寶可夢。據說在某個地區至今仍偶爾能看見活著的化石盔。" },
    { src: Image159, alt: "鐮刀盔", description: "為了在陸地上也能活動，身體開始了演化，但還來不及演化完就絕種了。" },
    { src: Image160, alt: "功夫鼬", description: "使出行雲流水般的連續攻擊，壓制並打倒敵人。會用銳利的爪子將敵人撕裂。" },
    { src: Image161, alt: "師父鼬", description: "當牠用奇妙聲音發出叫喊時是很危險的。由快到無法看清的踢腿和手刀組成的連續攻擊將接踵而來。" },
    { src: Image162, alt: "拳拳蛸", description: "會為了尋找食物而登上陸地。擁有旺盛的好奇心，不管看到什麼，都會先用觸手打一打再說。" },
    { src: Image163, alt: "八爪武師", description: "全身都是肌肉。會用觸手施展絞技，威力無與倫比。" },
    { src: Image164, alt: "阿柏蛇", description: "能夠自由地讓下顎脫臼，因此就連體型大的獵物都吞得下去，但身體會變笨重而無法動彈。" },
    { src: Image165, alt: "阿柏怪", description: "腹部的花紋看起來像一張可怕的臉。弱小的敵人只要看到這個花紋就會被嚇跑。" },
    { src: Image166, alt: "尼多蘭", description: "人們認為牠是為了保護自己嬌小的身體才演化出了威力強大的毒針。生氣時會從角的尖端噴出劇毒。" },
    { src: Image167, alt: "尼多娜", description: "和夥伴及家人在一起的時候，會收起尖刺以避免傷到彼此。一旦離開夥伴似乎就會變得不安。" },
    { src: Image168, alt: "尼多后", description: "擅長利用長滿堅硬鱗片的身體將對手撞飛的攻擊。在保護孩子的時候會發揮最強的力量。" },
    { src: Image169, alt: "尼多朗", description: "牽動耳朵的肌肉十分發達，可以隨意將耳朵轉動到任何方向。是無論多小的聲音也不會漏聽的寶可夢。" },
    { src: Image170, alt: "尼多力諾", description: "有著比鑽石還要堅硬的角。感覺到敵人的氣息時，背上的刺會一起豎起來全力迎敵。" },
    { src: Image171, alt: "尼多王", description: "粗壯的尾巴揮出的一擊有著能將堅固鐵塔折斷的驚人破壞力。一旦鬧了起來就無人能擋" },
    { src: Image172, alt: "超音蝠", description: "因為沒有眼珠所以看不見東西。會從口中發出超音波來探測周圍的狀況。" },
    { src: Image173, alt: "大嘴蝠", description: "一次能吸３００毫升的血液。有時會因為吸了太多的血，連飛都飛不起來。" },
    { src: Image174, alt: "臭泥", description: "污泥變成的寶可夢。會聚集在骯髒的地方來繁殖身體的細菌。" },
    { src: Image175, alt: "臭臭泥", description: "全身上下沾滿污泥。光是碰到牠的足跡，都會受到毒素的侵襲。" },
    { src: Image176, alt: "瓦斯彈", description: "薄薄的氣球狀身體裡儲滿了劇毒的瓦斯，所以有時會發生大爆炸。" },
    { src: Image177, alt: "雙彈瓦斯", description: "若將牠體內所含的毒瓦斯稀釋到極限，就能做出最高級的香水。" },
];

const ImageGrid: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);
    const [scrollPosition, setScrollPosition] = useState(0); // 用於記錄滾動位置
    const [currentHegiht, setCurrentHeight] = useState(window.innerHeight);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const openModal = (image: Image) => {
        setSelectedImage(image);

        // 計算懸浮視窗的 Y 坐標
        const modalPosition = window.Height / 2; // 將視口滾動到中心位置
        window.scrollTo({ top: modalPosition, behavior: 'smooth' }); // 平滑滾動到指定位置
        setScrollPosition(window.scrollY);
        setSelectedImage(image); 
        // 禁用滾動
        document.body.style.overflow = "auto";
    };

    const closeModal = () => {
        setSelectedImage(null);
        // 恢復滾動位置
        window.scrollTo(0, scrollPosition);
        // 允許滾動
        document.body.style.overflow = "auto";
    };

    return (
        <div className="home">
            <div className="page1">
                <h1>全圖鑑</h1>
                {/* 圖片網格 */}
                <div className="image-grid">
                    {images.map((image, index) => (
                        <div className="image-container" key={index}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="image-trigger"
                                onClick={() => openModal(image)}
                            />
                            <p className="image-caption">{image.alt}</p>
                        </div>
                    ))}
                </div>

                {/* 懸浮視窗 */}
                {selectedImage && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                            ref={modalRef}
                        >
                            <div className="modal-layout">
                                <img src={selectedImage.src} alt={selectedImage.alt} />
                                <div className="description">
                                    <h2>{selectedImage.alt}</h2>
                                    <p>{selectedImage.description}</p>
                                </div>
                            </div>
                            <button className="close-button" onClick={closeModal}>
                                關閉
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageGrid;