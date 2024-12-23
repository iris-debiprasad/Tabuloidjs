import * as readline from 'readline';
import kleur from 'kleur';
import vm from 'vm';
import { help } from './core/help';
import { Tabuloid } from './core';
import { readCSV } from './core/utils';

const dataFrame = new Tabuloid("TabuloidJS", "1.0.0")

export async function startRepl(): Promise<void> {
  const context = vm.createContext({ Tabuloid: dataFrame, readCSV }); // Expose object in the REPL context

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: kleur.cyan('tabuloidjs> '),
  });

  console.log(kleur.green().bold('Welcome to TabuloidJS REPL. Type `.exit` to quit.'));
  console.log(kleur.yellow('You can access `Tabuloid` directly.'));

  rl.prompt();

  rl.on('line', async (line) => {
    const input = line.trim();

    if (input === '.exit') {
      console.log(kleur.magenta('Goodbye!'));
      rl.close();
      return;
    }

    if (input === 'help') {
      console.log(help())
      rl.close();
      return;
    }

    try {
      const result = await vm.runInContext(input, context); // Evaluate input in the custom context
      console.log(kleur.blue(result));
    } catch (error: any) {
      console.error(kleur.red(`Error: ${error.message}`));
    }

    rl.prompt();
  });

  rl.on('close', () => {
    console.log(kleur.magenta('Exiting TabuloidJS REPL.'));
    process.exit(0);
  });
}

