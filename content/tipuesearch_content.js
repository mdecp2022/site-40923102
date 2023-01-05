var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 四設計三甲 40923102 王悅禎-個人課程網站 \n \n 倉儲: https://github.com/mdecp2022/site-40923102 \n \n \n \n \n \n cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n \n', 'tags': '', 'url': 'About.html'}, {'title': '課程相關', 'text': '', 'tags': '', 'url': '課程相關.html'}, {'title': '評分標準', 'text': 'w3 建立 \xa0 TCExam \xa0 帳號, 進行模擬考試. \n w4 Exam1 (5%) \n w8 Exam2 (5%) \n w9 Exam3 (5%) \n w12 Exam4 (5%) \n w16 Exam5 (5%) \n w18 Exam6 (5%) \n Github Repository and Pages (70%) \n 個人簡歷與課程進度心得 \n 課程內容操作影片 ( Wink3 ) \n 期中程式專案 \n 期末程式專案 \n \n', 'tags': '', 'url': '評分標準.html'}, {'title': '每周筆記(期中)', 'text': '記錄每一週計算機程式，我的狀況記錄 \n', 'tags': '', 'url': '每周筆記(期中).html'}, {'title': 'w1', 'text': '中秋節連假 放假 \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '一   認識什麼是python \n \n 二   建立帳號 \n 1.github 帳號 \n 2.onedrive 帳號 \n \n 三 設定網路環境 \n 參考 \n \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '\n 網誌與課程內容回顧 \n 教學影片: \xa0 課程網誌製作與先前課程內容回顧 \n \n 倉儲與 Github Pages \n 教學影片: \xa0 課程倉儲與 Github Pages 網頁設定教學 \n \n', 'tags': '', 'url': 'w3.html'}, {'title': '從教務主機擷取學員名單', 'text': '原先配置在 Heroku 的 [nfulist] 網際程式, 由於校務主機已經排除台灣境外網段連接, 且 Heroku 也即將終止免費帳號使用. 因此只能將程式配置在系工作站室中的電腦. 程式如下, 目前以 Ubuntu 22.04 實體主機下的 Virtualbox Win10 虛擬主機運行. 採 \xa0 waitress \xa0 模式配置, 以 \xa0 nssm \xa0 安排成為系統服務. \n # 以 Flask 作為網際框架, \nfrom flask import Flask, request\n# 允許跨網站擷取資料\nfrom flask_cors import CORS\n \n# 利用 requests 取回網站中的頁面資料\nimport requests\n# 利用 beautifulsoup 解讀超文件網頁內容\nimport bs4\n# 若在近端啟動也要採用 SSL 時導入\n#import ssl\n \n\'\'\'\n2022 Fall 各班課程代號\n1a - 2b\n?semester=1111&courseno=0747&column=True \n \n?semester=1111&courseno=0761&column=True \n \n?semester=1111&courseno=0773&column=True \n \n?semester=1111&courseno=0786&column=True \n \n\'\'\'\nproxies ={\n\'http\': \'http://account:password@[2001:288:6004:17::4]:3128\',\n\'https\': \'http://account:password@[2001:288:6004:17::4]:3128\'\n}\n \napp = Flask(__name__)\nCORS(app)\n \n@app.route(\'/studlist\')\n@app.route(\'/\')\ndef studlist():\n    semester = request.args.get(\'semester\')\n    courseno = request.args.get(\'courseno\')\n    column = request.args.get(\'column\')\n \n    if semester == None:\n        semester = \'1091\'\n    if courseno == None:\n        courseno = \'0762\'\n \n    headers = {\'X-Requested-With\': \'XMLHttpRequest\'}\n \n    url = \'https://qry.nfu.edu.tw/studlist_ajax.php\'\n    post_var = {\'pselyr\': semester, \'pseqno\': courseno}\n \n    # 可透過 Proxy server 執行程式\n    #result = requests.post(url, data = post_var, headers = headers, proxies = proxies)\n    result = requests.post(url, data = post_var, headers = headers)\n    soup = bs4.BeautifulSoup(result.content, \'lxml\')\n    table = soup.find(\'table\', {\'class\': \'tbcls\'})\n    data = []\n    rows = table.find_all(\'tr\')\n    for row in rows:\n        cols = row.find_all(\'td\')\n        cols = [ele.text.strip() for ele in cols]\n        data.append([ele for ele in cols if ele]) # Get rid of empty values\n    output = ""\n    for i in data[2:]:\n        #print(i[0])\n        if column == "True":\n            output +=i[0] + "<br>"\n        else:\n            output +=i[0] + "\\n"\n \n    return output\n    #return  str(pselyr) + " + " +str(pseqno)\n \n# 即使在近端仍希望以 https 模式下執行\n#context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)\n#context.load_cert_chain(\'localhost.crt\', \'localhost.key\')\n \nif __name__ == \'__main__\':\n    app.run(host=\'127.0.0.1\', port=8080, debug=True) \n \n 1a 計算機程式修課學員名單 \xa0 (取自教務主機) \n \n \n \n', 'tags': '', 'url': '從教務主機擷取學員名單.html'}, {'title': 'w4', 'text': '\n git token 與 SSH 使用, Brython 抽點程式 \n \n 我原先參考上面影片，但是遲遲沒有把SSH建立成功，是因為config裡面修正錯誤，建立在自己的倉儲下 \n \n \n 網路設定與可攜檔案下載 \n \n 後來是用replit 這個網站才推送成功，我覺得這個網站很方便，不用隨時攜帶隨身碟就可以操作 \n 但是操作前ˊ要先去老師的下載區 下載檔案 \n \n 該如何學習 Computer Programming\xa0 \n 進入電腦輔助設計室之後: \xa0 \n \n 登入  Github \xa0 \xa0 \n 登入  Onedrive \xa0 \n 登入  Replit \xa0 \n \n \xa0 \n 進入個人的課程倉儲:  https://github.com/mdecp2022 \xa0 \xa0 \n 將 Github 倉儲連結, 作為 import Replit 的 URL, 建立一個新的 Repl 專案. \xa0 \n 中英文打字技巧必須自行練習. \xa0 \n 幾乎所有的電腦指令都源自英文單字, 因此在學習與電腦有關的過程, 千萬不要在瀏覽器中, 將英文翻譯成中文. \xa0 \n 儘量參考英文原版資料, 碰到英文單字要自行查詢線上 英英字典 與 英漢字典 , 充分了解原意. \xa0 \n 電腦開機後的所有動作與流程, 都是硬體 + 韌體 + 軟體 + 使用者操作綜合下所得到的結果, 學習 Computer Programming, 必須要提高好奇心, 探索特定操作下所牽涉的\xa0 hardware, firmware, software and users 之間的關聯. \xa0 \n 在無法對  hardware, firmware 與 software\xa0 進行修改之前, 使用者幾乎都是透過設定達到符合使用需求的目的. \xa0 \n \n 學習 Computer Programming 的目的, 即在針對  hardware, firmware 與 software\xa0 的設定之外, 自行涉入與  hardware, firmware 與 software 有關的內容建置或配置. \xa0 \n \n \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '\n w5 起除了  https://wcms.repl.co  我們自架了一台伺服器  https://wcms.cycu.org:5443  理論上兩台主機內容與  https://github.com/mdecycu/wcms  倉儲同步. \n \n', 'tags': '', 'url': 'w5.html'}, {'title': '密碼產生器', 'text': '\n 以下利用 Python 建立一個密碼產生程式, 而此連結是將程式碼以  Github Gist  格式儲存, 其結果就是  password_generator.py  程式, 而這個程式碼隸屬於 這個 Gist , 當使用者登入 Github 後, 就可以進入 Gist 區建立具備版次管理架構的程式內容, Gist 與 Repository 相同, 也是採 Git 倉儲架構, 當使用者每次對 Gist 更新或加入程式碼後, 每一個 Gist 都會產生一組代表版次號碼的字串, 使用者就可以根據此字串, 利用瀏覽器擷取到此段程式碼, 例如: 可以透過  password_generator.py  取得亂數密碼的程式, 然後在 Brython 頁面中, 再透過 URL 的變數 src 對應此 Gist 程式網址, 就可以透過 javascript 與 Brython 的整合, 將符合 Brython 規範的 Python 程式放入網頁中執行. \n password generator , \n \n \n # 導入亂數模組\nimport random\n# 導入字串模組\nimport string\n# 利用 def 關鍵字定義函式\n# 函式的輸入變數可以設定初始值\ndef password_generator(size=4, chars=string.ascii_lowercase + string.digits):\n    # 函式內以多行註解說明函式功能\n    """Generate random password\n    """\n    # 利用 return 關鍵字將所產生的亂數字串傳回\n    return \'\'.join(random.choice(chars) for _ in range(size))\n# 建立一個變數與隨後的字串對應\npass_string = "abcdefghkmnpqrstuwxyz123456789"\n# 利用重複迴圈呼叫 password_generator() 函式 10 次\nfor i in range(10):\n    print(password_generator(4, pass_string)) \n \n \n', 'tags': '', 'url': '密碼產生器.html'}, {'title': '利用SSH對倉儲內容改版', 'text': '\n \n 所謂 Secure Shell 就是利用 公開金鑰加密 , 在傳輸指令的過程對內容加密, 以保障資訊不被第三方取得, 當使用者在近端執行個人倉儲的動態網站後進行編輯改版, 並將動態網站轉為靜態網站, 希望將新的靜態網站內容送到 Github Pages\xa0 中的過程, 可以透過 SSH 協定建立一對數位鑰匙, 其公開鑰匙登錄到 Github SSH 設定區, 而私人鑰匙則放在近端電腦或隨身碟中, 當推送資料時只有與帳號下公鑰配對的私鑰擁有者, 有權限更改倉儲內容, 以下為在 Windows 操作系統採 SSH 對 Github 倉儲進行改版的設定過程. \xa0 \n 確定\xa0 start.bat 啟動時已經設定 GIT_SSH 變數, 且與 plink.exe 連結, 表示設定之後的 Git\xa0 指令, 若採 SSH 協定與 Github 溝通, 近端的金鑰加密格式採用 Putty 所提供的 ppk 格式. \xa0 \n 在 Windows 操作系統, 可以 利用 Putty 的 puttygen.exe 產生 public key (OpenSSH 格式, 可登錄到 Github) 與 private key (ppk 格式), 且將 public key 放入 Github 帳號下 settings -> SSH and GPG 設定區. \xa0 \n 將 private key 存入隨身碟或 C 槽後,\xa0 送到自己的 onedrive 區, 當設定\xa0 putty.exe session 時必須在 session 使用授權區給定私鑰儲存位置. \xa0 \n 利用 putty.exe 在電腦上設定一個 session 名稱, 且此一 session 名稱, 代表三項資訊: a. 以 SSH\xa0 協定連結到 github.com (default port 為 22),\xa0 b. 決定需不需要使用 proxy (github.com 目前僅支援 IPv4), c. ppk 格式的 private key 位置. \xa0 \n \n \xa0 \n 利用 Putty session 以 SSH 協定 git clone 遠端倉儲, 假如前述設定都正確的話, 就可以在近端改版後, 將版本推向 Github. \xa0 \n \xa0 \n SSH\xa0 從 Github git clone\xa0 語法: \xa0 \n \xa0 \n git clone\xa0 --recurse-submodules\xa0  git@putty_session_name:github_account/repository_name.git \xa0 \n \n 請特別注意\xa0 putty_session_name 與\xa0 github_account 中間 \n \n \n \n', 'tags': '', 'url': '利用SSH對倉儲內容改版.html'}, {'title': 'w6', 'text': '\n 建立抽點程式 \n # Python 的註解分為單行註解與多行, 單行註解可在字串前方放入 #\n\'\'\'多行註解則可以透過三個單引號前後標註字串或文字段落內容, \n也可以使用三個雙引號作為多行註解的標註\n\'\'\'\n# 使用 import 導入 random 模組, 隨後就可以直接引用 random 模組的方法\nimport random\ncp1a = "0747"\n# 宣告 url 變數值為字串, 此字串為取得 cp2022 1a 選課成員名單\nurl = "https://nfu.cycu.org/?semester=1111&courseno=" + cp1a + "&column=True"\n# 利用上述已經宣告的 url 變數字串值, 作為 open() 函式的輸入變數, 可以連結至該網站\n# 連接 url 所代表字串的網站後, 再利用 read() 函式讀取該網站的內容, 即可取得 cp2022 1a 的選課成員學號\n# url 所屬的網站, 乃 69 中的一台虛擬主機 8/10ff-0-1-2, 並利用 Get 從教務主機取回課程註冊成員學號\n# 由於所取回的學號以跳行符號隔開, 因此取回的學號資料行, 再利用 split() 函式, 以 \\n 跳行符號分割後\n# 所對應到 data 的資料型別將會是數列\ndata = open(url).read().split("\\n")\n# 經過檢查 data 數列, 發現最後一個 element 為空字串, 因此利用 [:-1] 去掉數列的最後一個元素, -1 代表數列最後一個元素的索引\n#print(data[:-1])\n# 設定一個變數, 與修課成員學號數列對應\nstud = data[:-1]\n# 使用 random 模組中的 shuffle() 函式, 以隨機的方式排列 stud 數列內容\nrandom.shuffle(stud)\n# 設定 num 與 5 對應, 或將 5 整數值存入 num 變數所對應的記憶體位址\nnum = 5\n# 利用 for 重複迴圈與 range() 變數, 列印出 (利用 print() 函式) 已經隨機排列次序的 stud 數列的最前面 num 個學號值\nfor i in range(num):\n    print(stud[i]) \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '(1)第六周程式討論 \n (2)網路設定與可攜程式系統_雙網路協定 \n 利用批次檔案、登錄設定檔案與 powershell 程式設定電腦輔助設計室專用 IPv6 網路協定環境設定: \n 下載 cp2022_w7_cadlab_network_setup.7z \n 下載 portable_python_3.10.6_w7.7z \n (3)stud 伺服器與 cmsimde 子模組更新 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '(1)考試測試( 考試網站 ) \n (2)填充之前未做的作業 \n (3)stud.cycu.org 上的個人動態網站 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 下載 server.py, acp, config 設定檔案 下載 可攜的 filezilla 各學員 port 分配表 \n \n \n \n cp40923102 \n 9005 \n 8005 \n \n \n \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '段考周，考試後即下課 \n \n', 'tags': '', 'url': 'w9.html'}, {'title': '每周筆記(期末)', 'text': '', 'tags': '', 'url': '每周筆記(期末).html'}, {'title': 'w10', 'text': '\n 檢討考試題目並且展示 Python 程式在 CAD 領域的應用 \n \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'Python 變數與基本語法', 'text': '\n \n \n \n \n \n \n \n \n \n \n Python 變數選定規則 \n \n \n 要避開使用關鍵字 \n \n \n 只可以以 _ 或大小寫字母開頭 \n \n \n \n \n 列出 Python 的關鍵字: \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Python 變數與基本語法.html'}, {'title': '列出 Python 關鍵字', 'text': "Text \n \n import keyword\xa0\n print(keyword.kwlist) \n \n \n \n ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'] 合計 35 個. \n \n \n 利用 for 迴圈執行變數增量或重複執行特定程序. \n \n \n \n \n \n \n", 'tags': '', 'url': '列出 Python 關鍵字.html'}, {'title': 'Python for 迴圈', 'text': 'Python \n \n for i in range(1, 10, 1):\xa0\n     print(i) \n \n \n \n 有關變數設定, 起始值使用, for 迴圈應用, 函式定義與呼叫 \n \n \n """利用 def 定義一個函式, 名稱為 addto, 輸入變數為 upto\n進入函式後定義一個變數名稱為 sum 起始值為 0\n執行重複迴圈時, 從 1 開始逐步增量 1, 直到 i 的值小於 upto+1\n期間 sum 累加上 i 的值, 每次執行迴圈都會印出 sum 的值\n"""\ndef addto(upto):\n  sum = 0\n  for i in range(1, upto+1, 1):\n    print("現在 sum 的值為: " + str(sum))\n    sum = sum + i\n    print("加上 " + str(i) + "之後, sum 的值為: " + str(sum))\n    print("="*30)\naddto(10) \n \n \xa0 \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Python for 迴圈.html'}, {'title': 'w11', 'text': '運動會放假 \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '在接近十三週的尾聲才發現我的SSH是無法推送成功的，反覆嘗試及刪除仍無法連接遠端 \n', 'tags': '', 'url': 'w12.html'}, {'title': 'W13', 'text': '由於每個人推送方式不一老師教了token推送 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '\n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '\n \n # 這個程式用於 demo 綠色方塊沿著特定網格路徑行走\n# 從 Brython 程式庫中的 browser 模組導入 document 類別, 並以簡寫設定為 doc\nfrom browser import document as doc\n# 從 browser 模組導入 html 類別, 主要用於建立 CANVAS 標註物件, 並插入頁面中\nfrom browser import html\n# 用於定時執行特定函式\nimport browser.timer\n# 導入亂數模組\nfrom random import random, randint\n\n# 利用 html 建立一個 CANVAS 標註物件, 與變數 canvas 對應\ncanvas = html.CANVAS(width = 600, height = 600)\n# 將 canvas 標註的 id 設為 "canvas"\ncanvas.id = "canvas"\n# 將 document 中 id 為 "brython_div" 的標註\n# 設為與 brython_div 變數對應\nbrython_div = doc["brython_div1"]\n# 將 canvas 標註放入 brython_div1 所在位置\n# 頁面中原本就已經放入 <div id="brython_div"></div> 標註\nbrython_div <= canvas\n# 將頁面中 id 為 canvas 的 CANVAS 設為與 canvas 變數對應\ncanvas = doc["canvas"]\n# 將 canvas 的 2d 繪圖 context 命名為 ctx\nctx = canvas.getContext("2d")\n\n# 建立一個 dRect() 函式\n# s default 為 1, c defaul 為紅色\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\nctx.lineWidth = s\nctx.strokeStyle = c\nctx.beginPath();\nctx.rect(lux, luy, w, h)\nctx.stroke();\n\n# 建立畫直線函式\ndef draw_line(x1, y1, x2, y2, color="#ff0000"):\nctx.beginPath()\nctx.moveTo(x1, y1)\nctx.lineTo(x2, y2)\nctx.strokeStyle = color\nctx.stroke()\n\n# 建立 write Text 函式\ndef wText(x, y, t, s=14, c=\'#0000ff\'):\nctx.font = str(s) + "px Arial";\nctx.fillText(t, x, y)\n\n# 定義畫格線的函式\ndef grid(startx, starty, w, h, wnum, hnum, pixel=1, color="#ff0000"):\n# 利用迴圈與座標增量繪圖\n# 因為輸入 wnum 與 hnum 為格子數, 畫格線數則需加上 1\nfor i in range(wnum+1):\nfor j in range(hnum+1):\n# 畫上下直線\nyend = starty + h*(hnum)\nxend = startx + w*(wnum)\nx = startx + i*w\ndraw_line(x, starty, x, yend, color)\n# 畫左右直線\ny = starty + j*h\ndraw_line(startx, y, xend, y, color)\n#wText(w/2-10, y-w/2, str(j))\n\n# 從兩個座標點求中心點座標\ndef center(lx, ly, rx, ry):\n# lx is x coord of the left up corner\n# rx is the x coord of th right down corner\nx = (lx + rx)/2\ny = (ly + ry)/2\nreturn x, y\n\n# 畫出填色方塊\ndef draw_rect(gx, gy, gw, gh, color="lime"):\n# gx is the grid coord at x direction\n# gy is the grid coord at y direction\n# gw is the with of the green rect\n# gh is the height of the green rect\nlx = origx + (gx-1)*w\nly = origy + (gy-1)*h\nrx = origx + gx*w\nry = origy + gy*h\ncx, cy = center(lx, ly, rx, ry)\n# glx is the x coord of the left corner\n# gly is the y coord of the left corner\nglx = cx - gw/2\ngly = cy - gh/2\n# 利用設定的顏色值畫出 rectangle\nctx.fillStyle = color\nctx.fillRect(glx, gly, gw, gh)\n\n# 以白色覆蓋位於 (nowx, nowy)\n# 且比目標方塊長寬各大於 1 pixel的方塊\ndef wipe():\ndraw_rect(nowx, nowy, 30+1, 30+1, color="white")\n\n# 畫出位於 (nowx, nowy) 的綠色方塊\ndef draw():\ndraw_rect(nowx, nowy, 30, 30, color="lime")\n\n# 繞著外圍行走\ndef walk():\nglobal stepx, stepy\n# 向下\nif nowy < hnum and nowx == 1:\nstepx = 0\nstepy = 1\n# 向右\nelif nowx < wnum and nowy == hnum:\nstepx = 1\nstepy = 0\n# 向上\nelif nowy == hnum and nowx == wnum:\nstepx = 0\nstepy = -1\n# 向左\nelif nowx == wnum and nowy == 1:\nstepx = -1\nstepy = 0\n\n# 每隔短暫時間即呼叫執行一次的函式\ndef game():\n# 因 nowx 與 nowy 在函式外宣告\n# 且在函式內改變對應值, 因此需宣告為 global\nglobal nowx, nowy\nwalk()\nwipe()\nnowx += stepx\nnowy += stepy\ndraw()\n\n# 綠色方塊起點座標與 x 及 y 方向的座標增量\nnowx = 1\nnowy = 1\nstepx = 0\nstepy = 0\n# 設定格數\n# width 方向格子數\nwnum = 15\n# height 方向格子數\nhnum = 15\n# 設定線寬\npixel = 1\n# 設定 w 寬度\nw = int(canvas.width/wnum) - pixel\n# 設定 h 高度\nh = int(canvas.height/hnum) - pixel\n# 設定繪圖座標點起點位置\norigx = 1\norigy = 1\n# 利用 grid 函式畫出格線\ngrid(origx, origy, w, h, wnum, hnum, pixel=1, color="black")\n\n\'\'\'\n# 利用 draw_rect 以 grid 座標畫出正方形, 內建為 lime\ndraw_rect(3, 3, 30, 30)\n\n# 利用隨機亂數產生五個紅色方塊\n# wnum 與 hnum 為 x 與 y 方向的格子個數\n# w 與 h 方向上的方塊 pixel 數\nwrect_size = 30\nhrect_size = 30\n# 利用 for 迴圈產生五個紅色方塊\nfor i in range(5):\nxcoord = randint(1, wnum)\nycoord = randint(1, hnum)\ndraw_rect(xcoord, ycoord, wrect_size, hrect_size, color="red")\n\'\'\'\nbrowser.timer.set_interval(game, 100) \n \n \n', 'tags': '', 'url': 'W15.html'}, {'title': '常用網站', 'text': '\n 下載專區 \n \n 推倉儲\xa0 https://replit.com/ \n https://mde.tw/content/Token%20and%20SSH.html \n https://mde.tw/ \n https://mde.tw/blog/pages/about/index.html \n 課程公佈欄\xa0 https://wcms.repl.co/get_page/%E5%85%AC%E4%BD%88%E6%AC%84 \n \n 考試網站: https://exam.cycu.org/ \n \n 建立之網站: \n 建立 Github 帳號: \n https://education.github.com/ \n 建立 Onedrive 帳號 \n 請各學員至 \xa0 https://www.microsoft.com/zh-tw/education/products/office , 以 @nfu 帳號申請 OneDrive 儲存權限. \n 利用 Github 建立網頁: \n https://pages.github.com/ \n \n \n', 'tags': '', 'url': '常用網站.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'hw5', 'text': '\n 結果 \n \n # 導入亂數模組\nimport random\n# 導入字串模組\nimport string\n# 利用 def 關鍵字定義函式\n# 函式的輸入變數可以設定初始值\ndef password_generator(size=4, chars=string.ascii_lowercase + string.digits):\n    # 函式內以多行註解說明函式功能\n    """Generate random password\n    """\n    # 利用 return 關鍵字將所產生的亂數字串傳回\n    return \'\'.join(random.choice(chars) for _ in range(size))\n# 建立一個變數與隨後的字串對應\npass_string = "abcdefghkmnpqrstuwxyz123456789"\n# 利用重複迴圈呼叫 password_generator() 函式 10 次\nfor i in range(10):\n    print(password_generator(4, pass_string)) \n \n', 'tags': '', 'url': 'hw5.html'}, {'title': 'hw6', 'text': '\n', 'tags': '', 'url': 'hw6.html'}, {'title': 'hw10', 'text': '', 'tags': '', 'url': 'hw10.html'}, {'title': 'hw11', 'text': '', 'tags': '', 'url': 'hw11.html'}, {'title': 'hw12', 'text': '', 'tags': '', 'url': 'hw12.html'}, {'title': 'hw13', 'text': '', 'tags': '', 'url': 'hw13.html'}, {'title': 'hw14', 'text': '', 'tags': '', 'url': 'hw14.html'}, {'title': 'hw15', 'text': '', 'tags': '', 'url': 'hw15.html'}, {'title': 'hw16', 'text': '', 'tags': '', 'url': 'hw16.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};