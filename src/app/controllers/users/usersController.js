import User from '../../models/User';

class userController{
    async create(req, res){
        // res.json({
        //     mesage:'Deus é bom'
        // })
        try {
            const {
                ...data
            } = req.body;
            const user = await User.create({
                ...data
            });
            return res.json(user);

        } catch (error) {
            return res.status(500);
            console.log(error);
        }
    };
}

export default new userController();