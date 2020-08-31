import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    nombre: { type: String },
    edad:   { type: String }
});

const student = mongoose.model('Student', studentSchema);

export default student;