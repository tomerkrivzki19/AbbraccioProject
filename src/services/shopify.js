// TODO: use Graph ql for all of the setup here
// Prodcts section
const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;

const STOREFRONT_ACCESS_TOKEN = import.meta.env
  .VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const SHOPIFY_API_URL = `https://${SHOPIFY_DOMAIN}/api/2024-07/graphql.json`;

const headers = {
  "Content-Type": "application/json",
  "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
};

// * Create a get first | top 5 req - FIXME: make it 4 or 5 check when the products are ready
export async function getTop5Products() {
  try {
    const query = `
          {
            products(first: 5) {
              edges {
                node {
                  id
                  title
                  handle
                  description
                  images(first: 1) {
                    edges {
                      node {
                        url
                        altText
                      }
                    }
                  }
                  variants(first: 1) {
                    edges {
                      node {
                        price {
                          amount
                          currencyCode
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `;

    const res = await fetch(SHOPIFY_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({ query }),
    });

    const json = await res.json();
    console.log("data recived from shopify ", json);

    return json.data.products.edges.map((edge) => edge.node);
  } catch (error) {
    console.log(error);
    // return error;
  }
}
// * Create a get all products req
export async function getAllProducts() {
  try {
    const query = `
          {
            products(first: 250) {
              edges {
                node {
                  id
                  title
                  handle
                  description
                  images(first: 1) {
                    edges {
                      node {
                        url
                        altText
                      }
                    }
                  }
                  variants(first: 1) {
                    edges {
                      node {
                        price {
                          amount
                          currencyCode
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `;

    const res = await fetch(SHOPIFY_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({ query }),
    });

    const json = await res.json();

    console.log(
      "data recived from shopify",
      json.data.products.edges.map((edge) => edge.node)
    );

    return json.data.products.edges.map((edge) => edge.node);
  } catch (error) {
    console.log(error);
  }
}

// * Create a get one current products by id req
export async function getProductById(productId) {
  try {
    const query = `
          query getProduct($id: ID!) {
            node(id: $id) {
              ... on Product {
                id
                title
                handle
                description
                images(first: 5) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
                variants(first: 5) {
                  edges {
                    node {
                      title
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        `;

    const res = await fetch(SHOPIFY_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables: { id: productId },
      }),
    });

    const json = await res.json();

    console.log("data recived from shopfiy", json.data.node);

    return json.data.node;
  } catch (error) {
    console.log(error);
  }
}
// FIXME: importent note💡 Product IDs must be in GID format, e.g., "gid://shopify/Product/1234567890".

// * Cart section - after building a cart componenet

// * add to cart
// * remove from cart
// * quantity addon/removal on cart
