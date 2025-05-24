#!/bin/bash

FILE_TO_REMOVE="src/settings/setings.ts"

echo "⚠️  WARNING: This will permanently delete '$FILE_TO_REMOVE' from Git history!"
read -p "Are you sure you want to continue? (yes/no): " confirm
if [ "$confirm" != "yes" ]; then
  echo "❌ Cancelled."
  exit 1
fi

# Ensure git-filter-repo is installed
if ! command -v git-filter-repo &> /dev/null
then
    echo "📦 Installing git-filter-repo..."
    pip install git-filter-repo
fi

# Step 1: Remove file from Git index
git rm --cached "$FILE_TO_REMOVE"
echo "✅ Removed $FILE_TO_REMOVE from Git index"

# Step 2: Commit the removal
git commit -m "Remove $FILE_TO_REMOVE from repo"
echo "✅ Committed removal"

# Step 3: Remove from entire Git history
npx git-filter-repo --path "$FILE_TO_REMOVE" --invert-paths
echo "🧹 Removed $FILE_TO_REMOVE from Git history"

# Step 4: Push rewritten history
git push origin --force --all
git push origin --force --tags
echo "✅ Pushed cleaned repo history to remote"

# Step 5: Add to .gitignore
echo "$FILE_TO_REMOVE" >> .gitignore
echo "✅ Added $FILE_TO_REMOVE to .gitignore"
