import express from 'express';

const app = express();
// # routs types
/**
 * Post=send
 * Get= take for some place
 * Put=alter
 * patch= alter specific
 */
app.get('/', (req, res) => res.json({
  mensagem: 'é isso ai',
}));
app.post('/', (req, res) => res.json({
  mensagem: 'é isso ai usando post',
}));

app.listen(8081, () => { console.log('server in pot 8081'); });
