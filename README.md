# Use to test node modules ungit

Quick setup to test the command to get list of conflict files:
`git diff --name-only --diff-filter=U` or `git ls-files -u  | cut -f 2 | sort | uniq`
