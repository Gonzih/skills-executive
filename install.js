#!/usr/bin/env node

/**
 * skills-executive installer
 * Copies skill files into the Claude Code skills directory (~/.claude/skills/)
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILLS = ['board-memo', 'okr-builder', 'decision-log', 'stakeholder-update'];

const sourceDir = path.join(__dirname, 'skills');
const targetDir = path.join(os.homedir(), '.claude', 'skills');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function install() {
  console.log('Installing executive skills for Claude Code...\n');

  let installed = 0;
  for (const skill of SKILLS) {
    const src = path.join(sourceDir, skill);
    const dest = path.join(targetDir, skill);

    if (!fs.existsSync(src)) {
      console.warn(`  ⚠  Skill source not found: ${skill}`);
      continue;
    }

    try {
      copyDir(src, dest);
      console.log(`  ✓  ${skill}`);
      installed++;
    } catch (err) {
      console.error(`  ✗  Failed to install ${skill}: ${err.message}`);
    }
  }

  console.log(`\n${installed}/${SKILLS.length} skills installed to ${targetDir}`);

  if (installed > 0) {
    console.log('\nAvailable skills:');
    console.log('  /board-memo         — Draft board memos and executive communications');
    console.log('  /okr-builder        — Build well-structured OKRs from strategic priorities');
    console.log('  /decision-log       — Document decisions with context, options, and rationale');
    console.log('  /stakeholder-update — Generate stakeholder updates for any audience');
    console.log('\nRestart Claude Code to load the new skills.');
  }
}

// Run if called directly (postinstall hook or CLI)
if (require.main === module) {
  install();
}

module.exports = { install };
