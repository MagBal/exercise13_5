var OSinfo = require('./modules/OSInfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/version':
                process.stdout.write('Node.js version - ' + process.versions.node + '.\n');
                break;
            case '/lang':
                process.stdout.write('Language (macOS i Linux) - ' + process.env.lang + '.\n');
                break;
            case '/OSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        }
    }
});