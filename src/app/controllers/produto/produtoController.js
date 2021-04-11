import Produto from '../../models/Produto';

class produtoController{
    async create(req, res){
        // res.json({
        //     mesage:'Deus é bom'
        // })
        try {
            const {...data} = req.body;
            const produto = await Produto.create({
                ...data
            });
            return res.json(produto);

        } catch (error) {
            console.log(error);
            return res.status(500);
            
        }
     };
     async list(req, res){
        const produto = await Produto.findAll();
        res.json(produto); 
     };
     async listIndex(req, res){
        const produto = await Produto.findOne({
            where: {
                id:req.params.id
            }
        });
        res.json(produto); 
     };

     async delete(req, res){
         try {
            const produto = await Produto.findOne({
                where: {
                    id:req.params.id
                }
            });
            produto.update({
                deleted_at:new Date()
            })
            res.json(produto); 
         } catch (error) {
             res.json({
                 mesage:'pdoruto não encontrato'
             })

         }
     };

     async update(req, res){
        try {
            const {
                ...date
            }
            = req.body 
            const produto = await Produto.findOne({
                where: {
                    id:req.params.id
                }
            });
            produto.update({
                ...date
            })
            res.json(produto); 
         } catch (error) {
             res.json({
                 mesage:'não foi possivel realizar a alteração'
             })

     };
    }
}

export default new produtoController();