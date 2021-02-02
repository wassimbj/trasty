function authSocketConnection(userid, next){
  if(!userid){
    next(new Error('unauthorized'))
  } else {
    next();
  }
}

export default authSocketConnection;
