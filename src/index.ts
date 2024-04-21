import { intro, outro, confirm, select, spinner} from '@clack/prompts'


const s = spinner()

let shouldEnd = false


function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

intro("welcome to the salesforce account creation CLI tool")

const shouldContinue = await confirm({
    message: 'Would you like to use a JSON to create an account?',
});

while (shouldEnd == false) {
    const projectType = await select({
        message: 'Pick an account type.',
        options: [
          { value: 'With 3PP', label: 'Third Party Payer' },
          { value: 'With Dependant', label: 'Dependant' },
          { value: 'default', label: 'Default Account'}
        ],
    });
    
    s.start("Creating account")
    await delay(5000);
    s.stop("Account created")
    
    const shouldContinue2 = await confirm({
        message: 'Would you like to create another account?',
    });

    if (!shouldContinue2) {
        shouldEnd = true
    }
}

outro("Finished")