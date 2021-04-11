import Sequelize, { Model, Op } from 'sequelize';
import 'dotenv/config';

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        preco: Sequelize.DOUBLE,
        deleted_at: Sequelize.DATE,
      },
      {
        defaultScope: {
          where: {},
        },
        scopes: {
          deleted: {
            where: {
              deleted_at: { [Op.ne]: null },
            },
          },
          active: {
            where: {
              deleted_at: null,
            },
          },
        },
        sequelize,
        tableName: 'produto',
      }
    );
return this;
  }}
export default Produto;
