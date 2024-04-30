import { Resolver } from "dns";
import fs from "fs";
import { resolve } from "path";

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        try {
          const jsonData = JSON.parse(data);
          const result = {};

          for (const field in jsonData) {
            result[field] = jsonData[field].map(
              (students) => students.firstname
            );
          }
          resolve(result);
        } catch (parseError) {
          reject(parseError);
        }
      }
    });
  });
}
