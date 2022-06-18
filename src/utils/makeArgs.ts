// eslint-disable-next-line
export function makeArgs(filter?: (arg: any, idx: number, args: any[]) => boolean, ...args: any[]) {
    if (!filter || typeof filter !== "function") return args;
    return args.filter(filter).flat(1);
}
