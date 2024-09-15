import jwt from "jsonwebtoken";
export const isAuthorised = async (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        // console.log("is auth "+token.uid);

        req.id = decoded.uid;
        next();
    } catch (error) {
        console.log(error+" isaut")
    }
}