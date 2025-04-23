/// <reference types="node" />
export declare class FileBuffer {
    name: string;
    type: string;
    buffer: Buffer;
    size: number;
    lastModified: number;
    webkitRelativePath: string;
    constructor(buffer: Buffer, fileName: string, contentType: string);
    slice(): any;
    stream(): any;
    text(): any;
    arrayBuffer(): Promise<any>;
}
