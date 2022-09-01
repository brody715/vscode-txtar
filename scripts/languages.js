// Copied and modified from https://github.com/microsoft/vscode-markdown-tm-grammar/blob/main/build.js

/** @type {{id: string, exts: string[], fullnames?: string[], source: string | string[]}[]} */
const languages = [
  {id: "cue", exts: ["cue", "cue.golden"], source: "source.cue"},
  {id: "plaintext", exts: ["txt"], source: []},
  {id: "shellscript", exts: ["bash", "sh"], source: "source.shell"},
  {
    id: "css",
    exts: ["css"],
    source: "source.css",
  },
  {
    id: "html",
    exts: ["html", "htm", "shtml", "xhtml"],
    source: "text.html.basic",
  },
  {
    id: "ini",
    exts: ["ini", "conf"],
    source: "source.ini",
  },
  {
    id: "java",
    exts: ["java"],
    source: "source.java",
  },
  {id: "lua", identifiers: ["lua"], source: "source.lua"},
  {
    id: "makefile",
    exts: ["mk"],
    source: "source.makefile",
  },
  {
    id: "perl",
    exts: ["perl", "pl", "t"],
    source: "source.perl",
  },
  {
    id: "r",
    exts: ["R", "r"],
    source: "source.r",
  },
  {
    id: "ruby",
    exts: ["rb", "ruby"],
    source: "source.ruby",
  },
  {
    id: "php",
    exts: ["php"],
    source: ["text.html.basic", "source.php"],
  },
  {
    id: "sql",
    exts: ["sql", "ddl", "dml"],
    source: "source.sql",
  },
  {
    id: "vs_net",
    exts: ["vb"],
    source: "source.asp.vb.net",
  },
  {
    id: "xml",
    exts: ["xml"],
    source: "text.xml",
  },
  {
    id: "xsl",
    exts: ["xsl", "xslt"],
    source: "text.xml.xsl",
  },
  {
    id: "yaml",
    exts: ["yaml", "yml"],
    source: "source.yaml",
  },
  {
    id: "toml",
    exts: ["toml"],
    source: "source.toml",
  },
  {
    id: "dosbatch",
    exts: ["bat", "batch"],
    source: "source.batchfile",
  },
  {
    id: "clojure",
    exts: ["clj", "cljs", "clojure"],
    source: "source.clojure",
  },
  {
    id: "coffee",
    fullnames: ["Cakefile"],
    exts: ["coffee"],
    source: "source.coffee",
  },
  {id: "c", identifiers: ["c", "h"], source: "source.c"},
  {
    id: "cpp",
    exts: ["cpp", "cc", "cxx"],
    source: "source.cpp",
  },
  {
    id: "diff",
    exts: ["patch", "diff", "rej"],
    source: "source.diff",
  },
  {
    id: "dockerfile",
    fullnames: ["Dockerfile"],
    exts: ["dockerfile", "Dockerfile"],
    source: "source.dockerfile",
  },
  {
    id: "go",
    exts: ["go", "go.golden"],
    source: "source.go",
  },
  {
    id: "go.mod",
    fullnames: ["go.mod", "go.mod.golden"],
    source: "source.go.mod",
  },
  {
    id: "go-template",
    exts: ["tmpl", "tpl"],
    source: [],
  },
  {
    id: "javascript",
    exts: ["js", "mjs", "cjs"],
    source: "source.js",
  },
  {
    id: "javascriptreact",
    identifiers: ["jsx"],
    source: "source.jsx",
  },
  {
    id: "json",
    exts: ["json"],
    source: "source.json",
  },
  {
    id: "jsonc",
    exts: ["jsonc"],
    source: "source.json.comments",
  },
  {
    id: "less",
    exts: ["less"],
    source: "source.css.less",
  },
  {
    id: "swift",
    exts: ["swift"],
    source: "source.swift",
  },
  {
    id: "scss",
    exts: ["scss"],
    source: "source.css.scss",
  },
  {
    id: "python",
    exts: ["py"],
    source: "source.python",
  },
  {
    id: "rust",
    exts: ["rs"],
    source: "source.rust",
  },
  {
    id: "scala",
    exts: ["scala"],
    source: "source.scala",
  },
  {
    id: "shellscript",
    exts: ["sh", "bash", "zsh"],
    source: "source.shell",
  },
  {
    id: "typescript",
    exts: ["ts"],
    source: "source.ts",
  },
  {
    id: "typescriptreact",
    exts: ["tsx"],
    source: "source.tsx",
  },
  {
    id: "csharp",
    exts: ["cs"],
    source: "source.cs",
  },
  {
    id: "dart",
    exts: ["dart"],
    source: "source.dart",
  },
  {
    id: "markdown",
    exts: ["md"],
    source: "text.html.markdown",
  },
];

module.exports.languages = languages;
