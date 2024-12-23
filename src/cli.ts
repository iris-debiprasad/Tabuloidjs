#!/usr/bin/env node
import { program } from 'commander';
import kleur from 'kleur';
import { startRepl } from './repl';

// Define CLI commands
// program
//     .name('tabuloidjs')
//     .description('Headless pivot table REPL and importable library')
//     .version('1.0.0')
//     .option('-r, --repl', 'Start REPL mode')
//     .parse(process.argv);

// // Handle commands
// if (program.opts().repl) {
//     console.log(kleur.white().bold().bgBlue('Starting TabuloidJS 🔥'));
//     startRepl();
// } else {
//     console.log(kleur.yellow().bold().underline('Use `tabuloidjs --repl` to start the REPL.'));
// }

console.log(kleur.white().bold().bgBlue('Starting TabuloidJS 🔥'));
startRepl();
