
const reactCode = `const debouncedValidator = React.useMemo(() => debounce(validator, 1000), []);
const handleChange = async (name: string, value: any) => {
  setFormData({
    ...formData,
    ..._.set(formData, name, value),
  });
  const error = await debouncedValidator(formData, value, name);
};`

const sqlCode = `SELECT ID, NAME
FROM EMPLOYEES
WHERE ID = 1
LEFT JOIN SALARY ON SALARY.EMPLOYEEID = ID`

const angularCode = `const appRoutes: Routes = [];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes, withDebugTracing())],
});`

const nestjsCode = `import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();`

const nodejsCode = `import { readFile } from 'fs';
import { createServer } from 'http';

createServer((req, res) => {
  readFile(__dirname + req.url, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('404: File not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}).listen(8000);`

const mongodbCode = `db.movies.insertOne(
  {
    title: "The Favourite",
    rated: "R",
    year: 2018,
    directors: [ "Yorgos Lanthimos" ],
    cast: [ "Olivia Colman", "Emma Stone", "Rachel Weisz" ],
  }
)`

const awsCode = `aws ec2 describe-regions --query 'Regions[*].RegionName' | \
jq -r '.[]' | \
while read REGION
do
  echo ==== $REGION ====
  aws ec2 describe-prefix-lists \
    --region $REGION \
    --filters Name=prefix-list-name,Values=com.amazonaws.$REGION.s3 \
    --query 'PrefixLists[0].PrefixListId'
done`


export { reactCode, sqlCode, angularCode, nestjsCode, nodejsCode, mongodbCode, awsCode }