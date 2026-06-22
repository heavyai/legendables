# legendables

# Third-party vendor licenses

A full list of third-party npm packages and their licenses is maintained in [`license/THIRD_PARTY_LICENSES.md`](license/THIRD_PARTY_LICENSES.md). To regenerate it after dependency changes, run:

```sh
node scripts/generate-third-party-licenses.js
```

This requires `node_modules` to be installed (`npm install`) and uses the `license-checker` devDependency to scan the installed environment.

Every third-party module from npm that gets includes in the final, distributed bundle has its license verified and license text (if provided) or license type shipped in licenses.txt with the bundle. Licenses must be in the pre-approved list of permissive open-source licenses. If it's necessary to override a license for a module because it's missing or improperly tagged in its package.json, add an entry in license-overrides.json.

License descriptions and public license URLs are maintained in licenses.json as well, but they are not verified and might not be up to date.

