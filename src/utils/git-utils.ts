import { exec } from "child_process";
import * as path from "path";

export function runGitBlame(filePath: string, line: number): Promise<string> {
    return new Promise((resolve, reject) => {
        const dir = path.dirname(filePath);

        exec(
            `git blame -L ${line},${line} "${filePath}"`,
            { cwd: dir },
            (err, stdout, stderr) => {
                if (err) {
                    console.error(stderr);
                    return reject(err);
                }
                resolve(stdout);
            }
        );
    });
}

export function runGitHistory(filePath: string, line: number): Promise<string> {
    const path = require("path");

    return new Promise((resolve, reject) => {
        const dir = path.dirname(filePath);

        exec(
            `git log -n 3 -L ${line},${line}:"${filePath}"`,
            { cwd: dir },
            (err, stdout, stderr) => {
                if (err) {
                    console.error(stderr);
                    return reject(err);
                }
                resolve(stdout);
            }
        );
    });
}