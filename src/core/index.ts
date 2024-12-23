import { Table } from "cli-table3";
import { readCSV } from "./utils";
import kleur from "kleur";

export class Tabuloid {
  name: string;
  version: string;
  private data: Table | undefined;
  constructor(name: string, version: string) {
    this.name = name;
    this.version = version;
  }
  /**
   *  update table data
   */
  set tableData(data: any) {
    this.tableData = data;
  }

  /**
   * Read all table data
   */
  get tableData() {
    return this.data?.slice(0, 10);
  }

  async loadCSV(path: string) {
    const dataT = await readCSV(path);
    this.data = dataT as Table;

    return "Data loaded successfully!! 😎"
  }

  head(row?: string) {
    if (this.data) {
      if (row) {
        return this.data.slice(0, parseInt(`${row}`))
      } else {
        return this.data.slice(0, 10)
      }
    }
  }

  help() {
    return kleur.yellow(`
      Commands:
        ${kleur.white().bold().bgBlue('Tabuloid')} 
        ${kleur.cyan('1. loadCSV -- Load the csv file data to data frame')}
        ${kleur.cyan('2. get tableData -- Print top 10 data from data drame')}
        ${kleur.cyan('3. set tableData -- set data to data frame')}
        ${kleur.cyan('4. head -- get table data based on row count')}
    `);
  }


}