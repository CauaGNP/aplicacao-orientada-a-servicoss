export default function basicMiddleware(req, res, next){
    console.log(`${req.method}, ${req.path}, ${req.ip}`);
    next();
}