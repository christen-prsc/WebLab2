        let text
        do{
            text = prompt('Введите ваше имя:')
            if(text==false||text==null){
                continue
            }
        } while(text==true||text===null||text==='')
		let arr = text.split(';'); //split делит строку 
		for(let i=0; i<arr.length; i++) {
			document.write(arr[i] + "<br \/>");
		}	