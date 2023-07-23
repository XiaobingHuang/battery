const { S3Client, GetObjectCommand,PutObjectCommand } = require("@aws-sdk/client-s3");
const { CloudFrontClient, CreateInvalidationCommand } = require("@aws-sdk/client-cloudfront")
const fs = require('fs');

// Set the AWS Region.
const REGION = "us-east-1"; //e.g. "us-east-1"
// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION });
const cloudFrontClient = new CloudFrontClient({region: REGION});
const fn =async () => {
	const params = {
		Bucket: "arctrade-assets", // The name of the bucket. For example, 'sample_bucket_101'.
		Key: "mit/import-map.json", // The name of the object. For example, 'sample_upload.txt'.
	}

	const command = new GetObjectCommand(params);
	const response = await s3Client.send(command);
	const xc = await response.Body.transformToString()
	const importMap= JSON.parse(xc)

	fs.readdir("./dist", async (err, files) => {
		let newFileName = ""
		files.forEach(file => {
			const f = file.split(".")
			const fileName = f[0]
			const fileType= f[f.length - 1]
			if(fileName === "arctrade-retail-broker" && fileType === "js"){
				newFileName = file
			}
		});


		importMap["imports"]["@arctrade-retail/broker"] = "https://cdn.arctrade.com/mit/" + newFileName


		var data = new Buffer(JSON.stringify(importMap), 'utf-8');
		params["Body"] = data
		const putCommand = new PutObjectCommand(params);
		const putResponse = await s3Client.send(putCommand);

		const invalCommand = new CreateInvalidationCommand({
			DistributionId:"E1WO99OLFNHQOS",
			InvalidationBatch: {
				CallerReference: String(new Date().getTime()),
				Paths: {
					Quantity: 1,
					Items: ["/mit/*"]
				}
			}
		});
		const invalResponse = await cloudFrontClient.send(invalCommand)

		const m =""
		await fs.writeFile('./dist/import-map.json', JSON.stringify(importMap), () => {
			const t = ""
		} );
		const mas =""
	});
}
fn()