function formValidator()
{
	var x1=commonValidator("Please enter only letters for your name",/^[a-zA-Z ]{2,30}$/,document.getElementById('txtName'),document.getElementById('ptxtName'));
	var x2=commonValidator("Please enter only digits and forwardslash",/(\d+)(-|\/)(\d+)(?:-|\/)(?:(\d+)\s+(\d+):(\d+)(?::(\d+))?(?:\.(\d+))?)?/,document.getElementById('txtDob'),document.getElementById('ptxtDob'));
	var x3=commonValidator("Please enter phone no. in format as statecode+phoneno with no space",/^[(]{0,1}[0-9]{4}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,document.getElementById('txtPhone'),document.getElementById('ptxtPhone'));
	var x4=commonValidator("Please enter mobile no. in format as +91-10 Digits",/^\+\d{1,3}-\d{9,10}$/,document.getElementById('txtMobile'),document.getElementById('ptxtMobile'));
	var x5=commonValidator("Please enter the text only",/^[-\sa-zA-Z]+$/,document.getElementById('txtAboutMe'),document.getElementById('ptxtAboutMe'));
	var x6=commonValidator("Please enter address1 in text form",/^[a-z\d\-_\s]+$/i,document.getElementById('txtAddress1'),document.getElementById('ptxtAddress1'));
	var x7=commonValidator("Please enter address2 in text form",/^[a-z\d\-_\s]+$/i,document.getElementById('txtAddress2'),document.getElementById('ptxtAddress2'));
	var x8=commonValidator("Please write city name in alphabetic format",/^[a-zA-Z]+$/,document.getElementById('txtCity'),document.getElementById('ptxtCity'));
	var x9=commonValidator("Please enter the pin code in a numeric format",/^\d{6,10}$/,document.getElementById('txtZip'),document.getElementById('ptxtZip'));
	if(x1 && x2 && x3 && x4 && x5 && x6 && x7 && x8 && x9){
		return true;
	}
	else{
		return false;
	}
	function commonValidator(dispMsg, regEx, elem, pelem){
		if(elem.value.match(regEx)){
			pelem.innerHTML="";
			elem.focus();
			return true;
		}
		else{
			pelem.innerHTML=dispMsg;
			pelem.style.color='red';
			elem.focus();
			return false;
		}	
	}
}
	