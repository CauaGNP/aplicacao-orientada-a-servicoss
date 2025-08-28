export default function basicMidleware (req,res,next) {
    console.log(`${req.method} - ${req.path} - ${req.ip} - ${req.statusCode}`);
    next();
}