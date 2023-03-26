const studentsMiddleware = {
    acceptWrite: (req, res, next) => {
        try {
            let user = {
                id: '1232',
                role: 'adsak'
            }
            if (user.role !== 'ADMIN') throw new Error('Không được phép!');
            next();
        } catch (error) {
            res.status(403).send({
                message: 'Thất bại!',
                error: error.message
            })
        }
    }
}
export default studentsMiddleware;