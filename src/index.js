// DataSync API - RESTful API for data synchronization
const express = require('express');
const app = express();

app.use(express.json());

class DataSync {
    constructor() {
        this.data = new Map();
    }
    
    sync(key, value) {
        this.data.set(key, value);
        return { success: true, key, value };
    }
    
    get(key) {
        return this.data.get(key) || null;
    }
    
    getAll() {
        return Array.from(this.data.entries()).map(([k, v]) => ({ key: k, value: v }));
    }
}

const sync = new DataSync();

app.post('/api/sync', (req, res) => {
    const { key, value } = req.body;
    res.json(sync.sync(key, value));
});

app.get('/api/get/:key', (req, res) => {
    const value = sync.get(req.params.key);
    res.json({ key: req.params.key, value });
});

app.get('/api/all', (req, res) => {
    res.json(sync.getAll());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`DataSync API running on port ${PORT}`);
});

module.exports = { DataSync, app };
