require

module.exports = function (sequelize, DataTypes) {
    var member = sequelize.define("member", {
        fName: DataTypes.STRING,
        lName: DataTypes.STRING,
        callsign: DataTypes.STRING,
        license: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        address1: DataTypes.STRING,
        address2: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zipcode: DataTypes.STRING,
        expDateMonth: DataTypes.INTEGER,
        expDateYear: DataTypes.INTEGER
    });

    // Member.associate = function (models) {
    //     // Associating Member with Posts
    //     // When an Member is deleted, also delete any associated Posts
    //     Member.hasMany(models.Post, {
    //         onDelete: "cascade"
    //     });
    // };

    return member;
};
