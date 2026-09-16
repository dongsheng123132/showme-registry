import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const profilesDir = join(root, 'profiles');
const required = ['schema', 'id', 'name', 'github', 'city', 'bio'];

function listJsonFiles(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) return listJsonFiles(fullPath);
    return entry.isFile() && entry.name.endsWith('.json') ? [fullPath] : [];
  });
}

function readProfile(file) {
  const profile = JSON.parse(readFileSync(file, 'utf8'));
  for (const key of required) {
    if (!profile[key]) {
      throw new Error(`${relative(root, file)} missing required field: ${key}`);
    }
  }
  if (profile.schema !== 'showme/v1') {
    throw new Error(`${relative(root, file)} has unsupported schema: ${profile.schema}`);
  }
  if (profile.id !== `github:${profile.github}`) {
    throw new Error(`${relative(root, file)} id must be github:${profile.github}`);
  }
  return profile;
}

const profiles = listJsonFiles(profilesDir)
  .map(readProfile)
  .sort((a, b) => String(b.updated_at || '').localeCompare(String(a.updated_at || '')));

writeFileSync(join(root, 'index.json'), `${JSON.stringify(profiles, null, 2)}\n`);
console.log(`built index.json with ${profiles.length} profiles`);
