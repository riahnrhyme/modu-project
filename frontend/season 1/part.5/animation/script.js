var doc = document;
var box = doc.getElementById('box');
var nemo = doc.getElementById('nemo');
var nowX = 0;
var nowY = 0;
var resetX = 0;
var resetY = 0;

function init(){
	
	var endX = Math.floor(Math.random() * 551);
	var endY = Math.floor(Math.random() * 451);
	
	nemo.style.left = endX + 'px'; // 0~550
	nemo.style.top = endY + 'px'; // 0~450
	
	nowX = endX;
	nowY = endY;
	resetX = endX;
	resetY = endY;

	console.log(nowX)
	console.log(nowX)
	console.log(nowX)
	console.log(nowX)
}

init();

// 기능별 버튼
var topBtn = doc.getElementById('top');
var botBtn = doc.getElementById('bottom');
var leftBtn = doc.getElementById('left');
var rightBtn = doc.getElementById('right');
var stopBtn = doc.getElementById('stop');
var resetBtn = doc.getElementById('reset');

// 이벤트
topBtn.addEventListener('click',topFunc);
botBtn.addEventListener('click',botFunc);
leftBtn.addEventListener('click',leftFunc);
rightBtn.addEventListener('click',rightFunc);
stopBtn.addEventListener('click',stopFunc);
resetBtn.addEventListener('click',resetFunc);

// 모듈단위
var move;

function topFunc(){
	
	clearInterval(move);
	
	move = setInterval(function(){
		nowY = nowY - 1;
		if ( nowY < 0 ) {
			clearInterval(move)
			return;
		}
		nemo.style.top = nowY + 'px';
	},10);
}

function botFunc(){
	
	clearInterval(move);
	
	move = setInterval(function(){
		nowY = nowY + 1;
		if ( nowY > 450 ) {
			clearInterval(move)
			return;
		}
		nemo.style.top = nowY + 'px';
	},10);
}

function leftFunc(){
	
	clearInterval(move);
	
	move = setInterval(function(){
		nowX = nowX - 1;
		if ( nowX < 0 ) {
			clearInterval(move)
			return;
		}
		nemo.style.left = nowX + 'px';
	},10);
}


function rightFunc(){
	
	clearInterval(move);
	
	move = setInterval(function(){
		nowX = nowX + 1;
		if ( nowX > 550 ) {
			clearInterval(move)
			return;
		}
		nemo.style.left = nowX + 'px';
	},10);
}

function stopFunc(){
	
	clearInterval(move);
}

function resetFunc(){
	
	nemo.style.top = resetY + 'px';
	nemo.style.left = resetX + 'px';
	nowX = resetX;
	nowY = resetY;
}























