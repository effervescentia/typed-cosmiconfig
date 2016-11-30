declare namespace cosmiconfig {
  interface ExplorerResults {
    config: any;
    filepath: string;
  }

  interface Options {
    packageProp?: string | boolean;
    rc?: string | boolean;
    js?: string | boolean;
    argv?: string | boolean;
    rcStrictJson?: boolean;
    rcExtensions?: boolean;
    stopDir?: string;
    cache?: boolean;
    transform?: (results: ExplorerResults) => Promise<any>;
  }

  interface Explorer {
    load(searchPath?: string, configPath?: string): Promise<ExplorerResults> | null;
    clearFileCache();
    clearDirectoryCache();
    clearDirectoryCache();
    clearCaches();
  }
}

declare interface Cosmiconfig {
  (module: string, options?: cosmiconfig.Options): cosmiconfig.Explorer;
}

declare const cosmiconfig: Cosmiconfig;

export = cosmiconfig;
