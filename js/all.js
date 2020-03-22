let clock = document.querySelector('.clock');

for(let i = 0; i<6;i++){
    let div = document.createElement('div');
    div.setAttribute('class','hour');
    div.style.transform =`rotate(${i*30}deg)`;
    clock.appendChild(div);
}

for(let i = 0; i < 6; i++){
    let div = document.createElement('div');
    let before = document.createElement('div');
    let after = document.createElement('div');
    
    after.setAttribute('class','after');
    before.setAttribute('class','before');
    after.style.transform = `rotate(${60-i*30}deg)`;
    before.style.transform = `rotate(${60-i*30}deg)`;
    after.textContent = i+1+6;
    before.textContent = i+1;
    div.appendChild(after);
    div.appendChild(before);
    
    div.setAttribute('class','hour-12');
    div.style.transform = `rotate(${-60+i*30}deg)`;
    clock.appendChild(div);
}
for(let i = 0; i < 6; i++){
    let div = document.createElement('div');
    let before = document.createElement('div');
    let after = document.createElement('div');
    
    after.setAttribute('class','after');
    before.setAttribute('class','before');
    after.style.transform = `rotate(${60-i*30}deg)`;
    before.style.transform = `rotate(${60-i*30}deg)`;
    after.textContent = i+13+6;
    before.textContent = i+13;
    div.appendChild(after);
    div.appendChild(before);
    
    div.setAttribute('class','hour-24');
    div.style.transform = `rotate(${-60+i*30}deg)`;
    clock.appendChild(div);
}
for(let i = 0; i<36;i++){
    let div = document.createElement('div');
    div.setAttribute('class','min');
    div.style.transform = `rotate(${i*5}deg)`;
    if( i%6 === 0){
        div.style.display= 'none';
    }
    clock.appendChild(div);
}

setInterval(function(){
    let hourNeedle = document.querySelector('.hourNeedle');
    let minNeedel = document.querySelector('.minNeedle');
    let secNeedle = document.querySelector('.secNeedle');
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    hourNeedle.style.transform = `translate(-50%,-100%) rotate(${hour*30+min*0.5}deg)`;
    minNeedel.style.transform = `translate(-50%,-100%) rotate(${min*6}deg)`;
    secNeedle.style.transform = `translate(-50%,-100%) rotate(${sec*6}deg)`;
},1000)