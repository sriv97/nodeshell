const {pwd} = require('./pwd');
const {ls} = require('./ls');
const fs = require('fs');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim();

  if(cmd === 'pwd'){
    console.log(pwd());
  }
  if(cmd === 'ls'){
    console.log(ls())
  }

  process.stdout.write('\nprompt >');

});
