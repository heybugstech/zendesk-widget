import * as fs from 'fs';
import * as path from 'path';

function deleteFolderRecursively(folder: string, fileWhitelist: string[]) {
  const folderWithPath = path.resolve(folder);

  // Does folder exist
  fs.stat(folderWithPath, (err) => {
    if (err) throw new Error(`"${folderWithPath}" does not exist`);
  });

  // Loop through all files and folders
  fs.readdir(folderWithPath, (err, files) => {
    if (err) throw new Error(err.toString());

    // Recursively delete all files and folder not in the whitelist
    for (const file of files) {
      if (!fileWhitelist.includes(file)) {
        const fullPath = folderWithPath + '/' + file;
        fs.rm(fullPath, { recursive: true }, () => {
          console.log(`Recursively delete files in ${fullPath}`);
        });
      }
    }
  });
}

const assetWhileListedFiles = ['zendesk_client_sdk.js'];
const assetDir = 'widget/assets/js';

deleteFolderRecursively(assetDir, assetWhileListedFiles);
