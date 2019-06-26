
// Imports the Google Cloud client library.
const {Storage} = require('@google-cloud/storage');

// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://github.com/GoogleCloudPlaatform/google-cloud-node/blob/master/docs/authentication.md
// const projectId = 'project-id'
// const keyFilename = '/path/to/keyfile.json'
const storage = new Storage({projectId, keyFilename});

// Makes an authenticated API request.
try {
  const [buckets] = await storage.getBuckets();

  console.log('Buckets:');
  buckets.forEach(bucket => {
    console.log(bucket.name);
  });
} catch (err) {
  console.error('ERROR:', err);
}


async function quickstart() {
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Instantiates a client
  const client = new language.LanguageServiceClient();

  // The text to analyze
  const text = 'Hello, world!';

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({document: document});
  const sentiment = result.documentSentiment;

  console.log(`Text: ${text}`);
  console.log(`Sentiment score: ${sentiment.score}`);
  console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
}

quickstart().catch(console.error);