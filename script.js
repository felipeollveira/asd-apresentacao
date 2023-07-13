
const frases = [
	'Entendo que você esteja sentindo um turbilhão de emoções, mas lembre-se de que nada disso é sua culpa.' , 

	'Ninguém pode fazer você se sentir menos você.',

	'Nenhum padrão de beleza deve ditar o quanto você deve amar o seu corpo.',

	'Você é uma sobrevivente e um dia tudo isso vai passar, mesmo que demore um pouco.' , 

	'Ame a si mesmo. Nada, nem ninguém pode ser tão especial que pode te fazer mal.' , 

	'Somente unindo nossas vozes e ações para ajudar as vítimas e promover o respeito pelos outros podemos ajudar a acabar com a violência sexual' , 

	'Moça, acredite em mim, acredite em nós, você não tem culpa alguma.' , 

	'Toda mulher é forte, basta acreditar ...Então menina , engole o choro ergue a cabeça e siga em frente, sempre',

	'Moça, a culpa não é sua. E nós estamos aqui para te lembrar disso quantas vezes você precisar. Estamos aqui para ouvir você, estender a mão para você e oferecer nossa solidariedade para que você se empodere.' ,

	'Moça, lembre-se, a culpa não foi sua.' ,

	'Existem mulheres fortes e existem mulheres que ainda não descobriram sua força' ,

	'Você deve se sentir livre para dizer o que quiser e quando quiser.' ,

	'Você continua sendo você' ,

	'O homem mata um leão por dia. A mulher mata, corta, tempera, serve e ainda lava a louça.',

	'Onde quer que uma mulher decida estar, ela faz toda a diferença.',

	'Toda vez que uma mulher se defende, sem nem perceber que isso é possível, sem qualquer pretensão, ela defende todas as mulheres.',

	'Eu não terei a minha vida reduzida. Eu não vou me curvar ao capricho ou à ignorância de outra pessoa.',

	'Sigo apaixonada pela mulher que batalhei para ser.',

	'Sou mulher com muito Orgulho!'

];

const modal = document.querySelector('.modal')
	const switchModal = () => {
		
		const actualStyle = modal.style.display
		if(actualStyle == 'flex'){
			modal.style.display = 'none'
			document.documentElement.style.overflow = 'auto'
			
		}
		else{
			modal.style.display = 'flex'	
			document.documentElement.style.overflow = 'auto'
		}
		// Algum erro ainda desconhecido na sintaxe fez com que fosse 
		// impossivel alterar o overflow de auto-hidden-auto. 
		}

	 



	function btn(){
	    var frasesrandom = frases[Math.floor(Math.random() * frases.length )]
		document.getElementById('#frases')
		modaltxt.textContent = frasesrandom;
		switchModal()
		
    	
    	
    	}

      function fechar(){
    		modal.style.display = 'none'
}
		
		
    function att(){
    	 var frasesrandom = frases[Math.floor(Math.random() * frases.length )]
		document.getElementById('#frases')
		modaltxt.textContent = frasesrandom;
		
    }

   



