const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const currentTime = new Date().toLocaleString();
    res.send(`
        <html>
            <head>
                <title>Time Server</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin-top: 50px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                    }
                    .time {
                        font-size: 2em;
                        margin: 20px 0;
                    }
                    .container {
                        background: rgba(255,255,255,0.1);
                        padding: 30px;
                        border-radius: 15px;
                        display: inline-block;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🕐 Сервер времени</h1>
                    <div class="time">${currentTime}</div>
                    <p>Обновите страницу для обновления времени</p>
                </div>
            </body>
        </html>
    `);
});

app.get('/api/time', (req, res) => {
    res.json({
        timestamp: new Date().toISOString(),
        localTime: new Date().toLocaleString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на порту ${PORT}`);
    console.log(`📱 Откройте http://localhost:${PORT}`);
});