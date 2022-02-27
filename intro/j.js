
    function show(){
      const body = document.querySelector('body');
      body.style.margin = 0x0;
      body.style.padding = 0x0;
      body.style.boxSizing = 'border-box';

      const bg = document.createElement('div');
      bg.setAttribute('id', 'bg');
      bg.style.fontFamily = 'monospace';
      bg.style.position = 'absolute';
      bg.style.top = 0x0;
      bg.style.backgroundColor = 'rgb(0, 0, 0, 0.75)';
      bg.style.height = 0x64+'vh';
      bg.style.width = 0x64+'vw';
      body.appendChild(bg);

      const card = document.createElement('div');
      card.setAttribute('id', 'card');
      card.style.position = 'absolute';
      card.style.backgroundColor = 'black';
      card.style.color = 'white';
      card.style.height = 0x12c+'px';
      card.style.width = 0xdc+'px';
      card.style.borderRadius = 0xa+'px';
      card.style.padding = 0xa+'px';
      card.style.top = 'calc(50% - '+0x96+'px)';
      card.style.left = 'calc(50% - '+0x78+'px)';
      card.animate([
        {transform: 'scale(1)'},
        {transform: 'scale(0.9)'},
        {transform: 'scale(1.1)'},
        {transform: 'scale(0.9)'},
        {transform: 'scale(1)'}
      ],{
        duration : 0x190,
        iterations : 0x1,
        easing : 'linear'
      });
      bg.appendChild(card);

      const para0 = document.createElement('h3');
      para0.style.textAlign = 'center';
      
      const img = document.createElement('img');
      img.style.height = 0x50+'px';
      img.style.width = 0x6e+'px';
      img.src = 'https://i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif';
      para0.appendChild(img);
      card.appendChild(para0);

      const headText = document.createTextNode('Created by: SwapniL');

      const head = document.createElement('h3');
      head.style.textAlign = 'center';
      head.style.fontSize = 0x10+'px';
      head.appendChild(headText);
      card.appendChild(head);

      const para1Text = document.createTextNode('You are free to use my code but don’t claim it as yours publicly.');

      const para1 = document.createElement('h3');
      para1.style.textAlign = 'justify';
      para1.style.fontSize = 0xe+'px';
      para1.style.padding = '0 1em';
      para1.appendChild(para1Text);
      card.appendChild(para1);

      const para2Text = document.createTextNode('(Make it Private else)');

      const para2 = document.createElement('h1');
      para2.style.textAlign = 'center';
      para2.style.fontSize = 0xe+'px';
      para2.appendChild(para2Text);
      card.appendChild(para2);

      const para3 = document.createElement('h3');
      para3.style.textAlign = 'center';
      card.appendChild(para3);

      const button = document.createElement('button');
      button.innerText = 'accept';
      button.style.outline = 'none';
      button.style.border = 'none';
      button.style.padding = '0.5em 2em';
      button.style.marginTop = 0xe+'px';
      button.style.borderRadius = 0x5+'px';
      para3.appendChild(button);
      button.setAttribute('onclick', 'hideCard()');
    }
    function hideCard(){
      document.body.removeChild(document.getElementById('bg'));
    }
