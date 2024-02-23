const User = function (sequelize,DataTypes){
    return sequelize.define(
        'user',{
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey:true,
                autoIncrement:true,

            },//userid VARCHAR(20) NOT null
            userid:{
                type:DataTypes.STRING(20),
                allowNull:false,
            },//name VARCHAR(20) NOT null
            name:{
                type:DataTypes.STRING(20),
                allowNull:false,
            },//pw VARCHAR(20) NOT null
            pw:{
                type:DataTypes.STRING(20),
                allowNull:false,
            },
             },{
                tableName:'user',
                freezeTableName:true,
                timestamps: false,
             }   );
}
module.exports=User;



