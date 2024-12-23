import kleur from "kleur";

export function help() {
    return kleur.yellow(`
        Commands:
          ${kleur.cyan('readCSV <file>')}  - Reads a CSV file and displays its content as a table.
          ${kleur.cyan('.exit')}          - Exits the REPL.
      `);
}