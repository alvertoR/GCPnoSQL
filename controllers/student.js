import student from '../models/studen';

var Controller = {

    getStudents: async(req,res) => {
        
        try{
            const getStudents = await student.find();

            if(getStudents){
                return res.status(200).json(getStudents);
            }
    
            return res.status(400).json({
                message:'Not Students'
            });
        }catch(err){
            return res.status(500).json({
                message:'Server Error'
            });
        }
        
    },

    addStudent: async(req,res) => {
        const body = {
            nombre: req.body.nombre,
            edad: req.body.edad
        };

        try{
          const  addStudent = await student.create(body);
          
          if(addStudent){
              return res.status(200).json({
                  message: 'Student created',
                  date: addStudent
              })
          }

          return res.status(400).json({
            message:'Student not created'
            });

        }catch(err){
            return res.status(500).json({
                message:'Server Error'
            });
        }
    }
};

export default Controller;