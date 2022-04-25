export default (sequelize, type) => {
    return sequelize.define('film', {
        id: {
            type:type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING,
        description: type.STRING(1234),
        score: type.INTEGER,
        director: type.STRING
    })
}