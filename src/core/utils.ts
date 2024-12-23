import fs from 'fs';
import csv from 'csv-parser';
import Table from 'cli-table3';

export async function readCSV(filePath: string): Promise<Table.Table | string> {
  return new Promise((resolve, reject) => {
    const rows: any[] = [];
    const table = new Table();

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => rows.push(row))
      .on('end', () => {
        if (rows.length > 0) {
          // Add headers
          table.options.head = Object.keys(rows[0]);
          // Add rows
          rows.forEach((row) => table.push(Object.values(row) as any));
          resolve(table);
        } else {
          resolve('The CSV file is empty.');
        }
      })
      .on('error', (error) => reject(error));
  });
}
