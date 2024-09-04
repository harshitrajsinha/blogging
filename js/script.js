let proxy_server_data = {};
proxy_server_data.request_url = `items`;
proxy_server_data.method = "POST";
proxy_server_data.body = JSON.stringify({
                    isArchived: false,
                    isDraft: true,
                    fieldData: {
                        "name": "Form 8",
                        "slug": "form-8",
                        "contact-email": "asdfgh@gmail.com",
                        "3pl-name": "asdfsdf",
                        "full-name": "asdfghjk",
                        "designation": "sdfsdf",
                        "website": "www.google.com",
                        "description": "asdf",
                        "sellers": "FBA only",
                        "software-automation-tool": "sdfsdf",
                        "learn-more": "Yes",
                        "number-of-owned-warehouses": "2",
                        "number-of-non-owned-warehouses": "2",
                        "locations-of-warehouses": "sdfsdf",
                        "total-available-warehouse-space": "2",
                        "contact": "999999999999999@sdf.com",
                        "consent": true,
                        "specialized-services": [
                            "Food & Beverages",
                            "Miscellaneous"
                        ],
                        "industry": [
                            "Food & Beverages",
                            "Miscellaneous"
                        ],
                        "e-commerce-channels": [
                            "Etsy",
                            "eBay"
                        ],
                        "capabilities": [
                            "Ecommerce Fulfillment",
                            "Kitting & Assembly "
                        ]
                    }
                });

const check = JSON.stringify(proxy_server_data);
console.log(check);