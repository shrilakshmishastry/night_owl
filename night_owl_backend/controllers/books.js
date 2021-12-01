const db =  require('../config/dbconfig');


// get all books

const getAllBooks = async (request,response)=>{
    try{
        const res = await  db.query(`select * from dev.books`);
        response.status(res.statusCode).json(res.data);
    }catch(e){
        response.status(500).json(e);
    }
}

const getById = async (request,response)=>{
    
    try{
        const res = await  db.query(`select * from dev.books where id="${request.params.id}"`);
        const res_rating = await db.query(`select * from dev.ratings where book_id="${request.params.id}"`)
        
        response.status(res.statusCode).json({
            book_details:res.data,
            rating: res_rating.data
            });
    }catch(e){
        response.status(500).json(e);
    }
}

const addBook = async (request,response)=>{
    
    const{
        title,
        author_name,
        categories,
        cover,
        description,
        isbn,
        pages,
        website} = request.body;
    try{
        const category_ID = await db.query(`
        select id from dev.categories where name = "${categories}"
        `);
       
        const res = await db.query(
           ` 
           insert into dev.books 
            (title,author_name,categories,cover,description,isbn,pages,website,category_ID)
            value
            (
                "${title}",
            "${author_name}",
            "${categories}",
            "${cover}",
            "${description}",
            ${isbn},
            ${pages},
            "${website}",
            "${category_ID.data[0].id}"
            )
            `
            )
        const book_id = await  db.query(`select id from dev.books where title = "${title}"`);            
 
        const res_rating = await db.query(`
            insert into dev.ratings (book_id,rating,user_id)
            value
            (
                "${book_id.data[0].id}",
                5,
                "bb526423-eeb8-4dc8-8d88-288fe6f01ff1"
            )
        `)
        
        response.status(res.statusCode).json({"book_id":book_id.data[0].id});
    }catch(e){     
        
        response.status(500).json(e);
    }
}

module.exports={
    getAllBooks,
    getById,
    addBook
}