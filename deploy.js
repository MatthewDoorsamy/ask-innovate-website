const fs = require('fs');
const path = require('path');

// Source: the 'out' folder created by next build
const sourceDir = path.join(__dirname, 'out');

// Target: your public_html directory (ADJUST THIS PATH!)
// Common options:
// '../public_html' - if your git repo is one level inside
// '../../public_html' - if nested two levels deep
// '/home/username/public_html' - absolute path
const targetDir = path.join(__dirname, '../public_html');

console.log('========================================');
console.log('Starting deployment...');
console.log('========================================');
console.log('Source:', sourceDir);
console.log('Target:', targetDir);
console.log('========================================');

// Check if source directory exists
if (!fs.existsSync(sourceDir)) {
  console.error('❌ Error: "out" folder not found!');
  console.error('   Make sure you run "npm run build" first.');
  process.exit(1);
}

// Copy files recursively
function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    // Create directory if it doesn't exist
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    // Copy all files in directory
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    // Copy file
    fs.copyFileSync(src, dest);
    console.log('✓ Copied:', path.relative(sourceDir, src));
  }
}

try {
  // Start copying
  copyRecursive(sourceDir, targetDir);
  
  console.log('========================================');
  console.log('✅ Deployment complete!');
  console.log('========================================');
  console.log('Files deployed to:', targetDir);
  console.log('Your site should now be live!');
  console.log('========================================');
} catch (error) {
  console.error('========================================');
  console.error('❌ Deployment failed!');
  console.error('========================================');
  console.error('Error:', error.message);
  console.error('========================================');
  process.exit(1);
}