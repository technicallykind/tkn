## The Token Name Service

Getting started:  

Run `npm i tkn` from the command line   

then:   
```
import { tkn } from 'tkn';
const data = await tkn.fetch('eth');
```

---
Developing:   
`npm i`  
`npm test`

---
Publishing:   
Update version in `package.json`   
`git commit -m "message"`
`npm login`
`git tag <v0.1.0 (version label)> <1f2d3a4 (commit sha)>`
`git push origin --tags`
`npm publish`

