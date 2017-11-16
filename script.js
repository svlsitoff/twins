var conteiner = document.querySelector('.conteiner');
var parent = document.querySelectorAll('.parent');
var images = ['url(images/1.jpg)','url(images/2.jpg)','url(images/3.jpg)'/*,'url(images/4.jpg)','url(images/5.jpg)',
'url(images/6.jpg)','url(images/7.jpg)','url(images/8.jpg)','url(images/9.jpg)','url(images/10.jpg)',
'url(images/11.jpg)','url(images/12.jpg)','url(images/13.jpg)','url(images/14.jpg)','url(images/15.jpg)'*/];
var mutches = 0;
var children = document.querySelectorAll('.children'); //вытаскиваем все элементы нашим классом в массив
function shuffle(a) { //функция перемешивания значений массива
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}
//размещаем изображения по нашим элементам 

function show_images() 
	{	shuffle(images); //перемешиваем массив с адресами картинок
		for (var i = 0; i < images.length; i++) {
			
			children[i].style.backgroundImage = images[i]; // и каждому элементу для первой половины устанавливаем background
			
		}
		shuffle(images);
		for (var i = 0; i < images.length; i++) {
			
			children[i+3].style.backgroundImage = images[i]; // то же самое для второй половины элементов
		}	
	}
show_images();
function gess() {
				for (var i = 0; i < children.length; i++) {
				children[i].classList.add('show_me');}
				
				setTimeout(function(){
					for (var i = 0; i < children.length; i++) {
					children[i].classList.remove('show_me');}
					},7000);
			}
				
	




// цепляем на каждый элемент обработчик события onclick функцию
 for (var i = 0; i < children.length; i++) {
 	children[i].onclick = push_me;} 

 var count_clicks = 0;
 var lucy1 = '';
 var lucy2 = '';
 // 
 function push_me() 
 	{
 		if((count_clicks<2)&&(this.className!=='children show_me'))
 		{
	 		count_clicks++
	 		this.classList.add('show_me');
	 		
 			if(count_clicks===1)
 			{
 				lucy1 = this.style.backgroundImage;
 				
 			}else
 			{
 				lucy2 = this.style.backgroundImage;
 				
 				if(lucy1===lucy2)
 				{
 					
 					console.log('mutch');
 					mutches++;
 					if(mutches*2===parent.length){
 						for (var i = 0; i < parent.length; i++) {
 							parent[i].style.width = 0;
 							parent[i].style.heght = 0;
 							parent[i].style.border = 0;
 							conteiner.style.backgroundImage = 'url(images/cont.jpg)';


 						}
 					}
 					console.log(mutches);
 					check_elements(lucy2);

 				}else
 					{
 						console.log('miss');
 						setTimeout(function () 
 						{
 							for (var i = 0; i < children.length; i++) 
 							{
								if(children[i].className !== 'children show_me mutch')
								{
									children[i].classList.remove('show_me');
								}
							}
						},1000);
 					}
 				count_clicks = 0;
 				
 			}
 	}
}
//проверка всех элементов на нужный background.
function check_elements(backgroundImage) 
{
	for (var i = 0; i < children.length; i++) 
	{
		if(children[i].style.backgroundImage == backgroundImage)
		{
			children[i].classList.add('mutch');
		}
	}
}


