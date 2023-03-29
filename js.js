const { Client } = require("@notionhq/client")

// Initializing a client
const main = async () => {
    const notion = new Client({
        auth: `secret_r4N0Pq1E7Ufyd1h8FYnfmIgOd52nyRzv9d2Mpzde79g`,
    })
      
    const listUsersResponse = await notion.users.list({})
    console.log(listUsersResponse)
}

main();