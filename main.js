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

		console.log('\n\n');
		console.log(player1+', what first coordinate?');
	
		var p1a=prompt();
		console.log(player1+', what second coordinate?');
		var p1b=prompt();
		plays=plays+1;
}while(board[p1b-1][p1a-1]==='x' || board[p1b-1][p1a-1]=='o');
		
board[p1b-1][p1a-1]='x';
	console.log('	1	 2	 3	\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 1 |    '+board[0][0]+'   |    '+board[0][1]+'    |    '+board[0][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 2 |   '+board[1][0]+'    |    '+board[1][1]+'    |    '+board[1][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 3 |   '+board[2][0]+'    |    '+board[2][1]+'    |    '+board[2][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~');


if (plays<9){
do{
	console.log('\n\n');
 
	console.log(player2+', what first coordinate?');
	var p1a=prompt();
	console.log(player2+', what second coordinate?');
	var p1b=prompt();
	plays=plays+1;
}while(board[p1b-1][p1a-1]==='x' || board[p1b-1][p1a-1]=='o');

board[p1b-1][p1a-1]='o';
	console.log('	1	 2	 3	\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 1 |    '+board[0][0]+'   |    '+board[0][1]+'    |    '+board[0][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 2 |   '+board[1][0]+'    |    '+board[1][1]+'    |    '+board[1][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n 3 |   '+board[2][0]+'    |    '+board[2][1]+'    |    '+board[2][2]+'    |\n    ~~~~~~~~~~~~~~~~~~~~~~~~~~~');	
}else{
	console.log('noone wins');
}

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
	console.log('noone wins')
}
else{
	console.log('someone wins! I think')
}


