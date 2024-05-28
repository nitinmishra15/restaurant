import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req,res,next) =>{
  const { firstName,lastName,email,phone,date,time}=req.body;
  if(!firstName || !lastName || !email || !phone || !date || !time){
    return next(new ErrorHandler("Please fill full reservation form !",400));
  }
  // console.log(`abcdef`);
  try{
    const newReservation=new Reservation({firstName,lastName,email,phone,date,time});
    await newReservation.save();
    // await Reservation.create(firstName,lastName,email,phone,date,time);
    // console.log(`pqrs`);
    res.status(201).json({
      success:true,
      message:"Reservation Sent Successfully!",
    });
  } catch(error){
    if(error.name==="validationError"){
      // console.log(`jkli`);
      const validationErrors=object.values(error.errors).map(err=>err.message);
      return next (new ErrorHandler(validationErrors.join(" ,"),400))
    }
    return next(error);
  }
}