const MARKET_DATA = [];

// 1. 台股前50 (Realistic Mar 2026/Mar 2024 prices approx)
MARKET_DATA.push(
    { symbol: '2330.TW', name: '台積電', type: 'tw', basePrice: 850, currentPrice: 850, lotSize: 1000, change: 0.012 },
    { symbol: '2317.TW', name: '鴻海', type: 'tw', basePrice: 175, currentPrice: 175, lotSize: 1000, change: 0.02 },
    { symbol: '2454.TW', name: '聯發科', type: 'tw', basePrice: 1150, currentPrice: 1150, lotSize: 1000, change: -0.01 },
    { symbol: '2308.TW', name: '台達電', type: 'tw', basePrice: 350, currentPrice: 350, lotSize: 1000, change: 0.005 },
    { symbol: '2881.TW', name: '富邦金', type: 'tw', basePrice: 75, currentPrice: 75, lotSize: 1000, change: -0.001 }
);
for(let i=6; i<=50; i++) {
    let p = 50 + Math.random()*150;
    MARKET_DATA.push({ symbol: `28${i.toString().padStart(2, '0')}.TW`, name: `台股成份 ${i}`, type: 'tw', basePrice: p, currentPrice: p, lotSize: 1000, change: 0 });
}

// 2. 加密貨幣 50 (Connected to Binance WS in app.js for real prices)
const cryptos = [
    ['BTCUSDT','Bitcoin',68300], ['ETHUSDT','Ethereum',3520], ['BNBUSDT','BNB',590], ['SOLUSDT','Solana',145], 
    ['XRPUSDT','Ripple',0.6], ['DOGEUSDT','Dogecoin',0.15], ['ADAUSDT','Cardano',0.45], ['AVAXUSDT','Avalanche',40],
    ['DOTUSDT','Polkadot',7], ['LINKUSDT','Chainlink',15], ['MATICUSDT','Polygon',0.7], ['LTCUSDT','Litecoin',85]
];
cryptos.forEach(c => MARKET_DATA.push({ symbol: c[0], name: c[1], type: 'crypto', basePrice: c[2], currentPrice: c[2], lotSize: 1, change: 0 }));
for(let i=13; i<=50; i++) {
    let p = Math.random()*10;
    MARKET_DATA.push({ symbol: `COIN${i}USDT`, name: `Crypto ${i}`, type: 'crypto', basePrice: p, currentPrice: p, lotSize: 1, change: 0 });
}

// 3. 外匯 50 (Standard Forex lot size = 100,000)
const forex = [
    ['EURUSD','歐元/美元',1.0850],['USDJPY','美元/日圓',155.20],['GBPUSD','英鎊/美元',1.2500],['AUDUSD','澳幣/美元',0.6500],
    ['USDCAD','美元/加幣',1.3600],['USDCHF','美元/瑞郎',0.9050],['NZDUSD','紐幣/美元',0.6000]
];
forex.forEach(f => MARKET_DATA.push({ symbol: f[0], name: f[1], type: 'forex', basePrice: f[2], currentPrice: f[2], lotSize: 100000, change: 0 }));
for(let i=8; i<=50; i++) {
    let p = 0.5 + Math.random();
    MARKET_DATA.push({ symbol: `FX${i}PAIR`, name: `外匯對 ${i}`, type: 'forex', basePrice: p, currentPrice: p, lotSize: 100000, change: 0 });
}

// 4. 股指 10 大 + 貴金屬
const idx = [
    ['NAS100','納斯達克',18200, 20,'index'], ['SPX500','標普500',5250, 50,'index'], ['US30','道瓊30',39500, 5,'index'],
    ['GER40','德國DAX',18500, 25,'index'], ['UK100','富時100',8000, 10,'index'], ['JPN225','日經225',39000, 1000,'index'],
    ['XAUUSD','黃金',2350, 100,'metal'], ['XAGUSD','白銀',28.5, 5000,'metal'], ['WTIUSD','原油',82.5, 1000,'metal']
];
idx.forEach(ix => MARKET_DATA.push({ symbol: ix[0], name: ix[1], type: ix[4], basePrice: ix[2], currentPrice: ix[2], lotSize: ix[3], change: 0 }));

// Assign to window
window.VERTEX_ASSETS = MARKET_DATA;
