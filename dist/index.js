import { intro, outro, confirm, select, spinner } from '@clack/prompts';
const s = spinner();
let shouldEnd = false;
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
intro("welcome to the salesforce account creation CLI tool");
const useJSON = await confirm({
    message: 'Would you like to use a JSON to create an account?',
});
while (shouldEnd == false) {
    const AccountType = await select({
        message: 'Pick an account type.',
        options: [
            { value: 'With 3PP', label: 'Third Party Payer' },
            { value: 'With Dependant', label: 'Dependant' },
            { value: 'default', label: 'Default Account' }
        ],
    });
    s.start("Creating account");
    await delay(5000);
    s.stop("Account created");
    const shouldContinue = await confirm({
        message: 'Would you like to create another account?',
    });
    if (!shouldContinue) {
        shouldEnd = true;
    }
}
outro("Finished");
//# sourceMappingURL=index.js.map