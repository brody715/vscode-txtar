const fs = require("fs");
const path = require("path");
const {languages} = require("./languages");

function buildSyntaxFile() {
  const text = fs.readFileSync(
    path.join(__dirname, "txtar.tmLanguage.base.json"),
    "utf8"
  );
  const grammar = JSON.parse(text);

  const patterns = [];

  for (let lang of languages) {
    let sourceScopes = lang.source;
    if (!Array.isArray(sourceScopes)) {
      sourceScopes = [sourceScopes];
    }

    let filePatterns = [];

    const fullnames = lang.fullnames || [];
    for (const fullname of fullnames) {
      filePatterns.push(`${fullname}|\\S+\\/${fullname}`);
    }

    const exts = lang.exts || [];
    if (exts.length == 1) {
      filePatterns.push(`\\S+\\.${lang.exts[0]}`);
    } else if (exts.length > 1) {
      filePatterns.push(`\\S+\\.(?:${lang.exts.join("|")})`);
    }

    patterns.push({
      begin: `^-- (${filePatterns.join("|")}) --$`,
      beginCaptures: {
        1: {
          name: `entity.name.section.txtar`,
        },
      },
      end: "(?=^-- |\\z)",
      contentName: `meta.embedded.block.${lang.id}`,
      patterns: sourceScopes.map((source) => ({
        include: source,
      })),
    });
  }

  // fallback
  patterns.push({
    begin: `^-- (\\S+) --$`,
    beginCaptures: {
      1: {
        name: `entity.name.section.txtar`,
      },
    },
    end: "(?=^-- |\\z)",
    contentName: `meta.embedded.block.plaintext`,
  });

  grammar.repository.files = {
    patterns,
  };

  fs.writeFileSync(
    path.join(__dirname, "..", "syntaxes", "txtar.tmLanguage.json"),
    JSON.stringify(grammar, null, 2)
  );
}

function updatePackageJson() {
  const text = fs.readFileSync(
    path.join(__dirname, "..", "package.json"),
    "utf8"
  );
  const package = JSON.parse(text);

  const embeddedLanguagesSection = {};
  for (let lang of languages) {
    embeddedLanguagesSection[`meta.embedded.block.${lang.id}`] = lang.id;
  }

  package.contributes.grammars[0].embeddedLanguages = embeddedLanguagesSection;

  fs.writeFileSync(
    path.join(__dirname, "..", "package.json"),
    JSON.stringify(package, null, 2)
  );
}

function main() {
  buildSyntaxFile();
  updatePackageJson();
}

main();
