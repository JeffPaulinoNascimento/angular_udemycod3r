{
    "extends";
    "./tsconfig.json",
        "compilerOptions";
    {
        "outDir";
        "./out-tsc/spec",
            "types";
        [
            "jasmine",
            "node"
        ];
    }
    "files";
    [
        "src/test.ts",
        "src/polyfills.ts"
    ],
        "include";
    [
        "src/**/*.spec.ts",
        "src/**/*.d.ts"
    ];
}
