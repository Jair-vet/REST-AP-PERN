import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

@Table({
    tableName: 'products',
})

class Product extends Model {
    @Column({
        type: DataType.STRING(100),
        allowNull: false, // Por ejemplo, añade opciones como allowNull si es necesario
    })
    nombre: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    precio: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Por ejemplo, añade defaultValue si es necesario
    })
    disponible: boolean;
}

export default Product
