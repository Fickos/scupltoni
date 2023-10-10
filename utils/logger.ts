import path from "path";
import log4js, { Layout } from "log4js";
import config from "../config";
import fs from 'fs';

if (!config.logger.printToFile && !config.logger.printToConsole) {
    config.logger.printToConsole = true; // At least one has to be true
}

if (config.logger.printToFile && config.logger.logPath && !fs.existsSync(path.join(config.logger.logPath, config.serviceName))) {
    fs.mkdirSync(path.join(config.logger.logPath, config.serviceName));
}

log4js.addLayout('json', () => logEvent => {
    let retObj = {
        level: logEvent.level.levelStr,
        timestamp: logEvent.startTime,
        message: '',
        stackTrace: null,
        data: null,
        sql: '',
    }
    if (retObj.level == 'ERROR') {
        retObj.message = logEvent.data[0].message
        retObj.stackTrace = logEvent.data[0].stack;
        return JSON.stringify(retObj) + '\n';
    }
    if (logEvent.data.length === 1) {
        if (typeof logEvent.data[0] === 'string' && logEvent.data[0].startsWith('Executing')) {
            retObj.message = 'QUERY';
            retObj.sql = logEvent.data[0].split(": ", 2)[1];
            return JSON.stringify(retObj) + '\n';
        }
        retObj.message = logEvent.data[0];
        return JSON.stringify(retObj) + '\n';
    }
    if (logEvent.data.length === 2) {
        retObj.message = logEvent.data[0];
        retObj.data = logEvent.data[1];
        return JSON.stringify(retObj) + '\n';
    }

    return JSON.stringify(logEvent) + '\n';
});

type LogConfig = {
    appenders: Record<string, any>;
    categories: {
        default: {
            appenders: string[],
            level: string
        }
    }
}
// Write to file and send to stdout
const logConfig: LogConfig = {
    appenders: {},
    categories: { default: { appenders: [], level: "debug" } }
};

if (config.logger.printToConsole) {
    logConfig.appenders['toConsole'] = { type: 'stdout' };
    if (config.logger.consoleJson === true) {
        logConfig.appenders['toConsole'].layout = { type: 'json' }
    }
    logConfig.categories.default.appenders.push('toConsole');
}

if (config.logger.printToFile && config.logger.logPath) {
    logConfig.appenders['toFile'] = { type: "dateFile", layout: { type: 'json' }, filename: `${path.join(config.logger.logPath, config.serviceName, 'combined.log')}`, pattern: '.yyyy-MM-dd', maxLogSize: 268435456, compress: true };
    logConfig.appenders['error'] = { type: "dateFile", layout: { type: 'json' }, filename: `${path.join(config.logger.logPath, config.serviceName, 'error.log')}`, pattern: '.yyyy-MM-dd', maxLogSize: 268435456, compress: true };
    logConfig.appenders['errorFilter'] = { type: "logLevelFilter", appender: 'error', level: 'error' };
    logConfig.categories.default.appenders.push('toFile');
    logConfig.categories.default.appenders.push('errorFilter');
}

log4js.configure(logConfig);
export const logger = log4js.getLogger();
