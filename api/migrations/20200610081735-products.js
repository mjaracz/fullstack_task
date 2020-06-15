module.exports = {
  async up(db) {
    db.collection('Products').insertMany([
      {
        productId: 1,
        name: "sofa",
        price: 1200,
        quantity: 200,
        description: "We have perfect blue furniture in magazine",
        currency: {
          baseCurrency: "PLN",
          currency: "EUR",
          worth: 0.2249010435
        },
        type: "furniture"
      },
      {
        productId: 2,
        name: "dresser",
        price: 800,
        quantity: 20,
        currency: {
          baseCurrency: "PLN",
          currency: "EUR",
          worth: 0.2249010435
        },
        type: "furniture"
      },
      {
        productId: 3,
        name: "chair",
        price: 350,
        quantity: 20,
        description: "Chairs, unlimited edition",
        currency: {
          baseCurrency: "PLN",
          currency: "EUR",
          worth: 0.2249010435
        },
        type: "furniture"
      },
      {
        productId: 4,
        name: "pillow",
        price: 30,
        quantity: 300,
        currency: {
          baseCurrency: "PLN",
          currency: "EUR",
          worth: 0.2249010435
        },
        type: "additional"
      },
      {
        productId: 5,
        name: "sofa red",
        price: 1200,
        quantity: 200,
        description: "We have perfect red furniture in magazine",
        currency: {
          baseCurrency: "PLN",
          currency: "EUR",
          worth: 0.2249010435
        },
        type: "furniture"
      },
      {
        productId: 6,
        name: "dresser yellow",
        price: 800,
        quantity: 20,
        currency: {
          baseCurrency: "PLN",
          currency: "EUR",
          worth: 0.2249010435
        },
        type: "furniture"
      },
      {
        productId: 7,
        name: "old wood chair",
        price: 350,
        quantity: 20,
        description: "Chairs, unlimited wood edition",
        currency: {
          baseCurrency: "PLN",
          currency: "EUR",
          worth: 0.2249010435
        },
        type: "furniture"
      },
      {
        productId: 8,
        name: "sofa pillow",
        price: 30,
        quantity: 300,
        currency: {
          baseCurrency: "PLN",
          currency: "EUR",
          worth: 0.2249010435
        },
        type: "additional"
      },
      {
        productId: 9,
        name: "lamps blue",
        price: 20,
        quantity: 250,
        currency: {
          baseCurrency: "PLN",
          currency: "EUR",
          worth: 0.2249010435
        },
        type: "lamps"
      },
      {
        productId: 10,
        name: "lamps yellow",
        price: 25,
        quantity: 250,
        currency: {
          baseCurrency: "PLN",
          currency: "EUR",
          worth: 0.2249010435
        },
        type: "lamps"
      },
      {
        productId: 11,
        name: "lamps red",
        price: 30,
        quantity: 250,
        currency: {
          baseCurrency: "PLN",
          currency: "EUR",
          worth: 0.2249010435
        },
        type: "lamps"
      },
      {
        productId: 12,
        name: "lamps green",
        price: 15,
        quantity: 250,
        currency: {
          baseCurrency: "PLN",
          currency: "EUR",
          worth: 0.2249010435
        },
        type: "lamps"
      }
    ])
  },
  async down(db) {
    db.collection('Products').remove({})
  }
};
