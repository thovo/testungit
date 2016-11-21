var git         = require 'ungit/source/git';
var gitParser   = require 'ungit/source/git-parser';

var task_git_show_conflict_list;
var repository_path = 'https://github.com/thovo/testungit';

task_git_show_conflict_list = git(['ls-files', '-u', '| cut -f 2', '| sort', '| uniq'], repository_path).parser(gitParser.parseGitLog).always(function(err, result) {
  if (err != null) {
    return console.log(err);
  } else {
    return console.log(result);
  }
});

task_git_show_conflict_list.start();
