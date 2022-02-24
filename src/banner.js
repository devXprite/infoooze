import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import PromptSync from "prompt-sync";

import userrecon from "./userrecon.js";

var i = 1;
const prompt = PromptSync();
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const list = async (name, description) => { await sleep(30); console.log(`\t\t ${chalk.cyan(i++)} ${chalk.whiteBright(name)} \t ${chalk.blackBright(description)}`); }

const takeOption = () => {
    var selectedOption = prompt(`\t\t ${'>'.cyan} ${'Your Option'.bold} : `);
    switch (selectedOption) {
        case '1':
            userrecon()
            break;

        default:
            takeOption();
            break;
    }
}

export async function banner() {
    console.clear();
    chalkAnimation.neon(`
\t\t       |.---------------.|
\t\t       ||               ||
\t\t       ||   -._ .-.     ||
\t\t       ||   -._| | |    ||
\t\t       ||   -._|"|"|    ||
\t\t       ||   -._|.-.|    ||
\t\t       ||_______________||
\t\t       /.-.-.-.-.-.-.-.-.\\
\t\t      /.-.-.-.-.-.-.-.-.-.\\
\t\t     /.-.-.-.-.-.-.-.-.-.-.\\
\t\t    /______/__________\\___o_\\ 
\t\t    \\_______________________/
    
    `, '2');

    await sleep(200);
    console.log(`\t\t A tool by ${'7ORP3DO'.cyan} & ${'Biswajeet'.cyan} `);
    await sleep(100);
    
    console.log('\t     ' + ' Choose number or type exit fir exiting '.bgWhite.black + '\n\n');
    await list("Userrexon", 'lorem text');
    await list("Facedumper", 'Dump facebook information');
    await list('Mailfinder', 'find email with name');
    await list('Gogle Dork', 'Dorking with google search');
    await list('Phoneinfo', 'Phone Number Information');
    await list('Phoneinfo', 'Phone Number Information');
    await list('Phoneinfo', 'Phone Number Information');
    console.log('\n');
    takeOption();
}



export default banner;
