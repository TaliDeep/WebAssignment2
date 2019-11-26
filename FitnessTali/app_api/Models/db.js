var dbURI = 'mongodb://localhost/DbName';
mongoose.connect(dbURI);


const Schema = mongoose.Schema;
//Define a schema
const DefinedSchema = new Schema({
    author: Schema.ObjectId,
    name: String,
    description: String,
    exercise: String,
    repetitions: String
});

// const MyModel = mongoose.model('memocollection', DefinedSchema);
// MyModel.create({name: "memo", description: "han er sej", exercise: "faktisk er han kun lidt sej"});

// var comment = mongoose.model('memocollection', DefinedSchema);
// comment.find({name: 'memo'}, function(err, comments){
//     console.log(comments);
// })




mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
    });
    mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
    });
    mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
    });
    