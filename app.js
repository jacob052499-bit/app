// ====== Multi-Language i18n Dictionary ======
const i18n = {
    zh: {
        header_greeting: "尊榮交易員，", live_feed: "專線即時報價",
        equity_title: "帳戶總資產 (Equity)", float_pnl: "浮動綜合損益", btn_create_pos: "建立倉位",
        action_charts: "走勢大盤", action_risk: "風控", action_pos: "倉位", action_journal: "交易日誌",
        title_pos: "尊榮持倉庫存", btn_create_pos2: "建立新倉位紀錄", pos_info: "由於採用官方最高規報價源，全球資產盈虧請點擊小筆圖示手動填入最新市價，確保最高精確度。",
        title_charts: "旗艦專屬全圖表",
        title_journal: "交易日誌", btn_new_journal: "新增紀錄", filter_all: "全部 (All)", filter_7d: "近 7 天", filter_30d: "近 30 天", filter_4m: "近 4 個月", filter_1y: "近 1 年", btn_export: "匯出 CSV",
        title_risk: "實盤風控中心", calc_lot_title: "高階基準與手數換算", calc_lot_desc: "系統將自動獲取最新市價，進行跨品種精密換算。",
        calc_from: "換算基準物", calc_to: "換算對象物", calc_live_price: "實時報價", calc_live_price2: "實時報價", calc_qty: "持有數量", calc_res: "換算結果：",
        risk_title: "頂級機構風控算盤", risk_capital: "實盤總本金", risk_limit: "單筆極限風險", risk_sl_amt: "強制停損額",
        risk_entry: "進場價 (Entry)", risk_sl: "止損價 (SL)", risk_lev: "部位倍數 (預計開單槓桿)", btn_calc_risk: "核算名義價值與入金",
        risk_dir: "交易方向", risk_res_notional: "總名義價值 (Notional)", risk_res_margin: "凍結保證金 (Margin)", risk_res_lev: "真實帳戶槓桿", risk_warn: "警告：您的本金無法支撐此級別的風險保證金，請提高開單槓桿以降低佔用資金。",
        title_set: "VIP 設定中心", btn_login: "綁定高階會籍", set_alloc: "資產配置參數", set_lang: "應用語言 (Language)", set_bal: "總淨值 (USDT)", set_risk: "單次最大容忍損耗 (%)", btn_save_set: "儲存高階參數",
        nav_home: "大廳", nav_pos: "倉位", nav_risk: "風控", nav_set: "設定",
        m_j_title: "撰寫交易日誌", m_j_date: "開單日期", m_j_sym: "交易標的", m_j_entry: "均價 (Entry)", m_j_tp: "止盈價 (TP)", m_j_sl: "止損價 (SL)", m_j_tags: "策略標記", m_j_tag_tp: "最終止盈", m_j_tag_hedge: "成功套保", m_j_res: "開局原由 / 覆盤心得", m_j_img: "上傳快照 (Charts)", m_btn_cancel: "捨棄", m_btn_save: "封存日誌",
        m_p_title: "登錄新倉位紀錄", m_p_sym: "輸入資產代號", m_p_dir: "操盤走向", m_p_entry: "進場均價", m_p_qty: "籌碼量 (手/張/顆)", m_p_cur: "當前市價紀錄", m_p_btn_submit: "立契建倉",
        js_long: "多頭 (Long)", js_short: "空頭 (Short)", js_eqqty: "等效為",
        equity_real_title: "實盤總資產 (Real)", equity_prop_title: "機構資產 (PropFirm)", atr_title: "ATR 進階加倉計算器", btn_calc_atr: "計算加倉規劃", atr_res_single: "單次加倉", atr_res_total: "總加倉計算",
        stat_winrate: "綜合勝率", stat_pnl: "區間總盈虧", stat_return: "區間報酬率",
        acc_all: "全部帳戶", acc_real: "實盤 (Real)", acc_prop: "機構 (PropFirm)", set_prop_bal: "PropFirm 總淨值 (USDT)",
        m_j_acc: "帳戶歸屬", m_j_pnl: "實現盈虧 (PnL)", m_j_amt: "下單金額 (Amt)", m_j_lev: "槓桿倍數 (Lev)", m_j_tag_sl: "止損出場", cal_title: "盈虧日曆 (月)"
    },
    en: {
        header_greeting: "VIP Trader,", live_feed: "Live Direct Feed",
        equity_title: "Total Equity", float_pnl: "Floating P&L", btn_create_pos: "Create Position",
        action_charts: "Charts", action_risk: "Risk", action_pos: "Positions", action_journal: "Journal",
        title_pos: "Active Positions", btn_create_pos2: "Add New Position", pos_info: "Using high-tier data feeds. Please manually update current price via the edit icon to ensure extreme PnL accuracy.",
        title_charts: "Advanced Full Chart",
        title_journal: "Trading Journal", btn_new_journal: "Add Entry", filter_all: "All", filter_7d: "Last 7D", filter_30d: "Last 30D", filter_4m: "Last 4M", filter_1y: "Last 1Y", btn_export: "Export CSV",
        title_risk: "Risk Management", calc_lot_title: "Lot Size Converter", calc_lot_desc: "System auto-fetches live prices for precise cross-asset sizing.",
        calc_from: "Base Asset", calc_to: "Target Asset", calc_live_price: "Live Price", calc_live_price2: "Live Price", calc_qty: "Qty Holding", calc_res: "Equivalent:",
        risk_title: "Prop Firm Calculator", risk_capital: "Total Capital", risk_limit: "Risk per Trade", risk_sl_amt: "Loss Limit Amount",
        risk_entry: "Entry Price", risk_sl: "Stop Loss", risk_lev: "Position Leverage", btn_calc_risk: "Calculate Margin",
        risk_dir: "Trade Direction", risk_res_notional: "Notional Value", risk_res_margin: "Required Margin", risk_res_lev: "Real Leverage", risk_warn: "WARNING: Your account balance cannot support this margin requirement. Increase your leverage to reduce margin block.",
        title_set: "Settings", btn_login: "Link Google Acc", set_alloc: "Capital Allocation", set_lang: "App Language", set_bal: "Total Equity (USDT)", set_risk: "Risk Tolerance (%)", btn_save_set: "Save Parameters",
        nav_home: "Lobby", nav_pos: "Positions", nav_risk: "Risk", nav_set: "Configure",
        m_j_title: "Draft Journal", m_j_date: "Date", m_j_sym: "Symbol", m_j_entry: "Entry", m_j_tp: "Take Profit", m_j_sl: "Stop Loss", m_j_tags: "Strategy Tags", m_j_tag_tp: "Hit TP", m_j_tag_hedge: "Hedged", m_j_res: "Reason / Review", m_j_img: "Attach Chart", m_btn_cancel: "Discard", m_btn_save: "Archive",
        m_p_title: "Log New Position", m_p_sym: "Symbol", m_p_dir: "Direction", m_p_entry: "Entry", m_p_qty: "Size/Qty", m_p_cur: "Current Price", m_p_btn_submit: "Open Contract",
        js_long: "Long", js_short: "Short", js_eqqty: "Equivalency",
        equity_real_title: "Real Equity", equity_prop_title: "PropFirm Equity", atr_title: "ATR Add Pos Calculator", btn_calc_atr: "Calculate Additions", atr_res_single: "Single Add", atr_res_total: "Total Add",
        stat_winrate: "Win Rate", stat_pnl: "Total PnL", stat_return: "Return %",
        acc_all: "All Accounts", acc_real: "Real Account", acc_prop: "Prop Firm", set_prop_bal: "PropFirm Equity (USDT)",
        m_j_acc: "Account Type", m_j_pnl: "Realized PnL", m_j_amt: "Position Size", m_j_lev: "Leverage", m_j_tag_sl: "Hit SL", cal_title: "PnL Calendar"
    }
};

// ====== State Management ======
let userState = {
    balance: 10000,
    propBalance: 100000,
    riskPct: 1,
    isLoggedIn: false,
    username: "VIP 訪客",
    avatar: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=200&auto=format&fit=crop",
    positions: [],     // {id, symbol, dir, entry, qty, currentPrice}
    journals: [],      // {id, date, symbol, accountType, entry, pnl, amount, leverage, tp, sl, hitTp, hedged, reason, img}
    lang: "zh"
};

function formatMoney(num) {
    if(!num) return '0.00';
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function saveState() {
    localStorage.setItem('vertex_state_v5', JSON.stringify(userState));
}

function loadSettings() {
    const saved = localStorage.getItem('vertex_state_v5');
    if(saved) {
        try {
            userState = { ...userState, ...JSON.parse(saved) };
        } catch(e) {}
    }
    if(!userState.journals) userState.journals = [];
    if(!userState.positions) userState.positions = [];
    if(!userState.lang) userState.lang = 'zh';
    
    if(!userState.propBalance) userState.propBalance = 100000;
    
    document.getElementById('settingBalance').value = userState.balance;
    document.getElementById('settingPropBalance').value = userState.propBalance;
    document.getElementById('settingRiskPct').value = userState.riskPct;
    
    updateProfileUI();
    
    const langSelect = document.getElementById('app-language');
    if(langSelect) langSelect.value = userState.lang;
    changeLanguage(userState.lang, false);
}

function changeLanguage(lang, doSave = true) {
    userState.lang = lang;
    if(doSave) saveState();
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(i18n[lang] && i18n[lang][key]) {
            el.innerHTML = i18n[lang][key];
        }
    });
    
    // Auto re-render lists if they exist to apply translations
    if(typeof renderPortfolio === 'function') renderPortfolio();
    if(typeof renderJournalList === 'function') renderJournalList();
}

function saveSettings() {
    userState.balance = parseFloat(document.getElementById('settingBalance').value) || 10000;
    userState.propBalance = parseFloat(document.getElementById('settingPropBalance').value) || 100000;
    userState.riskPct = parseFloat(document.getElementById('settingRiskPct').value) || 1;
    saveState();
    
    updatePropRiskUI();
    renderPortfolio();
    
    const msg = userState.lang === 'en' ? "Settings Saved Successfully!" : "高階參數已儲存！";
    alert(msg);
}

function updateProfileUI() {
    document.getElementById('header-username').innerText = userState.username;
    document.getElementById('header-avatar').querySelector('img').src = userState.avatar;
    document.getElementById('profile-username').innerText = userState.username;
    document.getElementById('profile-avatar').src = userState.avatar;
    
    if(userState.isLoggedIn) {
        document.getElementById('google-login-box').style.display = 'none';
        const msg = userState.lang === 'en' ? "Auth Passed," : "交易權限已開通，";
        document.querySelector('#header-avatar + .greeting .greeting-text').innerText = msg;
    }
}

function simulateGoogleLogin() {
    const msg = userState.lang === 'en' ? "Enter your Google Display Name:" : "請輸入您的 Google 顯示名稱";
    const name = prompt(msg);
    if(name && name.trim() !== "") {
        userState.username = name;
        userState.avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2563eb&color=d4af37&rounded=true`;
        userState.isLoggedIn = true;
        saveState();
        updateProfileUI();
        const successStr = userState.lang === 'en' ? "VIP Bound Successfully!" : "尊榮會籍綁定成功！";
        alert(successStr);
    }
}

// ====== Custom Positions (Portfolio) ======
function renderPortfolio() {
    const list = document.getElementById('custom-positions-list');
    if(!list) return;
    
    let totalValue = userState.balance;
    let totalPnl = 0;
    let html = '';
    
    if(userState.positions.length === 0) {
        html = `<div style="text-align:center; padding: 20px; color: var(--text-muted);">目前無庫存，點擊上方按鈕新增。</div>`;
    } else {
        userState.positions.forEach(pos => {
            let diff = pos.currentPrice - pos.entry;
            if(pos.dir === -1) diff = -diff;
            
            // For manual positions without explicit lot size DB, we assume Notional is straightforward (qty * price)
            // If they input CFDs they can adjust qty accordingly.
            let pnl = diff * pos.qty;
            let pnlClass = pnl >= 0 ? 'positive' : 'negative';
            let pnlStr = pnl >= 0 ? `+${formatMoney(pnl)}` : formatMoney(pnl);
            
            totalPnl += pnl;
            totalValue += pnl;
            
            html += `
                <div class="stock-item card">
                    <div style="flex:1;">
                        <h4 style="margin-bottom: 6px; font-size: 1.1rem;">${pos.symbol.toUpperCase()} <span style="font-size:0.7rem; padding: 2px 6px; border-radius: 4px; background: ${pos.dir===1?'var(--success-color)':'var(--danger-color)'}; color:white;">${pos.dir===1?'Long':'Short'}</span></h4>
                        <div style="color:var(--text-muted); font-size: 0.8rem; margin-bottom: 4px;">建倉均價: $${pos.entry} | 數量: ${pos.qty}</div>
                        <div style="color:var(--text-muted); font-size: 0.8rem;">紀錄市價: $${pos.currentPrice} <i class="fa-solid fa-pen" style="cursor:pointer; margin-left:5px;" onclick="updatePositionPrice('${pos.id}')" title="更新報價"></i></div>
                    </div>
                    <div class="stock-price" style="display:flex; flex-direction:column; justify-content:center; align-items:flex-end;">
                        <div class="${pnlClass}" style="font-size: 1.1rem; font-weight: 600;">${pnlStr} USDT</div>
                        <button onclick="deletePosition('${pos.id}')" style="margin-top: 8px; color: var(--danger-color); background: none; border:1px solid var(--danger-color); padding: 4px 10px; border-radius:12px; font-size: 0.75rem; cursor: pointer;">平截 / 刪除</button>
                    </div>
                </div>
            `;
        });
    }
    
    list.innerHTML = html;
    
    const equityElem = document.getElementById('home-balance');
    const pnlElem = document.getElementById('home-floating-pnl');
    
    if(equityElem) {
        equityElem.innerText = `$ ${formatMoney(totalValue)}`;
        if(pnlElem && userState.balance > 0) {
            const MathAbsPnl = Math.abs(totalPnl);
            const pct = (totalPnl / userState.balance) * 100;
            pnlElem.className = `pnl ${totalPnl >= 0 ? 'positive' : 'negative'}`;
            pnlElem.innerHTML = `<i class="fa-solid fa-arrow-trend-${totalPnl >= 0 ? 'up' : 'down'}"></i><span>${totalPnl >= 0 ? '+' : '-'}$${formatMoney(MathAbsPnl)} (${totalPnl >= 0 ? '+' : ''}${pct.toFixed(2)}%)</span>`;
        }
    }

    const propBalanceElem = document.getElementById('home-prop-balance');
    const propPnlElem = document.getElementById('home-prop-pnl');
    if(propBalanceElem) {
        // Calculate PropFirm PnL from journals (since positions are mainly general/real in original flow)
        let propPnl = 0;
        userState.journals.forEach(j => {
            if(j.accountType === 'prop' && j.pnl) propPnl += parseFloat(j.pnl);
        });
        const currentPropEq = userState.propBalance + propPnl;
        propBalanceElem.innerText = `$ ${formatMoney(currentPropEq)}`;
        
        if(propPnlElem && userState.propBalance > 0) {
            const pct = (propPnl / userState.propBalance) * 100;
            const MathAbsPnl = Math.abs(propPnl);
            propPnlElem.className = `pnl ${propPnl >= 0 ? 'positive' : 'negative'}`;
            propPnlElem.innerHTML = `<i class="fa-solid fa-arrow-trend-${propPnl >= 0 ? 'up' : 'down'}"></i><span>${propPnl >= 0 ? '+' : '-'}$${formatMoney(MathAbsPnl)} (${propPnl >= 0 ? '+' : ''}${pct.toFixed(2)}%)</span>`;
        }
    }
}

function openAddPositionModal() {
    document.getElementById('pos-symbol').value = '';
    document.getElementById('pos-entry').value = '';
    document.getElementById('pos-qty').value = '';
    document.getElementById('add-position-modal').style.display = 'flex';
}

async function addPosition() {
    const sym = document.getElementById('pos-symbol').value.trim();
    const dir = parseInt(document.getElementById('pos-dir').value);
    const entry = parseFloat(document.getElementById('pos-entry').value);
    const qty = parseFloat(document.getElementById('pos-qty').value);
    
    if(!sym || !entry || !qty) return alert('請輸入完整數值與標的名稱');
    
    let curr = await fetchRealPrice(sym.toUpperCase(), entry);
    
    userState.positions.push({ id: Date.now().toString(), symbol: sym.toUpperCase(), dir: dir, entry: entry, qty: qty, currentPrice: curr });
    saveState();
    document.getElementById('add-position-modal').style.display = 'none';
    renderPortfolio();
}

function updatePositionPrice(id) {
    const pos = userState.positions.find(p => p.id === id);
    if(!pos) return;
    const newPrice = prompt(`請輸入 ${pos.symbol} 的最新市價 (以重新計算浮動盈虧)`, pos.currentPrice);
    if(newPrice !== null && !isNaN(parseFloat(newPrice))) {
        pos.currentPrice = parseFloat(newPrice);
        saveState();
        renderPortfolio();
    }
}

function deletePosition(id) {
    if(confirm('確定要刪除或平倉此筆紀錄嗎？')) {
        userState.positions = userState.positions.filter(p => p.id !== id);
        saveState();
        renderPortfolio();
    }
}

function renderJournalList() {
    renderJournalStats();
    renderJournal();
    renderCalendar();
}

let currentCalDate = new Date();

function changeCalendarMonth(diff) {
    currentCalDate.setMonth(currentCalDate.getMonth() + diff);
    renderCalendar();
}

function renderCalendar() {
    const grid = document.getElementById('pnl-calendar-grid');
    if(!grid) return;
    
    let html = '';
    const year = currentCalDate.getFullYear();
    const month = currentCalDate.getMonth();
    
    document.getElementById('cal-month-display').innerText = `${year} 年 ${month + 1} 月`;
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const accFilter = document.getElementById('j-acc-filter') ? document.getElementById('j-acc-filter').value : 'all';
    
    const dailyPnl = {};
    userState.journals.forEach(j => {
        if(accFilter !== 'all' && j.accountType !== accFilter) return;
        if(j.pnl && !isNaN(parseFloat(j.pnl))) {
            const dateStr = j.date; // YYYY-MM-DD
            if(!dailyPnl[dateStr]) dailyPnl[dateStr] = 0;
            dailyPnl[dateStr] += parseFloat(j.pnl);
        }
    });
    
    for(let i=0; i<firstDay; i++) {
        html += `<div></div>`;
    }
    
    const todayStr = new Date().toISOString().slice(0,10);
    
    for(let d=1; d<=daysInMonth; d++) {
        const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        const pnl = dailyPnl[dateStr] || 0;
        let pnlHtml = '';
        let bg = 'rgba(255,255,255,0.03)';
        let border = '1px solid transparent';
        if(pnl > 0) { 
            pnlHtml = `<div style="color:var(--success-color); font-size:0.75rem; margin-top:2px; font-weight:600;">+${pnl.toFixed(0)}</div>`; 
            bg = 'rgba(0, 209, 102, 0.1)';
            border = '1px solid rgba(0, 209, 102, 0.3)';
        } else if(pnl < 0) {
            pnlHtml = `<div style="color:var(--danger-color); font-size:0.75rem; margin-top:2px; font-weight:600;">${pnl.toFixed(0)}</div>`;
            bg = 'rgba(255, 59, 48, 0.1)';
            border = '1px solid rgba(255, 59, 48, 0.3)';
        }
        
        const isToday = (dateStr === todayStr) ? 'border: 1px solid var(--primary-color);' : '';
        
        html += `
            <div style="background:${bg}; border:${isToday ? isToday : border}; border-radius:6px; padding:6px 2px; min-height:50px; display:flex; flex-direction:column; justify-content:center;">
                <div style="font-size:0.8rem; font-weight:600;">${d}</div>
                ${pnlHtml}
            </div>
        `;
    }
    grid.innerHTML = html;
}

function renderJournalStats() {
    const accFilter = document.getElementById('j-acc-filter') ? document.getElementById('j-acc-filter').value : 'all';
    const timeFilter = document.getElementById('j-filter') ? document.getElementById('j-filter').value : 'all';
    
    let filtered = userState.journals.filter(j => {
        if(accFilter !== 'all' && j.accountType !== accFilter) return false;
        if(timeFilter !== 'all') {
            const days = parseInt(timeFilter);
            const limit = new Date();
            limit.setDate(limit.getDate() - days);
            if(new Date(j.date) < limit) return false;
        }
        return true;
    });
    
    let wins = 0;
    let totalPnl = 0;
    
    filtered.forEach(j => {
        let p = parseFloat(j.pnl);
        if(!isNaN(p)) {
            totalPnl += p;
            if(p > 0) wins++;
        }
    });
    
    const winRate = filtered.length > 0 ? ((wins / filtered.length) * 100).toFixed(1) : 0;
    const baseTarget = accFilter === 'prop' ? userState.propBalance : userState.balance;
    const returnPct = baseTarget > 0 ? ((totalPnl / baseTarget) * 100).toFixed(2) : 0;
    
    document.getElementById('stat-winrate').innerText = `${winRate}%`;
    document.getElementById('stat-pnl').innerText = `${totalPnl >= 0 ? '+' : ''}$ ${formatMoney(Math.abs(totalPnl))}`;
    document.getElementById('stat-pnl').style.color = totalPnl >= 0 ? "var(--success-color)" : "var(--danger-color)";
    document.getElementById('stat-return').innerText = `${returnPct >= 0 ? '+' : ''}${returnPct}%`;
    document.getElementById('stat-return').style.color = returnPct >= 0 ? "var(--success-color)" : "var(--danger-color)";
}

function renderJournal() {
    const list = document.getElementById('journal-list');
    if(!list) return;

    if(!userState.journals || userState.journals.length === 0) {
        list.innerHTML = `<div style="text-align:center; padding: 20px; color: var(--text-muted);">目前無日誌紀錄，點擊上方按鈕新增。</div>`;
        return;
    }
    
    const accFilter = document.getElementById('j-acc-filter') ? document.getElementById('j-acc-filter').value : 'all';
    const timeFilter = document.getElementById('j-filter') ? document.getElementById('j-filter').value : 'all';
    
    let filtered = userState.journals.filter(j => {
        if(accFilter !== 'all' && j.accountType !== accFilter) return false;
        if(timeFilter !== 'all') {
            const days = parseInt(timeFilter);
            const limit = new Date();
            limit.setDate(limit.getDate() - days);
            if(new Date(j.date) < limit) return false;
        }
        return true;
    });

    const sorted = [...filtered].sort((a,b) => b.id - a.id);
    list.innerHTML = sorted.map(j => {
        let badges = '';
        if(j.hitTp) badges += `<span class="j-badge" style="background:var(--success-bg); color:var(--success-color);">止盈出場</span>`;
        if(j.hitSl) badges += `<span class="j-badge" style="background:rgba(255, 59, 48, 0.15); color:var(--danger-color);">止損出場</span>`;
        if(j.hedged) badges += `<span class="j-badge" style="background:rgba(59, 130, 246, 0.15); color:#3b82f6;">套保機制</span>`;
        if(!j.hitTp && !j.hitSl && !j.hedged) badges += `<span class="j-badge" style="background:rgba(255,255,255,0.05); color:var(--text-muted);">一般平倉</span>`;
        
        let imgHtml = j.image ? `<img src="${j.image}" class="j-preview">` : '';
        
        let pnlColor = (j.pnl && parseFloat(j.pnl) >= 0) ? 'var(--success-color)' : 'var(--danger-color)';
        
        return `
            <div class="card glass-card journal-card" id="journal-${j.id}">
                <div style="display:flex; justify-content: space-between; align-items:flex-start;">
                    <div>
                        <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:4px;"><i class="fa-regular fa-calendar"></i> ${j.date} | ${j.accountType === 'prop' ? '機構 (PropFirm)' : '實盤 (Real)'}</div>
                        <h3 style="font-size:1.1rem; margin-bottom: 8px; font-weight:700;">${j.symbol}</h3>
                    </div>
                    <button onclick="deleteJournal('${j.id}')" style="background:none; border:none; color:var(--danger-color); cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
                </div>
                
                <div style="margin-bottom: 15px;">${badges}</div>
                
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; font-size:0.8rem; background:rgba(0,0,0,0.2); padding:10px; border-radius:6px; margin-bottom:12px;">
                    <div><span style="color:var(--text-muted); display:block; margin-bottom:4px;">進場 / 槓桿</span><strong style="font-size:0.95rem;">${j.entry} (${j.leverage||1}x)</strong></div>
                    <div><span style="color:var(--text-muted); display:block; margin-bottom:4px;">下單金額</span><strong style="font-size:0.95rem;">$${j.amount||0}</strong></div>
                    <div><span style="color:var(--text-muted); display:block; margin-bottom:4px;">止盈 / 止損</span><strong style="font-size:0.95rem; color:var(--text-muted);">${j.tp||'-'} / ${j.sl||'-'}</strong></div>
                    <div><span style="color:var(--text-muted); display:block; margin-bottom:4px;">實現盈虧</span><strong style="color:${pnlColor}; font-size:1.05rem;">$${j.pnl||0}</strong></div>
                </div>
                
                <p style="font-size:0.85rem; line-height:1.6; color:#d1d5db; white-space:pre-wrap; border-left: 3px solid var(--primary-color); padding-left: 10px;">${j.reason}</p>
                ${imgHtml}
            </div>
        `;
    }).join('');
}

function saveJournalEntry() {
    const date = document.getElementById('j-date').value;
    const accountType = document.getElementById('j-account').value;
    const symbol = document.getElementById('j-symbol').value.toUpperCase();
    const entry = document.getElementById('j-entry').value;
    const tp = document.getElementById('j-tp').value;
    const sl = document.getElementById('j-sl').value;
    const amount = document.getElementById('j-amount').value;
    const leverage = document.getElementById('j-leverage').value;
    const pnl = document.getElementById('j-pnl').value;
    const hitTp = document.getElementById('j-hit-tp').checked;
    const hitSl = document.getElementById('j-hit-sl').checked;
    const hedged = document.getElementById('j-hedged').checked;
    const reason = document.getElementById('j-reason').value;
    const fileInput = document.getElementById('j-image');

    if(!date || !symbol || !entry) return alert('請至少填寫日期、標的名稱與進場價！');

    const journal = { id: Date.now(), accountType, date, symbol, entry, tp, sl, amount, leverage, pnl, hitTp, hitSl, hedged, reason, image: null };

    if(fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            journal.image = e.target.result;
            completeSaveJournal(journal);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        completeSaveJournal(journal);
    }
}

function completeSaveJournal(journal) {
    userState.journals.push(journal);
    saveState();
        document.getElementById('journal-modal').style.display = 'none';
    
    // Clear
    ['j-date','j-symbol','j-entry','j-tp','j-sl','j-amount','j-leverage','j-pnl','j-reason','j-image'].forEach(id => document.getElementById(id).value = '');
    ['j-hit-tp','j-hit-sl','j-hedged'].forEach(id => document.getElementById(id).checked = false);
    
    renderJournalList();
    renderPortfolio(); // update portfolio propfirm balance if needed
    alert('交易日誌已儲存！');
}

function deleteJournal(id) {
    if(confirm('確定要永久刪除此日誌？')) {
        userState.journals = userState.journals.filter(j => j.id.toString() !== id.toString());
        saveState();
        renderJournalList();
        renderPortfolio();
    }
}

// ====== Prop Risk Calculator ======
function updatePropRiskUI() {
    document.getElementById('risk-display-balance').innerText = `$ ${formatMoney(userState.balance)}`;
    document.getElementById('risk-display-pct').innerText = `${userState.riskPct}%`;
    document.getElementById('risk-display-amt').innerText = `$ ${formatMoney(userState.balance * (userState.riskPct/100))}`;
}

function calculatePropRisk() {
    const entry = parseFloat(document.getElementById('entryPrice').value);
    const sl = parseFloat(document.getElementById('stopLoss').value);
    const lev = parseFloat(document.getElementById('leverage').value);
    
    if(!entry || !sl || !lev) return alert("請輸入完整數值");
    
    const riskAmount = userState.balance * (userState.riskPct / 100);
    const isLong = entry > sl;
    const priceDiffPct = Math.abs(entry - sl) / entry;
    
    const notional = riskAmount / priceDiffPct;
    const margin = notional / lev;
    const realLeverage = notional / userState.balance;
    
    const resBox = document.getElementById('riskResult');
    resBox.style.display = 'block';
    
    document.getElementById('res-direction').innerText = isLong ? "多頭 (Long)" : "空頭 (Short)";
    document.getElementById('res-direction').style.color = isLong ? "var(--success-color)" : "var(--danger-color)";
    document.getElementById('res-notional').innerText = `$ ${formatMoney(notional)}`;
    document.getElementById('res-margin').innerText = `$ ${formatMoney(margin)}`;
    document.getElementById('res-reallev').innerText = `${realLeverage.toFixed(2)}x`;
    
    const warn = document.getElementById('leverage-warning');
    warn.style.display = margin > userState.balance ? 'block' : 'none';
}

// ====== Premium Lot Converter & Live Price Logic ======
async function fetchRealPrice(symbol, basePrice) {
    if (symbol.includes("USDT")) {
        try {
            let r = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
            let d = await r.json();
            return parseFloat(d.price);
        } catch(e) { return basePrice; }
    } else {
        // Pseudo real-time slight fluctuation for non-crypto
        return basePrice * (1 + (Math.random() * 0.004 - 0.002));
    }
}

async function updateConvDefaults(target) {
    const sel = document.getElementById(`conv-${target}`);
    const option = sel.options[sel.selectedIndex];
    const valInput = document.getElementById(`conv-${target}-price`);
    
    valInput.value = "Fetching...";
    let p = await fetchRealPrice(option.value, parseFloat(option.dataset.price));
    valInput.value = p.toFixed(2);
    
    // Auto calculate if both prices are valid numbers
    const fPrice = parseFloat(document.getElementById('conv-from-price').value);
    const tPrice = parseFloat(document.getElementById('conv-to-price').value);
    if(!isNaN(fPrice) && !isNaN(tPrice)) calculateLotConversion();
}

function calculateLotConversion() {
    const fromSel = document.getElementById('conv-from');
    const toSel = document.getElementById('conv-to');
    
    const fromOpt = fromSel.options[fromSel.selectedIndex];
    const toOpt = toSel.options[toSel.selectedIndex];
    
    const fromLotSize = parseFloat(fromOpt.dataset.lot);
    const toLotSize = parseFloat(toOpt.dataset.lot);
    
    const fromPrice = parseFloat(document.getElementById('conv-from-price').value);
    const amt = parseFloat(document.getElementById('conv-amt').value);
    const toPrice = parseFloat(document.getElementById('conv-to-price').value);
    
    if(!fromPrice || !amt || !toPrice || isNaN(fromPrice) || isNaN(toPrice)) return;
    
    // Formula: (Amt * Price * ContractSize) = USD Value
    let usdValue = amt * fromPrice * fromLotSize;
    let eqQty = usdValue / (toPrice * toLotSize);
    
    const lText = i18n[userState.lang]?.js_eqqty || "等效為";
    
    document.getElementById('conv-res-box').style.display = 'block';
    document.getElementById('conv-res-text').innerHTML = `${lText} <b>${eqQty.toFixed(4)}</b> (${toOpt.value})`;
}

// Initialize converter prices on first load
function initConverterDefaults() {
    updateConvDefaults('from');
    updateConvDefaults('to');
}

// ====== Export Journals to CSV ======
function exportJournalsCSV() {
    if(userState.journals.length === 0) return alert("無日誌紀錄可匯出");
    const header = ["Date", "Account", "Symbol", "Entry", "Amt", "Lev", "TP", "SL", "PnL", "Hit TP", "Hit SL", "Hedged", "Reason"];
    const rows = userState.journals.map(j => {
        return [
            j.date, (j.accountType==='prop'?'PropFirm':'Real'), j.symbol, j.entry, j.amount||0, j.leverage||1, j.tp || "N/A", j.sl || "N/A",
            j.pnl || 0,
            j.hitTp ? "Yes" : "No", j.hitSl ? "Yes" : "No", j.hedged ? "Yes" : "No",
            `"${j.reason ? j.reason.replace(/"/g, '""') : ""}"` // Escape quotes for CSV
        ];
    });
    
    let csvContent = "data:text/csv;charset=utf-8,\uFEFF" + header.join(",") + "\n" + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `trading_journal_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ====== ATR Calculator ======
function calculateATR() {
    const atrVal = parseFloat(document.getElementById('atr-value').value);
    const atrMulti = parseFloat(document.getElementById('atr-multi').value);
    const atrTimes = parseInt(document.getElementById('atr-times').value);
    
    if(!atrVal || !atrMulti || !atrTimes || atrVal <= 0 || atrMulti <= 0 || atrTimes <= 0) {
        return alert("請填寫正確的 ATR 值、倍數與次數。");
    }
    
    const singleAdd = atrVal * atrMulti;
    const totalAdd = singleAdd * atrTimes;
    
    document.getElementById('atr-result').style.display = 'block';
    document.getElementById('atr-res-single').innerText = singleAdd.toFixed(2);
    document.getElementById('atr-res-total').innerText = totalAdd.toFixed(2);
}

// ====== Home Asset Categories ======
let currentHomeTab = 'crypto';
let liveEngineTimer = null;

function switchHomeTab(tab, btnElem) {
    currentHomeTab = tab;
    // Update button styling
    const btns = document.querySelectorAll('.home-tab-btn');
    btns.forEach(b => {
        b.classList.remove('active');
        b.style.background = 'transparent';
        b.style.color = 'var(--text-muted)';
        b.style.borderColor = 'transparent';
    });
    btnElem.classList.add('active');
    btnElem.style.background = 'rgba(212,175,55,0.15)';
    btnElem.style.color = 'var(--primary-color)';
    btnElem.style.borderColor = 'var(--primary-color)';
    
    renderHomeAssets();
}

function renderHomeAssets() {
    const list = document.getElementById('home-asset-list');
    if(!list || !window.VERTEX_ASSETS) return;
    
    // Fallback dictionary for translation logic in JS
    const lDict = { 'tw': '證券期貨', 'crypto': '數位資產', 'forex': '外匯貨幣匯率', 'index': '全球大盤股指', 'metal': '貴金屬合約' };

    const filtered = window.VERTEX_ASSETS.filter(a => {
        if(currentHomeTab === 'crypto') return a.type === 'crypto';
        if(currentHomeTab === 'index') return a.type === 'index' || a.type === 'tw';
        if(currentHomeTab === 'forex') return a.type === 'forex' || a.type === 'metal';
        return true;
    }).slice(0, 15); // Show top 15 of current tab
    
    list.innerHTML = filtered.map(a => {
        const pclass = a.change >= 0 ? 'positive' : 'negative';
        const picon = a.change >= 0 ? 'up' : 'down';
        const pct = (Math.abs(a.change) * 100).toFixed(2);
        const typelabel = lDict[a.type] || a.type.toUpperCase();
        
        return `
            <div class="stock-item card" style="padding: 12px; margin-bottom: 8px; border: 1px solid rgba(255,255,255,0.02)">
                <div style="flex:1;">
                    <h4 style="margin-bottom: 4px; font-size: 1.05rem;">${a.name} <span style="font-size:0.75rem; color:var(--text-muted); margin-left:5px;">${a.symbol}</span></h4>
                    <div style="color:var(--text-muted); font-size: 0.75rem;">${typelabel} (Lot: ${a.lotSize})</div>
                </div>
                <div class="stock-price" style="display:flex; flex-direction:column; justify-content:center; align-items:flex-end;">
                    <div style="font-size: 1.1rem; font-weight: 600; color:#fff;">$ ${a.currentPrice.toFixed(4)}</div>
                    <div class="${pclass}" style="font-size: 0.8rem; margin-top:2px;">
                        <i class="fa-solid fa-caret-${picon}"></i> ${pct}%
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function startLivePriceEngine() {
    if(!window.VERTEX_ASSETS) return;
    if(liveEngineTimer) clearInterval(liveEngineTimer);
    
    liveEngineTimer = setInterval(() => {
        // Randomly adjust 30% of assets slightly
        window.VERTEX_ASSETS.forEach(a => {
            if(Math.random() > 0.7) {
                const vol = a.type === 'crypto' ? 0.002 : (a.type === 'forex' ? 0.0005 : 0.001);
                a.change += (Math.random() * (vol*2)) - vol;
                // keep change bounded
                if(a.change > 0.05) a.change = 0.05;
                if(a.change < -0.05) a.change = -0.05;
                a.currentPrice = a.basePrice * (1 + a.change);
            }
        });
        
        // Only re-render if Home view is active
        const homeActive = document.getElementById('view-home') && document.getElementById('view-home').classList.contains('active');
        if(homeActive) renderHomeAssets();
        
    }, 2000);
}

// ====== TradingView Initialization ======
let tvWidgetInitialized = false;

function initTVWidget() {
    if(tvWidgetInitialized) return;
    
    new TradingView.widget({
      "autosize": true,
      "symbol": "BINANCE:BTCUSDT",
      "interval": "D",
      "timezone": "Asia/Taipei",
      "theme": "dark",
      "style": "1",
      "locale": "zh_TW",
      "enable_publishing": false,
      "backgroundColor": "rgba(22, 27, 34, 1)",
      "gridColor": "rgba(42, 46, 57, 0.06)",
      "hide_top_toolbar": false,
      "hide_legend": false,
      "save_image": false,
      "container_id": "tv-screener-chart",
      "toolbar_bg": "#161b22",
      "details": true,
      "hotlist": true,
      "calendar": false
    });
    
    tvWidgetInitialized = true;
}

// ====== Initializer ======
function initApp() {
    loadSettings();
    updatePropRiskUI();
    
    // Safety check for functions
    if(typeof renderJournalList === 'function') renderJournalList();
    if(typeof renderPortfolio === 'function') renderPortfolio();
    if(typeof initConverterDefaults === 'function') initConverterDefaults();
    
    // Start Live Price Engine for Home
    if(typeof startLivePriceEngine === 'function') {
        startLivePriceEngine();
        renderHomeAssets();
    }
    
    // Tab Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            if(!item.classList.contains('fab-item')) item.classList.add('active');
            
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            document.getElementById(item.dataset.target).classList.add('active');
            
            if(item.dataset.target === 'view-screener') {
                initTVWidget();
            }
        });
    });
    
    // Quick Actions
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            document.getElementById(target).classList.add('active');
            
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            const map = {'view-screener': 2, 'view-risk': 1, 'view-portfolio': 1, 'view-journal': 3};
            if(map[target] !== undefined) document.querySelectorAll('.nav-item')[map[target]].classList.add('active');
            
            if(target === 'view-screener') {
                initTVWidget();
            }
        });
    });
}

window.addEventListener('DOMContentLoaded', initApp);
