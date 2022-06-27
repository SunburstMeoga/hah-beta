// load file

const filesInDirectory = dir =>
  new Promise(resolve =>
    dir.createReader().readEntries(entries => {
      Promise.all(
          entries
          .filter(e => e.name[0] !== '.')
          .map(e =>
            e.isDirectory ? filesInDirectory(e) : new Promise(resolve => e.file(resolve))
          )
        )
        .then(files => [].concat(...files))
        .then(resolve);
    })
  );

const timestampForFilesInDirectory = dir =>
  filesInDirectory(dir).then(files =>
    files.map(f => f.name + f.lastModifiedDate).join()
  );

// Refresh the current active page
const reload = () => {
  window.chrome.tabs.query({
      active: true,
      currentWindow: true
    },
    tabs => {
      // NB: see https://github.com/xpl/crx-hotreload/issues/5
      if (tabs[0]) {
        window.chrome.tabs.reload(tabs[0].id);
      }
      // Force page refresh
      window.chrome.runtime.reload();
    }
  );
};

// Watch for file changes
const watchChanges = (dir, lastTimestamp) => {
  timestampForFilesInDirectory(dir).then(timestamp => {
    // If the file has not changed, loop the watchChanges method
    if (!lastTimestamp || lastTimestamp === timestamp) {
      setTimeout(() => watchChanges(dir, timestamp), 1000); // retry after 1s
    } else {
      // Force page refresh
      reload();
    }
  });
};

const hotReload = () => {
  window.chrome.management.getSelf(self => {
    if (self.installType === 'development') {
      // Get the plugin directory and monitor file changes
      window.chrome.runtime.getPackageDirectoryEntry(dir => watchChanges(dir));
    }
  });
};

export default hotReload;