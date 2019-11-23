// //const mongoose = require ('mongoose');
// //const Loc = mongoose .model ('Location');

// const reviewsCreate = function (req, res) {
//     const locationid = req.params.locationid;
//     if (locationid) {
//         Loc
//             .findById (locationid ) 
//             .select ('reviews' ) 
//             .exec((err, location) => {
//                 if(err) {
//                     res.status(400).json(err);
//                 } else{
//                   _doAddReview (req, res, location);
//                 }
//         });
// }else{
//     res.status(404).json({"message" : "Not found, locationid required"});
// }
// };





// module.exports.locationsCreate = function (req, res) {
//     res.status(200);
//     res.json({"message" : "success"});
//     };
    
// var sendJsonResponse = function(res, status, content) {
//         res.status(200).json({"message" : "success"});
//         }; 


