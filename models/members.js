module.exports = function (sequelize, DataTypes) {
    var member = sequelize.define("member", {
        fName: DataTypes.STRING,
        lName: DataTypes.STRING,
        callsign: DataTypes.STRING,
        streetAddress: DataTypes.STRING,
        city: DataTypes.STRING,
        email: DataTypes.STRING,
        expDate: DataTypes.DATE
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
