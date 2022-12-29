var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 四設計三甲 40923102 王悅禎-個人課程網站 \n \n 倉儲: https://github.com/mdecp2022/site-40923102 \n \n \n \n \n \n cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n \n', 'tags': '', 'url': 'About.html'}, {'title': '課程相關', 'text': '', 'tags': '', 'url': '課程相關.html'}, {'title': '評分標準', 'text': 'w3 建立 \xa0 TCExam \xa0 帳號, 進行模擬考試. \n w4 Exam1 (5%) \n w8 Exam2 (5%) \n w9 Exam3 (5%) \n w12 Exam4 (5%) \n w16 Exam5 (5%) \n w18 Exam6 (5%) \n Github Repository and Pages (70%) \n 個人簡歷與課程進度心得 \n 課程內容操作影片 ( Wink3 ) \n 期中程式專案 \n 期末程式專案 \n \n', 'tags': '', 'url': '評分標準.html'}, {'title': '每周筆記(期中)', 'text': '記錄每一週計算機程式，我的狀況記錄 \n', 'tags': '', 'url': '每周筆記(期中).html'}, {'title': 'w1', 'text': '中秋節連假 放假 \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '一   認識什麼是python \n \n 二   建立帳號 \n 1.github 帳號 \n 2.onedrive 帳號 \n \n 三 設定網路環境 \n 參考 \n \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '段考周，考試後即下課 \n \n', 'tags': '', 'url': 'w9.html'}, {'title': '每周筆記(期末)', 'text': '', 'tags': '', 'url': '每周筆記(期末).html'}, {'title': 'w10', 'text': '', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '運動會放假 \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '在接近十三週的尾聲才發現我的SSH是無法推送成功的，反覆嘗試及刪除仍無法連接遠端 \n', 'tags': '', 'url': 'w12.html'}, {'title': 'W13', 'text': '由於每個人推送方式不一老師教了token推送 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '\n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '\n \n # 這個程式用於 demo 綠色方塊沿著特定網格路徑行走\n# 從 Brython 程式庫中的 browser 模組導入 document 類別, 並以簡寫設定為 doc\nfrom browser import document as doc\n# 從 browser 模組導入 html 類別, 主要用於建立 CANVAS 標註物件, 並插入頁面中\nfrom browser import html\n# 用於定時執行特定函式\nimport browser.timer\n# 導入亂數模組\nfrom random import random, randint\n\n# 利用 html 建立一個 CANVAS 標註物件, 與變數 canvas 對應\ncanvas = html.CANVAS(width = 600, height = 600)\n# 將 canvas 標註的 id 設為 "canvas"\ncanvas.id = "canvas"\n# 將 document 中 id 為 "brython_div" 的標註\n# 設為與 brython_div 變數對應\nbrython_div = doc["brython_div1"]\n# 將 canvas 標註放入 brython_div1 所在位置\n# 頁面中原本就已經放入 <div id="brython_div"></div> 標註\nbrython_div <= canvas\n# 將頁面中 id 為 canvas 的 CANVAS 設為與 canvas 變數對應\ncanvas = doc["canvas"]\n# 將 canvas 的 2d 繪圖 context 命名為 ctx\nctx = canvas.getContext("2d")\n\n# 建立一個 dRect() 函式\n# s default 為 1, c defaul 為紅色\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\nctx.lineWidth = s\nctx.strokeStyle = c\nctx.beginPath();\nctx.rect(lux, luy, w, h)\nctx.stroke();\n\n# 建立畫直線函式\ndef draw_line(x1, y1, x2, y2, color="#ff0000"):\nctx.beginPath()\nctx.moveTo(x1, y1)\nctx.lineTo(x2, y2)\nctx.strokeStyle = color\nctx.stroke()\n\n# 建立 write Text 函式\ndef wText(x, y, t, s=14, c=\'#0000ff\'):\nctx.font = str(s) + "px Arial";\nctx.fillText(t, x, y)\n\n# 定義畫格線的函式\ndef grid(startx, starty, w, h, wnum, hnum, pixel=1, color="#ff0000"):\n# 利用迴圈與座標增量繪圖\n# 因為輸入 wnum 與 hnum 為格子數, 畫格線數則需加上 1\nfor i in range(wnum+1):\nfor j in range(hnum+1):\n# 畫上下直線\nyend = starty + h*(hnum)\nxend = startx + w*(wnum)\nx = startx + i*w\ndraw_line(x, starty, x, yend, color)\n# 畫左右直線\ny = starty + j*h\ndraw_line(startx, y, xend, y, color)\n#wText(w/2-10, y-w/2, str(j))\n\n# 從兩個座標點求中心點座標\ndef center(lx, ly, rx, ry):\n# lx is x coord of the left up corner\n# rx is the x coord of th right down corner\nx = (lx + rx)/2\ny = (ly + ry)/2\nreturn x, y\n\n# 畫出填色方塊\ndef draw_rect(gx, gy, gw, gh, color="lime"):\n# gx is the grid coord at x direction\n# gy is the grid coord at y direction\n# gw is the with of the green rect\n# gh is the height of the green rect\nlx = origx + (gx-1)*w\nly = origy + (gy-1)*h\nrx = origx + gx*w\nry = origy + gy*h\ncx, cy = center(lx, ly, rx, ry)\n# glx is the x coord of the left corner\n# gly is the y coord of the left corner\nglx = cx - gw/2\ngly = cy - gh/2\n# 利用設定的顏色值畫出 rectangle\nctx.fillStyle = color\nctx.fillRect(glx, gly, gw, gh)\n\n# 以白色覆蓋位於 (nowx, nowy)\n# 且比目標方塊長寬各大於 1 pixel的方塊\ndef wipe():\ndraw_rect(nowx, nowy, 30+1, 30+1, color="white")\n\n# 畫出位於 (nowx, nowy) 的綠色方塊\ndef draw():\ndraw_rect(nowx, nowy, 30, 30, color="lime")\n\n# 繞著外圍行走\ndef walk():\nglobal stepx, stepy\n# 向下\nif nowy < hnum and nowx == 1:\nstepx = 0\nstepy = 1\n# 向右\nelif nowx < wnum and nowy == hnum:\nstepx = 1\nstepy = 0\n# 向上\nelif nowy == hnum and nowx == wnum:\nstepx = 0\nstepy = -1\n# 向左\nelif nowx == wnum and nowy == 1:\nstepx = -1\nstepy = 0\n\n# 每隔短暫時間即呼叫執行一次的函式\ndef game():\n# 因 nowx 與 nowy 在函式外宣告\n# 且在函式內改變對應值, 因此需宣告為 global\nglobal nowx, nowy\nwalk()\nwipe()\nnowx += stepx\nnowy += stepy\ndraw()\n\n# 綠色方塊起點座標與 x 及 y 方向的座標增量\nnowx = 1\nnowy = 1\nstepx = 0\nstepy = 0\n# 設定格數\n# width 方向格子數\nwnum = 15\n# height 方向格子數\nhnum = 15\n# 設定線寬\npixel = 1\n# 設定 w 寬度\nw = int(canvas.width/wnum) - pixel\n# 設定 h 高度\nh = int(canvas.height/hnum) - pixel\n# 設定繪圖座標點起點位置\norigx = 1\norigy = 1\n# 利用 grid 函式畫出格線\ngrid(origx, origy, w, h, wnum, hnum, pixel=1, color="black")\n\n\'\'\'\n# 利用 draw_rect 以 grid 座標畫出正方形, 內建為 lime\ndraw_rect(3, 3, 30, 30)\n\n# 利用隨機亂數產生五個紅色方塊\n# wnum 與 hnum 為 x 與 y 方向的格子個數\n# w 與 h 方向上的方塊 pixel 數\nwrect_size = 30\nhrect_size = 30\n# 利用 for 迴圈產生五個紅色方塊\nfor i in range(5):\nxcoord = randint(1, wnum)\nycoord = randint(1, hnum)\ndraw_rect(xcoord, ycoord, wrect_size, hrect_size, color="red")\n\'\'\'\nbrowser.timer.set_interval(game, 100) \n \n \n', 'tags': '', 'url': 'W15.html'}, {'title': '常用網站', 'text': '推倉儲\xa0 https://replit.com/ \n https://mde.tw/content/Token%20and%20SSH.html \n https://mde.tw/ \n https://mde.tw/blog/pages/about/index.html \n 課程公佈欄\xa0 https://wcms.repl.co/get_page/%E5%85%AC%E4%BD%88%E6%AC%84 \n \n 建立之網站: \n 建立 Github 帳號: \n https://education.github.com/ \n 建立 Onedrive 帳號 \n 請各學員至 \xa0 https://www.microsoft.com/zh-tw/education/products/office , 以 @nfu 帳號申請 OneDrive 儲存權限. \n 利用 Github 建立網頁: \n https://pages.github.com/ \n \n \n', 'tags': '', 'url': '常用網站.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};