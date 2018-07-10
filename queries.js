//db.notes.find().pretty();

//db.notes.find({}, {content:1, title:1}).pretty();

//db.notes.find({}, {content: 1, title: 1, _id: 0}).pretty();
//db.notes.find({}, { title: 1, _id: 0}).sort({_id: -1}).pretty();


//Write a MongoDB query to display all the documents in the collection notes.

//Write a MongoDB query to display all the documents in the collection notes and format the results to be 'pretty'.

//Write a MongoDB query to display the fields title and content for all the documents in the collection notes.

//Write a MongoDB query to display the fields title and content but exclude the field _id for all the documents in the collection notes.

//Write a MongoDB query to display only the title field for all the documents in the collection notes and sort the results by _id in descending order.

//Write a MongoDB query to display all the documents from the collection notes which contain the title '5 life lessons learned from cats'.

//db.notes.find({title: "5 life lessons learnes from cats"}).pretty();

//Write a MongoDB query to display the first 5 documents from the collection notes.
//db.notes.find().limit(5).pretty();
//Write a MongoDB query to display the next 5 documents from the collection notes after skipping the first 5.

//db.notes.find().skip(5).limit(5).pretty();


//Write a MongoDB query to display the total number of documents in the collection notes.

//db.notes.find().count();



//Write a MongoDB query to display the documents from the collection notes which have an _id that is greater than "000000000000000000000007".

//db.notes.find({_id: {$gt: "000000000000000000000007"}}).pretty();


//Write a MongoDB query to display the documents from the collection notes which have an _id which is greater than or equal to "000000000000000000000009" but less than or equal to "000000000000000000000017".


//db.notes.find({_id: { $gt:"000000000000000000000009", $lt:"000000000000000000000017"}}).pretty();



//Write a MongoDB query to display the documents from the collection notes which have an _id which is less than or equal to "000000000000000000000007".

//db.notes.find({_id: { $lte:"000000000000000000000007"}}).pretty();


//Write a MongoDB query to display only one document from the collection notes.

//db.notes.findOne();

//Write a MongoDB query to display only the title of one document from the collection notes (_id can be included).
//db.notes.findOne({}, {title: 1});


//Write a MongoDB query to display only the title of one document from the collection notes (_id excluded).

//db.notes.findOne({}, {title: 1, _id:0});



//Write a MongoDB query to insert one document into the collection notes. The title and content fields can be whatever you like.

//var lastNote = {
//     title: "Jimminiy",
//     content: "crickety"
// };
// db.notes.insertOne(lastNote);
//Write a MongoDB query to insert two note documents into the collection notes. The title and content fields can be whatever you like.

// var lastNote = {
//     title: "Jimminiy",
//     content: "crickety"
// };
// var firstNote = {
//     title: "Hibbidy",
//     content: "crickety"
// };

// db.notes.insertMany([lastNote, firstNote]);

//Write a MongoDB query to modify the title and content fields of the document from the collection notes with _id "000000000000000000000003". Change the title and content to be whatever you like.

//db.restaurants.updateOne({_id:  ObjectId("000000000000000000000003")}, {$set: {title: "Likkedy shwift"}}

//Write a MongoDB query to modify only the title field of the document from the collection notes with _id "000000000000000000000007". The content field should remain unchanged.

//Write a MongoDB query to modify the title and content fields of all the documents in the collection notes that have an _id field greater than "000000000000000000000014".


//  db.notes.update({
//      _id: {$gt:'000000000000000000000014'}
//  },{
//      $set:{title:"Ice Cream", content:"Salt Mine"}
//  },{
//      multi: true
//  });
//db.notes.find({_id:"000000000000000000000007"}).pretty();
//Write a MongoDB query to remove only the title field from the document in the collection notes with _id "000000000000000000000008".


//db.notes.update({_id:"000000000000000000000007"}, {$unset:{title:1}});
//Write a MongoDB query to remove the content fields from all documents in the collection notes with _id less than or equal to "000000000000000000000006".

// db.notes.update({
//     _id: {
//         $lte: "000000000000000000000006"}
// },{
//     $unset: {content:""}
// },{
//     multi: true

// });


//Write a MongoDB query to remove the title fields from all documents in the collection notes with _id less than or equal to "000000000000000000000003".
// db.notes.update({
//     _id:{
//         $lte: "000000000000000000000003"
//     }},
//     {$unset:{title:1}},
//     {
//     multi: true
// });


//Write a MongoDB query to remove the document from the collection notes that has an _id "000000000000000000000017".



//Write a MongoDB query to remove the documents from the collection notes that have an _id which is not less than "000000000000000000000018".

//Write a MongoDB query to remove the documents from the collection notes that have an _id which is greater than or equal to "000000000000000000000013" and contain the string 'dogs' in the title.

//   db.notes.deleteMany({
//     _id: { $gte: '000000000000000000000013'}, title: {$regex: /dogs/}
//  });


 //db.notes.find({title: {$regex: /dogs/}});
//Write a MongoDB query to display all the documents from the collection notes which do not have a title field.


 //db.notes.find({title: {$exists: false}}).pretty();


//Write a MongoDB query to remove all the documents from the collection notes which contain the string 'cat' in the title but not the string 'the'.

//db.notes.deleteMany({title: {$regex: /cat/i}}, {title: {$not: /the/i}});



//Write a MongoDB query to display all the documents from the collection notes that have a title field which does not contain the string 'dogs' and does contain a title field.
 db.notes.find({ $and: [{title: {$not: /dogs/i}}, {title: {$exists: true}}]}).sort({_id:1}).pretty();