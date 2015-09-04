var prompt=require('prompt-sync').prompt;
var plays=0;
console.log('What is player 1 name');
var player1=prompt();
console.log('What is player 2 name');
var player2=prompt();
console.log(player1+' vs. '+player2+' sucks');
console.log('Let us begin');
var board=[
	[' ',' ',' '],
	[' ',' ',' '],
	[' ',' ',' ']
	];

console.log('	1	 2	 3	\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 1 |    '+board[0][0]+'   |    '+board[0][1]+'    |    '+board[0][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 2 |   '+board[1][0]+'    |    '+board[1][1]+'    |    '+board[1][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 3 |   '+board[2][0]+'    |    '+board[2][1]+'    |    '+board[2][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~');

var topRow=((board[0][0]==='x' && board[0][1]==='x' && board[0][2]==='x')||(board[0][0]==='o' && board[0][1]==='o' && board[0][2]==='o'));
var midRow=((board[1][0]==='x' && board[1][1]==='x' && board[1][2]==='x')||(board[1][0]==='o' && board[1][1]==='o' && board[1][2]==='o'));
var botRow=((board[2][0]==='x' && board[2][1]==='x' && board[2][2]==='x')||(board[2][0]==='o' && board[2][1]==='o' && board[2][2]==='o'));
var lefCol=((board[0][0]==='x' && board[1][0]==='x' && board[2][0]==='x')||(board[0][0]==='o' && board[1][0]==='o' && board[2][0]==='o'));
var midCol=((board[0][1]==='x' && board[1][1]==='x' && board[2][1]==='x')||(board[0][1]==='o' && board[1][1]==='o' && board[2][1]==='o'));
var rigCol=((board[0][2]==='x' && board[1][2]==='x' && board[2][2]==='x')||(board[0][2]==='o' && board[1][2]==='o' && board[2][2]==='o'));
var diag1=((board[0][0]==='x' && board[1][1]==='x' && board[2][2]==='x')||(board[0][0]==='o' && board[1][1]==='o' && board[2][2]==='o'));
var diag2=((board[0][2]==='x' && board[1][1]==='x' && board[2][0]==='x')||(board[0][2]==='o' && board[1][1]==='o' && board[2][0]==='o'));


do{

	do{

		do{
        console.log(player1+ ' what are your coordinates?');
        var p1 = prompt();
      	if (p1==='forfeit'){
      		console.log(player2+' wins!');
      		return;
      	}
        var cords = p1.length;
        var isCorrectLength = (cords === 3);
        var p1Answer = p1.split(' ');
        var x =parseInt(p1Answer[0])-1;
        var y =parseInt(p1Answer[1])-1;
        var incorrectEntry = (p1Answer[0] <1 || p1Answer[0]>3 || p1Answer[1] <1 || p1Answer[1]>3);
        var isNotNumber = (isNaN(x) || isNaN(y));
        if (!isNotNumber && !incorrectEntry){
        var spotTaken= (board[y][x] ==='x' || board[y][x] ==='o');
        }//this is the end of the if

    	}while(!isCorrectLength || spotTaken || incorrectEntry || isNotNumber);
		plays=plays+1;
		
		board[y][x]='x';
		console.log('	1	 2	 3	\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 1 |    '+board[0][0]+'   |    '+board[0][1]+'    |    '+board[0][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 2 |   '+board[1][0]+'    |    '+board[1][1]+'    |    '+board[1][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 3 |   '+board[2][0]+'    |    '+board[2][1]+'    |    '+board[2][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~');
		topRow=((board[0][0]==='x' && board[0][1]==='x' && board[0][2]==='x')||(board[0][0]==='o' && board[0][1]==='o' && board[0][2]==='o'));
		midRow=((board[1][0]==='x' && board[1][1]==='x' && board[1][2]==='x')||(board[1][0]==='o' && board[1][1]==='o' && board[1][2]==='o'));
		botRow=((board[2][0]==='x' && board[2][1]==='x' && board[2][2]==='x')||(board[2][0]==='o' && board[2][1]==='o' && board[2][2]==='o'));
		lefCol=((board[0][0]==='x' && board[1][0]==='x' && board[2][0]==='x')||(board[0][0]==='o' && board[1][0]==='o' && board[2][0]==='o'));
		midCol=((board[0][1]==='x' && board[1][1]==='x' && board[2][1]==='x')||(board[0][1]==='o' && board[1][1]==='o' && board[2][1]==='o'));
		rigCol=((board[0][2]==='x' && board[1][2]==='x' && board[2][2]==='x')||(board[0][2]==='o' && board[1][2]==='o' && board[2][2]==='o'));
		diag1=((board[0][0]==='x' && board[1][1]==='x' && board[2][2]==='x')||(board[0][0]==='o' && board[1][1]==='o' && board[2][2]==='o'));
		diag2=((board[0][2]==='x' && board[1][1]==='x' && board[2][0]==='x')||(board[0][2]==='o' && board[1][1]==='o' && board[2][0]==='o'));

		if (plays<9 && topRow===false && midRow===false && botRow===false && lefCol===false && midCol===false && rigCol===false && diag1===false && diag2===false){
		

		do{
        console.log(player2+ ' what are your coordinates?');
        p2 = prompt();
        if (p2==='forfeit'){
      		console.log(player1+' wins!');
      		return;
      	}
        var cords = p2.length;
        var isCorrectLength = (cords === 3);
        var p2Answer = p2.split(' ');
        var x =parseInt(p2Answer[0])-1;
        var y =parseInt(p2Answer[1])-1;
        var incorrectEntry = (p2Answer[0] <1 || p2Answer[0]>3 || p2Answer[1] <1 || p2Answer[1]>3);
        var isNotNumber = (isNaN(x) || isNaN(y));
        if (!isNotNumber && !incorrectEntry){
        var spotTaken= (board[y][x] ==='x' || board[y][x] ==='o');
        }//this is the end of the if

    	}while(!isCorrectLength || spotTaken || incorrectEntry || isNotNumber);
		plays=plays+1;
		board[y][x]='o';
		console.log('	1	 2	 3	\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 1 |    '+board[0][0]+'   |    '+board[0][1]+'    |    '+board[0][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 2 |   '+board[1][0]+'    |    '+board[1][1]+'    |    '+board[1][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 3 |   '+board[2][0]+'    |    '+board[2][1]+'    |    '+board[2][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~');	
	}else{
		// console.log('noone wins');
	};

	topRow=((board[0][0]==='x' && board[0][1]==='x' && board[0][2]==='x')||(board[0][0]==='o' && board[0][1]==='o' && board[0][2]==='o'));
	midRow=((board[1][0]==='x' && board[1][1]==='x' && board[1][2]==='x')||(board[1][0]==='o' && board[1][1]==='o' && board[1][2]==='o'));
	botRow=((board[2][0]==='x' && board[2][1]==='x' && board[2][2]==='x')||(board[2][0]==='o' && board[2][1]==='o' && board[2][2]==='o'));
	lefCol=((board[0][0]==='x' && board[1][0]==='x' && board[2][0]==='x')||(board[0][0]==='o' && board[1][0]==='o' && board[2][0]==='o'));
	midCol=((board[0][1]==='x' && board[1][1]==='x' && board[2][1]==='x')||(board[0][1]==='o' && board[1][1]==='o' && board[2][1]==='o'));
	rigCol=((board[0][2]==='x' && board[1][2]==='x' && board[2][2]==='x')||(board[0][2]==='o' && board[1][2]==='o' && board[2][2]==='o'));
	diag1=((board[0][0]==='x' && board[1][1]==='x' && board[2][2]==='x')||(board[0][0]==='o' && board[1][1]==='o' && board[2][2]==='o'));
	diag2=((board[0][2]==='x' && board[1][1]==='x' && board[2][0]==='x')||(board[0][2]==='o' && board[1][1]==='o' && board[2][0]==='o'));



	}while (plays<9 && topRow===false && midRow===false && botRow===false && lefCol===false && midCol===false && rigCol===false && diag1===false && diag2===false);

	if (plays===9){
		console.log('Cats game, noone wins. Sorry.')
	}
	else if((board[0][0]==='x' && board[0][1]==='x' && board[0][2]==='x')|| (board[1][0]==='x' && board[1][1]==='x' && board[1][2]==='x') || (board[2][0]==='x' && board[2][1]==='x' && board[2][2]==='x') || (board[0][0]==='x' && board[1][0]==='x' && board[2][0]==='x') || (board[0][1]==='x' && board[1][1]==='x' && board[2][1]==='x') || (board[0][2]==='x' && board[1][2]==='x' && board[2][2]==='x') || (board[0][0]==='x' && board[1][1]==='x' && board[2][2]==='x') || (board[0][2]==='x' && board[1][1]==='x' && board[2][0]==='x')){
		console.log(player1+' wins, I think')
	}
	else {
		console.log(player2+' Wins!')
	}
	console.log();
	console.log('type no to quit. hit any button to continue.');
	var ready=prompt();

	plays=0;
	board=[
	[' ',' ',' '],
	[' ',' ',' '],
	[' ',' ',' ']
	];
	console.log('	1	 2	 3	\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 1 |    '+board[0][0]+'   |    '+board[0][1]+'    |    '+board[0][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 2 |   '+board[1][0]+'    |    '+board[1][1]+'    |    '+board[1][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 3 |   '+board[2][0]+'    |    '+board[2][1]+'    |    '+board[2][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~');
}while (ready!=='no');
console.log();
console.log('Thanks for playing!!!!!');
