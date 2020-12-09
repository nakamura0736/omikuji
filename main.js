(function(){
	'use strict';

	var btn = document.getElementById('btn'); 

	btn.addEventListener('click', function(){

		// var n = Math.random();
		// if(n< 0.1){
		// 	this.textContent = "大吉"; //10%
		// }else if(n<0.2){
		// 	this.textContent = "凶"//10%
		// }else if(n<0.3){
		// 	this.textContent = "よしてる"//10%
		// }else {
		// 	this.textContent = "中吉"//70%
		// }
		var results = [
			'大吉', '大吉',
			'中吉', '中吉','中吉',
			'凶', '凶',
			'末吉', '末吉', '末吉',
			'小吉', '小吉', '小吉',
			'吉','吉','吉'
		];	
		var n = Math.floor(Math.random() * results.length);//配列のlengthに応じてランダム数を変える
		this.textContent = results[n];
		
	});
	btn.addEventListener('mousedown', function(){
		this.className = 'pushed';
	});
	btn.addEventListener('mouseup', function(){
		this.className = '';
	});
})();