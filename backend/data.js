import bcrypt from 'bcryptjs';
const data = {
    users : [
        {
            name : 'Billie',
            email : 'admin@genarbil.com',
            password : bcrypt.hashSync('1234', 8),
            isAdmin : true
        },
        {
            name : 'John',
            email : 'user@example.com',
            password : bcrypt.hashSync('1234', 8),
            isAdmin : false
        },
    ],
    products : [
        {
            name : 'Nike Slim Shirt',
            category : 'Shirts',
            image : '/images/p1.jpg',
            price : 120,
            countInStock : 10,
            brand : 'Nike',
            rating : 4.5,
            numReviews : 10,
            description : 'High Quality Product'
        },
        {
            name : 'Adidas Fit Shirt',
            category : 'Shirts',
            image : '/images/p2.jpg',
            countInStock : 20,
            price : 100,
            brand : 'Adidas',
            rating : 4.0,
            numReviews : 10,
            description : 'High Quality Product'
        },
        {
            name : 'Lacoste Free Shirt',
            category : 'Shirts',
            image : '/images/p3.jpg',
            countInStock : 0,
            price : 220,
            brand : 'Lacoste',
            rating : 4.8,
            numReviews : 17,
            description : 'High Quality Product'
        },
        {
            name : 'Nike Slim Pant',
            category : 'Pants',
            image : '/images/p4.jpg',
            price : 78,
            countInStock : 15,
            brand : 'Nike',
            rating : 4.5,
            numReviews : 14,
            description : 'High Quality Product'
        },
        {
            name : 'Puma Slim Pant',
            category : 'Pants',
            image : '/images/p5.jpg',
            price : 65,
            countInStock : 5,
            brand : 'Puma',
            rating : 4.2,
            numReviews : 8,
            description : 'High Quality Product'
        },
        {
            name : 'Adidas Fit Pant',
            category : 'Pants',
            image : '/images/p6.jpg',
            price : 80,
            countInStock : 15,
            brand : 'Adidas',
            rating : 4.7,
            numReviews : 30,
            description : 'High Quality Product'
        }
    ]
}

export default data;