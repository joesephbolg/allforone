let menu = document.queryselector('#menu-icon');
let navlist = document.queryselector('.navlist');

menu.onclick = ()=> {
	menu.classlist.toggle('bx-x')
	navlist.classlist.toggle('open');
};

window.onscroll = () => {
	menu.classlist.remove('bx-x');
	navlist.classlist.remove('open');
};
