switch(req.body.opt) {
    case 'signin':
		var userinfo = {uid: 1, user:'john shu', token:'1212', command:req.body};
		res.send(userinfo); 
        break;
    case 'signout':
		res.send(true);
        break;		
    default:
        res.send(true);
}
