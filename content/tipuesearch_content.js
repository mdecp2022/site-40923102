var tipuesearch = {"pages": [{'title': 'About', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n \n', 'tags': '', 'url': 'About.html'}, {'title': '課程相關', 'text': '', 'tags': '', 'url': '課程相關.html'}, {'title': '評分標準', 'text': 'w3 建立 \xa0 TCExam \xa0 帳號, 進行模擬考試. \n w4 Exam1 (5%) \n w8 Exam2 (5%) \n w9 Exam3 (5%) \n w12 Exam4 (5%) \n w16 Exam5 (5%) \n w18 Exam6 (5%) \n Github Repository and Pages (70%) \n 個人簡歷與課程進度心得 \n 課程內容操作影片 ( Wink3 ) \n 期中程式專案 \n 期末程式專案 \n \n', 'tags': '', 'url': '評分標準.html'}, {'title': '每周筆記(期中)', 'text': '記錄每一週計算機程式，我的狀況記錄 \n', 'tags': '', 'url': '每周筆記(期中).html'}, {'title': 'w1', 'text': '中秋節連假 放假 \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '認識什麼是python \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '段考周，考試後即下課 \n \n', 'tags': '', 'url': 'w9.html'}, {'title': '每周筆記(期末)', 'text': '', 'tags': '', 'url': '每周筆記(期末).html'}, {'title': 'w10', 'text': '', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '運動會放假 \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '在接近十三週的尾聲才發現我的SSH是無法推送成功的，反覆嘗試及刪除仍無法連接遠端 \n', 'tags': '', 'url': 'w12.html'}, {'title': 'W13', 'text': '由於每個人推送方式不一老師教了token推送 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '\n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '\n # 這個程式用於 demo 綠色方塊沿著特定網格路徑行走 # 從 Brython 程式庫中的 browser 模組導入 document 類別, 並以簡寫設定為 doc from browser import document as doc # 從 browser 模組導入 html 類別, 主要用於建立 CANVAS 標註物件, 並插入頁面中 from browser import html # 用於定時執行特定函式 import browser.timer # 導入亂數模組 from random import random, randint \n # 利用 html 建立一個 CANVAS 標註物件, 與變數 canvas 對應 canvas = html.CANVAS(width = 600, height = 600) # 將 canvas 標註的 id 設為 "canvas" canvas.id = "canvas" # 將 document 中 id 為 "brython_div" 的標註  # 設為與 brython_div 變數對應 brython_div = doc["brython_div1"] # 將 canvas 標註放入 brython_div1 所在位置 # 頁面中原本就已經放入 <div id="brython_div"></div> 標註 brython_div <= canvas # 將頁面中 id 為 canvas 的 CANVAS 設為與 canvas 變數對應 canvas = doc["canvas"] # 將 canvas 的 2d 繪圖 context 命名為 ctx ctx = canvas.getContext("2d") \n # 建立一個 dRect() 函式 # s default 為 1, c defaul 為紅色 def dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):  ctx.lineWidth = s  ctx.strokeStyle = c  ctx.beginPath();  ctx.rect(lux, luy, w, h)  ctx.stroke();   # 建立畫直線函式 def draw_line(x1, y1, x2, y2, color="#ff0000"):  ctx.beginPath()  ctx.moveTo(x1, y1)  ctx.lineTo(x2, y2)  ctx.strokeStyle = color  ctx.stroke() \n # 建立 write Text 函式 def wText(x, y, t, s=14, c=\'#0000ff\'):  ctx.font = str(s) + "px Arial";  ctx.fillText(t, x, y) \n # 定義畫格線的函式 def grid(startx, starty, w, h, wnum, hnum, pixel=1, color="#ff0000"):  # 利用迴圈與座標增量繪圖  # 因為輸入 wnum 與 hnum 為格子數, 畫格線數則需加上 1  for i in range(wnum+1):  for j in range(hnum+1):  # 畫上下直線  yend = starty + h*(hnum)  xend = startx + w*(wnum)  x = startx + i*w  draw_line(x, starty, x, yend, color)  # 畫左右直線  y = starty + j*h  draw_line(startx, y, xend, y, color)  #wText(w/2-10, y-w/2, str(j)) \n # 從兩個座標點求中心點座標 def center(lx, ly, rx, ry):  # lx is x coord of the left up corner  # rx is the x coord of th right down corner  x = (lx + rx)/2  y = (ly + ry)/2  return x, y   # 畫出填色方塊 def draw_rect(gx, gy, gw, gh, color="lime"):  # gx is the grid coord at x direction  # gy is the grid coord at y direction  # gw is the with of the green rect  # gh is the height of the green rect  lx = origx + (gx-1)*w  ly = origy + (gy-1)*h  rx = origx + gx*w  ry = origy + gy*h  cx, cy = center(lx, ly, rx, ry)  # glx is the x coord of the left corner  # gly is the y coord of the left corner  glx = cx - gw/2  gly = cy - gh/2  # 利用設定的顏色值畫出 rectangle  ctx.fillStyle = color  ctx.fillRect(glx, gly, gw, gh) \n # 以白色覆蓋位於 (nowx, nowy)  # 且比目標方塊長寬各大於 1 pixel的方塊 def wipe():  draw_rect(nowx, nowy, 30+1, 30+1, color="white") \n # 畫出位於 (nowx, nowy) 的綠色方塊 def draw():  draw_rect(nowx, nowy, 30, 30, color="lime") \n # 繞著外圍行走 def walk():  global stepx, stepy  # 向下  if nowy < hnum and nowx == 1:  stepx = 0  stepy = 1  # 向右  elif nowx < wnum and nowy == hnum:  stepx = 1  stepy = 0  # 向上  elif nowy == hnum and nowx == wnum:  stepx = 0  stepy = -1  # 向左  elif nowx == wnum and nowy == 1:  stepx = -1  stepy = 0   # 每隔短暫時間即呼叫執行一次的函式 def game():  # 因 nowx 與 nowy 在函式外宣告  # 且在函式內改變對應值, 因此需宣告為 global  global nowx, nowy  walk()  wipe()  nowx += stepx  nowy += stepy  draw() \n # 綠色方塊起點座標與 x 及 y 方向的座標增量 nowx = 1 nowy = 1 stepx = 0 stepy = 0 # 設定格數 # width 方向格子數 wnum = 15 # height 方向格子數 hnum = 15 # 設定線寬 pixel = 1 # 設定 w 寬度 w = int(canvas.width/wnum) - pixel # 設定 h 高度 h = int(canvas.height/hnum) - pixel # 設定繪圖座標點起點位置 origx = 1 origy = 1 # 利用 grid 函式畫出格線 grid(origx, origy, w, h, wnum, hnum, pixel=1, color="black") \n \'\'\' # 利用 draw_rect 以 grid 座標畫出正方形, 內建為 lime draw_rect(3, 3, 30, 30) \n # 利用隨機亂數產生五個紅色方塊 # wnum 與 hnum 為 x 與 y 方向的格子個數 # w 與 h 方向上的方塊 pixel 數 wrect_size = 30 hrect_size = 30 # 利用 for 迴圈產生五個紅色方塊 for i in range(5):  xcoord = randint(1, wnum)  ycoord = randint(1, hnum)  draw_rect(xcoord, ycoord, wrect_size, hrect_size, color="red") \'\'\' browser.timer.set_interval(game, 100) \n \n \n', 'tags': '', 'url': 'W15.html'}, {'title': '常用網站', 'text': '推倉儲\xa0 https://replit.com/ \n https://mde.tw/content/Token%20and%20SSH.html \n https://mde.tw/ \n https://mde.tw/blog/pages/about/index.html \n 課程公佈欄\xa0 https://wcms.repl.co/get_page/%E5%85%AC%E4%BD%88%E6%AC%84 \n \n 建立之網站: \n 建立 Github 帳號: \n https://education.github.com/ \n 建立 Onedrive 帳號 \n 請各學員至 \xa0 https://www.microsoft.com/zh-tw/education/products/office , 以 @nfu 帳號申請 OneDrive 儲存權限. \n 利用 Github 建立網頁: \n https://pages.github.com/ \n \n', 'tags': '', 'url': '常用網站.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};